TrelloClone.Views.cardNew = Backbone.View.extend({
  template: JST['card/form'],

  tagName: 'form',

  events: {
    'submit': 'createCard'
  },

  render: function() {
    $('.card-errors').empty();
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createCard: function (event) {
    event.preventDefault();
    var attributes = $(event.currentTarget).serializeJSON();
    attributes["card"]["list_id"] = this.model.id
    var model = new TrelloClone.Models.Card({ list: this.model });
    model.save(attributes, {
      success: function (model){
        this.model.cards().add(model);
        this.render();
      }.bind(this),
      error: function(model, response) {
        $('.card-errors').empty();
        response.responseJSON.forEach(function(el){
          var li = $('<li></li>').html(el);
          $('.card-errors').append(li);
        })
        $("#card-title").effect("highlight");
      }.bind(this),
    })
  },

});
