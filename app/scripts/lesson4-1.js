'use strict';

(function() {

  // Experiment with google library for loading RSS feeds
  var feed = new google.feeds.Feed('http://rss.cnn.com/rss/cnn_tech.rss');
  feed.setNumEntries(10);
  feed.load(function (data) {
    console.dir(data.feed.entries);
    var content = data.feed.entries;
    var template = $.trim($('#feedTemplate').html());
    $.each(content, function(index, obj) {
      var temp = template
        .replace( /{{title}}/, obj.title)
        .replace( /{{contentSnippet}}/, obj.contentSnippet )
        .replace( /{{link}}/, obj.link );
      $('.feeds').append(temp);
    });
  });

  var content = [
    {
      title: 'My awesome blog post',
      thumbnail: 'https://cms-assets.tutsplus.com/uploads/users/41/posts/20942/preview_image/preview-image@2x.jpg'
    },
    {
      title: 'My second blog post',
      thumbnail: 'https://cms-assets.tutsplus.com/uploads/users/227/posts/21214/preview_image/working-with-data-in-wordpress-preview.png'
    },
    {
      title: 'Yet another post',
      thumbnail: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/21379/preview_image/wordpress-oop.jpg'
    }
  ];

  var template = $.trim($('#blogTemplate').html());
  $.each(content, function(index, obj) {
    // regex flags:
    //  i   ignore capitalization
    //  g   global, keep searching even if find a match
    var temp =
      template.replace( /{{title}}/ig, obj.title )
              .replace( /{{thumbnail}}/ig, obj.thumbnail );

    $('.posts').append(temp);
  });

})();
