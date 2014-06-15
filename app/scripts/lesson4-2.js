'use strict';

(function() {

  // Handlebars automatically escapes html
  var data = [
    {
      author: {first: 'Jeffrey', last: 'Way'},
      tweet: '<strong>30 Days</strong> to Learn jQuery Rocks',
      age: 27
    },
    {
      author: {first: 'Bugs', last: 'Bunny'},
      tweet: 'It\'s duck season!',
      quote: 'What\'s up doc?'
    }
  ];

  // Register a helper function to handle author object
  Handlebars.registerHelper('fullName', function(author) {
    return author.first + ' ' + author.last;
  });

  // Compile the handlebars template
  var template = Handlebars.compile($('#template').html());

  // Bind data to the template
  var temp = template(data);

  // Append the results of compiled/bound template to DOM
  $('ul.tweets').append(temp);

})();
