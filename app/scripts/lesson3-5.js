'use strict';

// When button is clicked, increase the font size
(function() {

  // cache a reference to the box for performance
  var box = $('div.box');

  $('button#increase').on('click', function() {
    box.css('font-size', '+=5');
  });

  $('button#decrease').on('click', function() {
    box.css('font-size', '-=5');
  });

  // // OLD SCHOOL: increase font size on button click
  // $('button').on('click', function() {
  //   // get the font size (string) and convert to number
  //   var fontSize = parseInt(box.css('font-size'), 10);
  //   box.css('font-size', fontSize + 5);
  // });

})();