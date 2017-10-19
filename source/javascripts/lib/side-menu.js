$(function() {
  // Decide event type
  var eventtype = Modernizr.touch ? 'touchstart' : 'click';
  // Open navigation when click icon
  $('.site-nav-icon').on(eventtype, function () {
    $('body').addClass("site-nav-transition site-nav-drawer-open");
  });
  // Close navigation when click overlay
  $('.site-nav-overlay').on(eventtype, function () {
    $('body').removeClass("site-nav-drawer-open");
  });
  // Remove transistion class when transition finish
  $('#container').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    if(!$('body').hasClass("site-nav-drawer-open")) {
      $('body').removeClass("site-nav-transition");
    }
  });
});
