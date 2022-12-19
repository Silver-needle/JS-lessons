"use strict";

//js
class Slider {
  constructor(selector, options = {}) {
    this.sliderEl = document.querySelector(selector);
    if (!this.sliderEl) {
      throw new Error('wrong selector');
    }
    this.width = options.width ?? 1080;
    this.height = options.height ?? 720;
    this.slides = this.sliderEl.querySelectorAll('.slider-item');
    this.slideIdx = 0;
  }

  init() {
    this.sliderEl.style.width = `${this.width} px`;
    this.sliderEl.style.height = `${this.height} px`;

    const leftArrow = document.createElement('i');
    leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
    this.sliderEl.append(leftArrow);

    const rightArrow = document.createElement('i');
    rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
    this.sliderEl.append(rightArrow);

    const firstImg = this.slides[this.slideIdx].querySelector('img');
    if (firstImg.complete) {
      console.log('запуск слайдера');
      return;
    };

    const loadIcon = document.createElement('i');
    loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
    this.sliderEl.prepend(loadIcon);

    firstImg.addEventListener('load', () => {
      console.log('запуск слайдера');
      loadIcon.remove();
    });
  }
}

const slider = new Slider('.slider', {
  width: 720,
  height: 480,
});
slider.init();