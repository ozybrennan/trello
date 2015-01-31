TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    '': 'boardIndex',
    'boards/:board_id': 'boardShow'
  },

  boardIndex: function() {
    TrelloClone.Collections.boards.fetch({
      success: function () {
        var indexView = new TrelloClone.Views.boardIndex({ collection:
          TrelloClone.Collections.boards
        });
        this._swapView(indexView);
      }.bind(this)
    });
  },

  boardShow: function(id) {
    var model = TrelloClone.Collections.boards.getOrFetch(id)
    var showView = new TrelloClone.Views.boardShow({ model: model })
    this._swapView(showView);
  },

  _swapView: function(newView) {
    this.currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  },

})
