TrelloClone.Views.cardShow = Backbone.View.extend({
  template: JST['card/show'],

  tagName: 'li',

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.append(content);
    return this;
  },

});
