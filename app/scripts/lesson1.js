// Pass css selector to jQuery to "query" and manipulate the DOM

// jQuery will append style attribute to dom elements matching 'ul li'
// $('ul li').css('color', 'green');

// Where possible, keep styling in css, unless needs to be dynamic
$('ul li').addClass('emphasis');