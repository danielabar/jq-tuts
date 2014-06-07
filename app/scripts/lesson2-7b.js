'use strict';

(function() {

  // grab all the span elements that have a class of callout
  // filter through each callout and apply a block quote to their nearest paragraph parent
  // jQuery each makes this easy
  // inside anon function 'this' refers to span element
  $('span.callout').each(function() {

    // cache 'this' to avoid multiple references
    var calloutSpan = $(this);

    // create a block quote
    $('<blockquote></blockquote>', {
      class: 'callout',
      text: calloutSpan.text()
    }).prependTo(calloutSpan.closest('p'));
  });

  // More efficient way to find span callout in article:
  // $('article').find('span.co')

})();