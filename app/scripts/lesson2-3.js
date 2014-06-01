'use strict';

// style only direct children
// $('ul.emphasis').children('li').css('color', 'green');

// style all li
// $('ul.emphasis').find('li').css('color', 'green');

// only grab first list item
// could use css 'li:first-child' or css3 'li:nth-child(1)',
// but if need old browser support back to IE6, use jQuery instead
// 'li:first' is custom jQuery selector
// $('ul.emphasis').children('li:first').addClass('emphasis');

// can also use jquery 'first' method
// $('ul.emphasis').children('li').first().addClass('emphasis');

// css3 way of selecting second child, then jQuery to change text
// $('ul.emphasis').children('li:nth-child(2)').text('added with jQuery');

// jQuery way of selecting nth child: 'eq' method uses 0 based index
// $('ul.emphasis').children('li').eq(1).text('second item in list modified with jQuery');
// $('ul.emphasis').children('li').eq(3).text('targetting 4th item in list');

// Can chain methods to go to next child
// $('ul.emphasis').children('li').eq(3).next().text('targetting item that is next after 4th item in list');

// Go to previous
// $('ul.emphasis').children('li').eq(3).prev().text('targetting 3rd item in list, which is previous to 4th item');

// Don't have to put everything on one line, can use indentation
// $('ul.emphasis')
  // .children('li')
    // .eq(3)
    // .prev().text('targetting 3rd item in list, which is previous to 4th item');

// parent to go up the DOM tree
// $('li').parent().removeClass('emphasis');

// Can also be more specific with parent
// $('li').parent('ul').removeClass('emphasis');

// Try to go up to container level - doesn't work because container is not IMMEDIATE parent
// $('li').parent('.container').removeClass('container');

// Parents goes all the way up ascendants
// $('li').parents('.container').removeClass('container');

// For slightly better performance, specify element name with parents
// $('li').parents('div.container').removeClass('container');

// Can also use closest to get similar effect
$('li').closest('div.container').removeClass('container');

// To understand parents vs closest, wrap ul in another container
console.log($('ul').parents('.container'));
console.log($('ul').closest('.container'));