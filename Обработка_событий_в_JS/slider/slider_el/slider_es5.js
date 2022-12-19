"use strict";

function Slider(selector, options = {}) {
  this.sliderEl = document.querySelector(selector);
  if (!this.sliderEl) {
    throw new Error('wrong selector');
  }
  this.width = options.width ?? 1080;
  this.height = options.height ?? 720;
}

Slider.prototype.init = function () {
  this.sliderEl.style.width = `${this.width}px`;
  this.sliderEl.style.height = `${this.height}px`;
};