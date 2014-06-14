'use strict';

(function() {

  var slider = new Slider($('div.slider ul'), $('div#slider-nav'));

  slider.nav.find('a').on('click', function(e) {
    slider.setCurrent($(this).data('dir'));
    slider.transition();
    e.preventDefault();
  });

})();
