'use strict';

(function() {

  // Handlebars automatically escapes html
  var data = [
    {
      author: 'Jeffrey Way',
      tweet: '<strong>30 Days</strong> to Learn jQuery Rocks',
      age: 27
    },
    {
      author: 'Bugs Bunny',
      tweet: 'What\'s up doc?'
    }
  ];

  // Compile the handlebars template
  var template = Handlebars.compile($('#template').html());

  // Bind data to the template
  var temp = template(data);

  // Append the results of compiled/bound template to DOM
  $('ul.tweets').append(temp);

})();
