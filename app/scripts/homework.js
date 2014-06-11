'use strict';

(function() {

  // cache a reference to the box for performance
  var box = $('div.box');

  // jQuery built in fadeToggle
  $('button#fadeToggle').on('click', function() {
    box.fadeToggle('slow');
  });

  // jQuery built in slideToggle
  $('button#slideToggle').on('click', function() {
    box.slideToggle('slow');
  });

  // My custom implementation of fadeToggle
  $('button#fadeIt').on('click', function() {
    box.animate({
      'opacity': 'toggle'
    }, {
      duration: 500
    });
  });

  // My custom implementation of slideToggle
  $('button#slideIt').on('click', function() {
    box.animate({
      'height': 'toggle'
    }, {
      duration: 500
    });
  });

  // My custom implementation fadeSlideToggle
  $('button#fadeSlide').on('click', function() {
    box.animate({
      'opacity': 'toggle',
      'height': 'toggle'
    }, {
      duration: 500
    });
  });

  // Homework: extend core jQuery with fadeSlideToggle
  $.fn.fadeSlideToggle = function(duration) {
    var $this = $(this);
    var effectSpeed = duration || $.fx.speeds._default;
    return $this.animate({
      'opacity': 'toggle',
      'height': 'toggle'
    }, {
      duration: effectSpeed
    });
  };

  // Homework: Use the custom func in a click handler
  $('button#homework').on('click', function() {
    box.fadeSlideToggle(2000);
  });

})();