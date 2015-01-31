TrelloClone.Views.boardNew = Backbone.View.extend({
  template: JST['board/form'],

  tagName: 'form',

  events: {
    'submit': 'createBoard'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var view = this;
    var attributes = $(event.currentTarget).serializeJSON();
    var model = new TrelloClone.Models.Board();
    model.save(attributes, {
      success: function (model){
        TrelloClone.Collections.boards.add(model);
        view.render();
      },
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
