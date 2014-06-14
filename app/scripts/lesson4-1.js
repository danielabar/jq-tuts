'use strict';

(function() {

  var content = [
    {
      title: 'My awesome blog post',
      thumbnail: 'https://cms-assets.tutsplus.com/uploads/users/41/posts/20942/preview_image/preview-image@2x.jpg'
    },
    {
      title: 'My second blog post',
      thumbnail: 'https://cms-assets.tutsplus.com/uploads/users/227/posts/21214/preview_image/working-with-data-in-wordpress-preview.png'
    }
  ];

  var template = $.trim($('#blogTemplate').html());
  $.each(content, function(index, val) {
    console.log('index: ' + index + ', val: ' + JSON.stringify(val, null, 2));
  });

})();
