'use strict';

(function() {

  $('div.content').hide();

  // jQuery has helper values to control effect speeds
  //  slow = 600ms
  //  fast = 200ms
  //  _default = 400ms (this can be overridden)
  console.log($.fx.speeds);

  $.fx.speeds._default = 2000;

  // can also add custom speeds
  $.fx.speeds.tortoise = 5000;

  $('h1').on('click', function() {
    $(this).next().slideDown('tortoise');
  });

})();