TrelloClone.Views.boardIndexItem = Backbone.View.extend({
  template: JST['board/indexItem'],

  tagName: 'li',

  events: {
    'click .show-link': 'redirectToShow'
  },

  render: function() {
    var content = this.template({ board: this.model });
    this.$el.append(content);
    return this;
  },

  redirectToShow: function() {
    var url = 'boards/' + this.model.id;
    Backbone.history.navigate(url, {trigger: true})
  },

});
