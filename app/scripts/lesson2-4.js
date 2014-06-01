'use strict';

// IIFE: (anonymous) immediately invoked function expresssion
(function() {

  // Save a reference to stylesheet link so we don't need to get it every time button is clicked
  var daynightLink = $('link#daynight');

  // this targets ALL buttons and listen for click event
  // pass a function to click event - this will be run when event happens
  // $('button').click(function() {
  //   // If pass one arg to attr, it returns the value
  //   // var linkHref = $('link#daynight').attr('href');

  //   // If pass two args to attr, it sets the value
  //   // $('link#daynight').attr('href', 'styles/lesson2-4-night.css');

  //   // Another way is with data attributes (HTML5 custom attributes)
  //   var clickedButton = $(this);
  //   var stylesheet = clickedButton.data('file');

  //   daynightLink.attr('href', stylesheet);

  //   // Get this buttons siblings: elements on the SAME level and toggle disabled attr
  //   clickedButton.siblings('button').removeAttr('disabled');

  //   // Prevent user from clicking button if that is the current stylesheet
  //   clickedButton.attr('disabled', 'disabled');

  // });

  // Another solution with chaining
  $('button').click(function() {
    var $this = $(this),
      stylesheet = $this.data('file');

    daynightLink.attr('href', stylesheet);

    $this
      .siblings('button')
        .removeAttr('disabled')
        .end()
      .attr('disabled', true);
  });

  // My attempt at solution
  // $('button').click(function() {
  //   var thisButton = $(this);
  //   var buttonText = thisButton.text();
  //   if (buttonText === 'Day') {
  //     $('link#daynight').attr('href', 'styles/lesson2-4-day.css');
  //   }
  //   if (buttonText === 'Night') {
  //     $('link#daynight').attr('href', 'styles/lesson2-4-night.css');
  //   }
  // });

  $('h1').mouseenter(function() {
    $(this).addClass('emphasis');
  });

  $('h1').mouseleave(function() {
    $(this).removeClass('emphasis');
  });

})();