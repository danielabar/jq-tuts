'use strict';

(function() {

  // hide all the dd elements using a filter
  // only elements that match the criteria specified in filter will receive the class
  // nth-child(n+4) means select the fourth one minimum begin at 4th child and select the rest
  $('dd').filter(':nth-child(n+4)').hide();


  /* Other useful functions
  dd.hide();  // inverse: show, this appends to DOM element: style="display: none; "
  dd.addClass('hide');
  dd.toggle();    // if visible hide it, otherwise show
  dd.show();
  dd.fadeIn();    //inverse:fadeOut
  dd.slideDown(); //inverse: slideUp
  */

  // when user hovers over definition term, show the details that follow
  // this attaches event listener to EVERY dt element on the page, could be 100's of FAQ's
  // would be better to attach a single event listener to parent, then determine which element was hovered over
  // second argument 'dt' is selector string - i.e. only run the callback function if user is hovering over a dt
  $('dl').on('mouseenter', 'dt', function() {
    $(this)
      .next()
      .slideDown(200)
        .siblings('dd').slideUp(200); // slide over 200 ms
  });

})();