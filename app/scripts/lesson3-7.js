'use strict';

// alias jQuery and make it availabel as local var $,
// in case this will be used in a project where $ means something else
(function($) {

  var sliderUL = $('div.slider').children('ul');
  var imgs = sliderUL.find('img');
  // this syntax breaks out of jQuery and just using regular DOM node
  var imgWidth = imgs[0].width; // returns 600, NOT 600px
  var imgsLen = imgs.length; // 4
  var current = 1;
  var totalImgsWidth = imgWidth * imgsLen;

  $('#slider-nav').show().find('a').on('click', function(e) {
    var direction = $(this).data('dir');
    var loc = imgWidth;

    // update current value
    if (direction === 'next') {
      current += 1;
    } else {
      current -=1;
    }

    // if first image
    if (current === 0) {
      current = imgsLen;
      loc = totalImgsWidth - imgWidth;
      direction = 'next';
    } else if ((current - 1) === imgsLen) { // Are we at end? Should we reset?
      current = 1;
      loc = 0;
    }

    transition(sliderUL, loc, direction);
    e.preventDefault();


  });

  // adjust container's margin left
  // loc is where we're headed: 600 or 0
  var transition = function(container, loc, direction) {
    var unit; // will either be -= or +=
    if (direction && loc !== 0) {
      unit = ( direction === 'next') ? '-=' : '+=';
    }
    container.animate({
      'margin-left': unit ? (unit + loc) : loc
    }, {
      'duration': 500
    });
  };

})(jQuery);