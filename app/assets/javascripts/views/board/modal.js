TrelloClone.Views.boardModal = Backbone.View.extend({
  template: JST['board/modal'],
  className: 'my-modal',

  render: function() {
    $("#main").addClass("overlay");
    var content = this.template();
    this.$el.append(content);
    this.center();
    return this;
  },

  center: function () {
    var top, left;

    top = Math.max($(window).height() - $("modal").outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $("modal").outerWidth(), 0) / 2;

    debugger

    $(".my-modal").css({
      top: top + $(window).scrollTop(),
      left: left + $(window).scrollLeft(),
    });
  },

});
