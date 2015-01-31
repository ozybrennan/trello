TrelloClone.Views.listShow = Backbone.View.extend({
  template: JST['list/show'],

  events: {
    'click .list-delete': 'deleteList'
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.append(content);
    return this;
  },

  deleteList: function () {
    event.preventDefault();
    this.model.destroy();
  }

});
