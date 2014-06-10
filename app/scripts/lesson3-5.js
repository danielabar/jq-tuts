'use strict';

// When button is clicked, increase the font size
(function() {

  // cache a reference to the box for performance
  var box = $('div.box');
  var fontSizeDisplay = $('#fontSizeDisplay');

  $('button#increase').on('click', function() {
    box.css('font-size', '+=5');
  });

  $('button#decrease').on('click', function() {
    box.css('font-size', '-=5');
  });

  // Can also pass an object to css function,
  // to change multiple properties at once
  $('button#change').on('click', function() {
    box.css({
      'font-size': '+=2',
      'color': 'white'
    });
  });

  // // OLD SCHOOL: increase font size on button click
  // $('button').on('click', function() {
  //   // get the font size (string) and convert to number
  //   var fontSize = parseInt(box.css('font-size'), 10);
  //   box.css('font-size', fontSize + 5);
  // });

  // Note: animate does not have ability to animate color
  // Use css3 or jQuery color plugin to achieve that
  // $('button#animate').on('click', function() {
  //   // Default unit in jQuery is pixels, therefore no need to specify
  //   // 2nd (optional) arg to animate is duration in ms (ow jQuery uses its default)
  //   // 3rd (optional) arg is easing, default is 'swing'
  //   // jQuery only has 'swing' and 'linear', use easing plugin if you need more
  //   // 4th (optional) arg is callback, triggerred after animation completes
  //   box.animate({
  //     'font-size': '+=2',
  //     'width': '+=10'
  //   }, 2000, 'swing', function() {
  //     console.log('finished');
  //   });
  // });

  // Another way to call animate is with exactly 2 arguments
  $('button#animate').on('click', function() {
    box.animate({
      'font-size': '+=5'
    }, {
      duration: 500,
      complete: function() {
        console.log('completed');
      },
      step: function(fontSize) {
        // step function is called for every iteration of the animation
        fontSizeDisplay.text(fontSize);
        // 'this' is element being manipulated
        console.log('The current font size is: ' + $(this).css('fontSize'));
      }
    });
  });

  // Animations can be chained
  // By default, second will wait for first to complete
  // set 'queue' to false if all animations should happen at the SAME time
  $('button#animate2').on('click', function() {
    box
      .animate({'fontSize': '+=5'}, {duration: 500 })
      .animate({'top': 500}, {duration: 3000, queue: false});
  });

  // use outerWidth/Height so jQuery will take margin/padding into account
  $('button#centerbox').on('click', function() {
    var winWidth = ($(window).width() / 2) - (box.outerWidth() / 2);
    var winHeight = ($(window).height() / 2) - (box.outerHeight() / 2);
    box
      .css({'position': 'absolute'})
      .animate({'top': winHeight}, {duration: 1000})
      .animate({'left': winWidth}, {duration: 1000, queue: false});
  });

  // always more performant to animate with css
  $('button#circle').on('click', function() {
    box.addClass('circle');
  });


})();