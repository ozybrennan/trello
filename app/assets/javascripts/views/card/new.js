TrelloClone.Views.cardNew = Backbone.View.extend({
  template: JST['card/form'],

  tagName: 'form',

  events: {
    'submit': 'createCard'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createCard: function (event) {
    debugger
    event.preventDefault();
    var attributes = $(event.currentTarget).serializeJSON();
    attributes["card"]["list_id"] = this.model.id
    var model = new TrelloClone.Models.Card({ list: this.model });
    model.save(attributes, {
      success: function (model){
        debugger
        this.model.cards().add(model);
        this.render();
      }.bind(this)
    })
  },

});
