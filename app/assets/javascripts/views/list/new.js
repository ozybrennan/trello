TrelloClone.Views.listNew = Backbone.View.extend({
  template: JST['list/form'],

  tagName: 'form',

  events: {
    'submit': 'createList'
  },

  render: function() {
    $('.list-errors').empty();
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
        $('.list-errors').empty();
        response.responseJSON.forEach(function(el){
          var li = $('<li></li>').html(el);
          $('.list-errors').append(li);
        })
        $("#list-title").effect("highlight");
      }.bind(this),
    })
  },

});
