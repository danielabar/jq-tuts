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

    (direction === 'next') ? current += 1 : current -=1

    // if first image
    if (current === 0) {
      current = imgsLen;
      direction === 'next'
    } else if (current - 1 === imgsLen) {
      // if last image'
      current = 1;
      direction === 'prev';
    }

    transition(sliderUL, '', direction);
    e.preventDefault();


  });

  // adjust container's margin left
  var transition = function(container, loc, direction) {
    container.animate({
      'margin-left': '-=600'
    }, {
      'duration': 500
    });
  };

})(jQuery);