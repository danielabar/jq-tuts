'use strict';

(function() {

  $('.navbar-nav li').on('mouseover', function() {
    $(this).addClass('active');
  });

  $('.navbar-nav li').on('mouseleave', function() {
    $(this).removeClass('active');
  });

  $('#appendTextEndArticle').on('click', function() {
    $('article').append('APPEND: THIS GOES AT THE END OF ARTICLE');
  });

  $('#prependTextBeginArticle').on('click', function() {
    $('article').prepend('PREPEND: THIS GOES AT BEGINNING OF ARTICLE');
  });

  $('#addTextAfterArticle').on('click', function() {
    $('h1').after('AFTER: THIS IS AFTER THE H1');
  });

  $('#addTextBeforeFirstPara').on('click', function() {
    $('p').first().before('BEFORE: THIS IS BEFORE THE FIRST PARAGRAPH');
  });

  $('#appendNewH2toArticle').on('click', function() {
    $('<h2></h2', {
      text: 'CREATED AN H2 WITH TEXT',
      class: 'standout'
    }).appendTo('article');
  });

  $('#prependNewH2toArticle').on('click', function() {
    $('<h2></h2', {
      text: 'CREATED AN H2 WITH TEXT',
      class: 'standout'
    }).prependTo('article');
  });

  $('#insertNewH2AfterH1').on('click', function() {
    $('<h2></h2>', {
      text: 'CREATED AN H2',
      class: 'standout'
    }).insertAfter('h1');
  });

  $('#insertNewH2BeforeSecondPara').on('click', function() {
    $('<h2></h2', {
      text: 'CREATED AN H2',
      CLASS: 'standout'
    }).insertBefore('p:eq(1)');
  });

  $('#moveH1toBottom').on('click', function() {
    $('#myPost').appendTo('article');
  });

  $('#reset').on('click', function() {
    location.reload();
  });
})();