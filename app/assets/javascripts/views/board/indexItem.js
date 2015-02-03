TrelloClone.Views.boardIndexItem = Backbone.View.extend({
  template: JST['board/indexItem'],

  tagName: 'li',

  events: {
    'click .show-link': 'redirectToShow',
    'click .board-delete' : 'deleteBoard'
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

  deleteBoard: function () {
    var view = new TrelloClone.Views.boardModal();
    $(".backdrop").append(view.render().$el);
    view.center();
    // event.preventDefault();
    // this.model.destroy();
  },

});
