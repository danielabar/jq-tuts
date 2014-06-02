'use strict';

(function() {

  // reference all the dd elements on the page
  var dd = $('dd');

  // hide all the dd elements using a filter
  // only elements that match the criteria specified in filter will receive the class
  // nth-child(n+4) means select the fourth one minimum
  // begin at 4th child and select the rest
  dd.filter(':nth-child(n+4)').hide();


  /* Other useful functions
  dd.hide();  // inverse: show, this appends to DOM element: style="display: none; "
  dd.addClass('hide');
  dd.toggle();    // if visible hide it, otherwise show
  dd.show();
  dd.fadeIn();    //inverse:fadeOut
  dd.slideDown(); //inverse: slideUp
  */

  // when user hovers over definition term, show the details that follow
  $('dt').on('mouseenter', function() {
    $(this)
      .next()
      .slideDown(200)
        .siblings('dd').slideUp(200); // slide over 200 ms
  });

})();