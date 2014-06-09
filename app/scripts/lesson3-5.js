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
      }
    });
  });

  // // OLD SCHOOL: increase font size on button click
  // $('button').on('click', function() {
  //   // get the font size (string) and convert to number
  //   var fontSize = parseInt(box.css('font-size'), 10);
  //   box.css('font-size', fontSize + 5);
  // });

})();