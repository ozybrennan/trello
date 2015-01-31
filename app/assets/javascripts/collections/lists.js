TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

  url: function () {
    return this.board.url() + '/lists';
  },

  comparator: 'ord',

  initialize: function (model, options) {
    this.board = options.board;
  }

})
