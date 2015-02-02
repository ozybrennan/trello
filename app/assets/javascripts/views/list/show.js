TrelloClone.Views.listShow = Backbone.CompositeView.extend({
  template: JST['list/show'],

  events: {
    'click .list-delete': 'deleteList',
  },

  className: "list",

  initialize: function() {
    this.model.cards().each(this.addCard.bind(this));

    var cardNew = new TrelloClone.Views.cardNew({model: this.model});
    this.addSubview(".card-new", cardNew.render());

    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
  },

  render: function() {
    var view = this;
    var content = this.template({list: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  deleteList: function () {
    event.preventDefault();
    this.model.destroy();
  },

  addCard: function(item) {
    var card = new TrelloClone.Views.cardShow({model: item});
    this.addSubview(".cards", card.render());
  },

  removeCard: function(item){
    var subview = _.find(this.subviews(".cards"),
    function (subview) {
      return subview.model === item;
    });
    this.removeSubview(".cards", subview);
    this.render();
  },

});
