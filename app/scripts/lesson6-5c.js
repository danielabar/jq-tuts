'use strict';

// Goal: fade out each box, sequentially AND THEN run a function
//       when all animation has completed
(function() {


  // solution is to chain promise after each loop
  // trick to make each delay incrementally longer
  $('div.box').each(function(i) {
    $(this).delay(1000 * i++).fadeOut(100);
  }).promise().done(function() {
    console.log('animations have completed');
  });

  // my attempt wrapping the animation part in a separate function
  // var animateBoxes = function() {
  //   var dfd = $.Deferred();
  //   var boxes = $('div.box');
  //   var numBoxes = boxes.length;
  //   boxes.each(function(i) {
  //     $(this).delay(1000 * i++).fadeOut('100', function() {
  //       if (i === numBoxes) {
  //         var message = 'i = ' + i + ', resolving promise';
  //         dfd.resolve(message);
  //       }
  //     });
  //   });
  //   return dfd.promise();
  // };
  // animateBoxes().then(function(message) {
  //   console.log('animation complete, message = ' + message);
  // });

})();
