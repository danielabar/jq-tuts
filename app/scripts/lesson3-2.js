'use strict';

(function() {

  // 'this' refers to 'obj'
  // var obj = {
  //   doIt: function() {
  //     console.log('this in obj.doIt:');
  //     console.log(this);
  //   }
  // };

  // 'this' refers to anchor tag that received the click event
  // $('a').on('click', function(e) {
  //   console.log('this in click handler:');
  //   console.log(this);
  //   obj.doIt();

  //   // If obj.doIt should have its 'this' refer to anchor element:
  //   obj.doIt.call(this);

  //   e.preventDefault();
  // });

  // Another way to specify what 'this' is via jQuery proxy
  var obj = {
    doIt: function(e) {
      console.log('this in obj.doIt:');
      console.log(this);
      e.preventDefault();
    }
  };

  // First arg to proxy is method to be called
  // Second arg to proxy is what should be treated as 'this'
  $('a').on('click', $.proxy(obj.doIt, obj) );

})();