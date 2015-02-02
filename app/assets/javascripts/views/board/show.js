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
  
  render: function() {
    var view = this;
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
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

});
