TrelloClone.Views.listNew = Backbone.View.extend({
  template: JST['list/form'],

  tagName: 'form',

  events: {
    'submit': 'createList'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createList: function (event) {
    event.preventDefault();
    var attributes = $(event.currentTarget).serializeJSON();
    attributes["list"]["board_id"] = this.model.id
    var model = new TrelloClone.Models.List({ board: this.model });
    model.save(attributes, {
      success: function (model){
        this.model.lists().add(model);
        this.render();
      }.bind(this),
      error: function(model, response) {
        $('.errors').empty();
        response.responseJSON.forEach(function(el){
          var li = $('<li></li>').html(el);
          $('.errors').append(li);
        })
        this.render();
      }.bind(this),
    })
  },

});
