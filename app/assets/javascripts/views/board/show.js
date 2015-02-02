TrelloClone.Views.boardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  initialize: function () {
    this.model.lists().each(this.addList.bind(this));

    var listNew = new TrelloClone.Views.listNew({model: this.model});
    this.addSubview(".list-new", listNew.render());

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "remove", this.removeList);
    this.listenTo(this.model.lists(), "add", this.addList);

  },

  events: {
    'sortstop': "sortToDo",
  },

  render: function() {
    var view = this;
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function () {
    this.$('#lists').sortable();
    _(this.subviews()).each(function (subviews, selector) {
      subviews.forEach(function (subview) {
        subview.onRender && subview.onRender();
      })
    })
  },

  addList: function(item){
    var list = new TrelloClone.Views.listShow({model: item});
    this.addSubview("#lists", list.render());
  },

  removeList: function(item){
    var subview = _.find(this.subviews("#lists"),
      function (subview) {
        return subview.model === item;
      });
    this.removeSubview("#lists", subview);
    this.render();
  },

  sortToDo: function(event, ui) {
    var $sortedItem = $(ui.item);

    $sortedItem.removeClass('dragged');

    if ($sortedItem.attr("class") === "list") {
      var item = this.model.lists().get($sortedItem.attr("id"));
      var tagType = "div";
    } else {
      var list = this.model.lists().get($sortedItem.data("list-id"));
      var item = list.cards().get($sortedItem.attr("id"));
      var tagType = "li";
    }

    var next_order = $sortedItem.next(tagType).data("order");
    var prev_order = $sortedItem.prev(tagType).data("order");
    var updated_order = this._calculatePosition(prev_order, next_order);

    item.set("ord", updated_order)
    item.save();
  },

  _calculatePosition: function(prevPos, nextPos) {
    if (!nextPos) {
      if (!prevPos) {
        return 1;
      } else {
        return (prevPos + 1);
      }
    } else if (!prevPos) {
      return (nextPos / 2);
    }
    return (nextPos + prevPos) / 2;
  },


});
