TrelloClone.Views.listShow = Backbone.CompositeView.extend({
  template: JST['list/show'],

  events: {
    'click .list-delete': 'deleteList'
  },

  initialize: function() {
    this.model.cards().each(this.addCard.bind(this));

    this.listenTo(this.model.cards(), "add", this.addCard);
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

});
