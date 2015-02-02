TrelloClone.Views.cardShow = Backbone.View.extend({
  template: JST['card/show'],

  tagName: 'li',

  attributes: function (){
    return {
      "data-order": this.model.get("ord"),
      "data-list-id": this.model.get("list_id"),
      "id": this.model.get("id")
    }
  },


  events: {
    "mouseenter" : "addDeleteButton",
    "mouseleave" : "deleteDeleteButton",
    "click .delete" : "deleteCard",
  },

  render: function() {
    var content = this.template({ card: this.model });
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
