'use strict';

(function() {

  // note all methods return the jQuery object so things can be chained
  var content = $('div.content').hide();

  // extend core jQuery with custom 'flash' effect
  // 'this' refers to div with class of content on which function is called
  $.fn.flash = function(slideSpeed, delaySpeed) {
    var $this = $(this);
    var effectSpeed = slideSpeed || $.fx.speeds._default;
    var holdSpeed = delaySpeed || $.fx.speeds._default;

    return $this.slideDown(effectSpeed, function() {
      $this.addClass('attention');
      $this.delay(holdSpeed).slideUp(effectSpeed, function() {
        $this.removeClass('attention');
      });
    });
  };

  $('h1').on('click', function() {
    content.flash(300, 3000);
  });

})();