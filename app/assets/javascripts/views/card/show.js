TrelloClone.Views.cardShow = Backbone.View.extend({
  template: JST['card/show'],

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.append(content);
    return this;
  },

});
