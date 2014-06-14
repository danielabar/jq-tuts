'use strict';

// Constructor function
function Slider(container, nav) {
  this.container = container;
  this.nav = nav;
  this.imgs = this.container.find('img');
  this.imgWidth = this.imgs[0].width;   // 600
  this.imgsLen = this.imgs.length;      // 5
  this.current = 0;                     // using a 0-based index
}

// Each Slider prototype method is responsible for ONE thing,
// easier to debug

Slider.prototype.transition = function(coords) {
  this.container.animate({
    'margin-left': coords || this.calculateOffset()
  }, {
    duration: 500
  });
};

Slider.prototype.calculateOffset = function() {
  return (this.current * this.imgWidth) * -1;
};

Slider.prototype.setCurrent = function(dir) {
  /*jshint -W030 */
  ( dir === 'next') ? this.current++ : this.current--;
  this.current = (this.current < 0) ? this.imgsLen - 1 : this.current % this.imgsLen;
};