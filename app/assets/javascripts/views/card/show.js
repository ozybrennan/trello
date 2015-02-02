TrelloClone.Views.cardShow = Backbone.View.extend({
  template: JST['card/show'],

  tagName: 'li',

  events: {
    "mouseenter" : "addDeleteButton",
    "mouseleave" : "deleteDeleteButton",
    "click .delete" : "deleteCard",
  },

  render: function() {
    var content = this.template({ list: this.model });
    this.$el.append(content);
    return this;
  },

  addDeleteButton: function() {
    this.$el.append("<button class='delete'>Delete Button</button>");
  },

  deleteDeleteButton: function() {
    $(".delete").remove();
  },

  deleteCard: function() {
    event.preventDefault();
    this.model.destroy();
  },

});
