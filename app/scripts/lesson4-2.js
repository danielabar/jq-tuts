'use strict';

(function() {

  var data1 = {
    author: 'Jeffrey Way',
    tweet: '30 Days to Learn jQuery Rocks'
  };

  var data2 = {
    author: 'Bugs Bunny',
    tweet: 'What\'s up doc?'
  };

  // Compile the handlebars template
  var template = Handlebars.compile($('#template').html());

  // Bind data to the template
  var temp = template(data1);

  // Append the results of compiled/bound template to DOM
  $('ul.tweets').append(temp);

  // Append more data
  $('ul.tweets').append(template(data2));

})();
