TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: 'api/lists',

  initialize: function (options) {
    this.board = options.board;
  }

})
