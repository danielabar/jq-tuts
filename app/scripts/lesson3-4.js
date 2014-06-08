'use strict';

(function() {

  // note all methods return the jQuery object so things can be chained
  var content = $('div.content').hide();

  // extend core jQuery with custom 'flash' effect
  // 'this' refers to div with class of content on which function is called
  $.fn.flash = function(speed, easing, callback) {
    var $this = $(this);
    return $this.slideDown(500, function() {
      $this.addClass('attention');
      $this.delay(2000).slideUp(500, function() {
        $this.removeClass('attention');
      });
    });
  };

  $('h1').on('click', function() {
    content.flash();
  });

})();