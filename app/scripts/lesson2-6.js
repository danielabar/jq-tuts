'use strict';

(function() {

  // Clone the 'Click Me' h2 when user clicks on it

  // with old jquery, bind was used - don't use this anymore
  // as of jQuery 1.7, bind, live and delegate are all pointers to the 'on' method
  // this attaches event handler to EVERY element matched by selector, in this case, all the h2's on the page
  $('h2').bind('click', function() {
    console.log('clicked via bind');

    // Issue: the cloned element does NOT receive the click handler
    // $(this).clone().appendTo('#mainContainer');
    // One solution is to pass true to clone to retain event handlers (default is false)
    $(this).clone(true).appendTo('#mainContainer');
  });

  // Another way is to use live: implements event delegation
  // Rather than attaching multiple event handlers to each h2,
  // live will attach one event handler to the document, and detect if clicked element is an h2
  // NOTE: this project using jQuery 1.10 and live no longer supported (was deprecated as of 1.7)
  // $('h2').live('click', function() {
  //   console.log('clicked via live');
  //   $(this).clone(true).appendTo('#mainContainer');
  // });

  // Note that .click is shorthand for on('click', callback)
  // $('h2').click(function() {
  //   console.log('clicked via shorthand');
  // });

})();