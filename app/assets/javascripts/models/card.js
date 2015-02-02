TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: 'api/cards',

  cards: function() {
    this._cards = this._cards || new TrelloClone.Collections.Cards([], { list: this});
    return this._lists;
  },

  parse: function (payload) {
    if (payload.cards) {
      this.lists().set(payload.cards, { parse: true });
      delete payload.cards;
    }
    return payload;
  }

})
