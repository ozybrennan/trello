window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TrelloClone.Routers.Router({ $rootEl: $("#main")});
    Backbone.history.start();
  }
};

Backbone.CompositeView = Backbone.View.extend({

  addSubview: function (selector, view) {
    this.subviews(selector).push(view);
    this.attachSubview(selector, view);
  },

  attachSubview: function(selector, subview) {
    this.$(selector).append(subview.$el);
    subview.delegateEvents();
  },

  attachSubviews: function() {
    var view = this;
    _(this.subviews()).each(function(subviews, selector){
      view.$(selector).empty();

      _(subviews).each(function(subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  removeSubview: function(selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  remove: function() {
      Backbone.View.prototype.remove.call(this);
      _(this.subviews()).each(function(subviews){
        _(subviews).each(function (subview) {subview.remove(); });
      });
  },

  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if(!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  },

});
