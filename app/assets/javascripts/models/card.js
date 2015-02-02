TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/cards',

  items: function() {
    this._items = this._items || new TrelloClone.Collections.Items([], { card: this});
    return this._lists;
  },

  parse: function (payload) {
    if (payload.items) {
      this.cards().set(payload.items, { parse: true });
      delete payload.items;
    }
    return payload;
  }

})
