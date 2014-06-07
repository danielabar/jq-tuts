'use strict';

(function() {

  // adds text at the end of article (i.e selected element)
  $('article').append('APPEND: THIS GOES AT THE END OF ARTICLE');

  // adds text at the beginning of article
  $('article').prepend('PREPEND: THIS GOES AT BEGINNING OF ARTICLE');

  // add text after h1 (i.e. specific point within the article)
  $('h1').after('AFTER: THIS IS AFTER THE H1');

  // add text before the first paragraph
  $('p').first().before('BEFORE: THIS IS BEFORE THE FIRST PARAGRAPH');

  // OLD WAY to append html fragment - DO NOT DO THIS IF CAN BE AVOIDED
  $('<h2>APPENDED H2 ELEMENT SLOPPY</h2>').appendTo('article');

  // A better way is to tell jQuery to create an h2,
  // then pass content as argument
  $('<h2></h2', {
    text: 'CREATED AN H2 WITH TEXT AND CLASS, appendTo',
    class: 'myClass'
  }).appendTo('article');

  // Same technique can be used with prependTo
  $('<h2></h2>', {
    text: 'CREATED AN H2 WITH TEXT AND CLASS, prependTo',
    class: 'myClass2'
  }).prependTo('article');

  // Create an h2 and insert it after the existing h1 in the
  $('<h2></h2>', {
    text: 'CREATED AN H2 WITH TEXT AND CLASS, insertAfter',
    class: 'myClass3'
  }).insertAfter('article');

  // Create an h2 and insert it before the second paragraph
  $('<h2></h2', {
    text: 'CREATED AN H2 insertBefore SECOND PARA',
    CLASS: 'myClass4'
  }).insertBefore('p:eq(1)');

  // Move existing h1 to bottom
  $('#myPost').appendTo('article');

  // Find the collection of paragraph tags, and after each, append the h1
  $('p').after( $('h1') );

  // More effective way to do above (with just first para tag)
  // pass anon function to 'after', whatever it returns is what will be appended
  $('p').eq(0).after(function() {
    return $(this).prev();
  });
})();