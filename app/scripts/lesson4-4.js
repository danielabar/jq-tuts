'use strict';

// $.grep is more of a filter than regexp
(function() {

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // filter arr for numbers > 5
  var filtered = $.grep(arr, function(val) {
    return val > 5;
  });
  console.log(filtered); // [6, 7, 8, 9, 10]

  // make use of inverse flag (defaults to false)
  var inv = true;
  var filteredInverse = $.grep(arr, function(val) {
    return val > 5;
  }, inv);
  console.log(filteredInverse); // [1, 2, 3, 4, 5]

  // grep can also operate on array of objects
  var arrObj = [
    {first: 'Jeff', last: 'Way'},
    {first: 'Allison', last: 'Way'},
    {first: 'Jeff', last: 'Smith'},
    {first: 'John', last: 'Doe'},
    {first: 'Thomas', last: 'Way'}
  ];
  // get all 'Way' family members
  var filteredArrObj = $.grep(arrObj, function(obj) {
    return obj.last === 'Way';
  });
  console.log(JSON.stringify(filteredArrObj)); //[{"first":"Jeff","last":"Way"},{"first":"Allison","last":"Way"},{"first":"Thomas","last":"Way"}]

})();
