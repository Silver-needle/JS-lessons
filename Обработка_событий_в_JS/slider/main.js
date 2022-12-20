"use strict";

const slider = new Slider('.slider', {
  width: 720,
  height: 480,
});
slider.init();

setInterval(() => {
  slider.setNextSlide();
}, 2000)