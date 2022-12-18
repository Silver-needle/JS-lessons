"use strict";

const playBtnEl = document.querySelector('.fa-play');
const pauseBtnEl = document.querySelector('.fa-pause');
const videoEl = document.querySelector('video');
const currentTimeEl = document.querySelector('.currentTime');

playBtnEl.addEventListener('click', () => {
  videoEl.play();
});

playBtnEl.addEventListener('click', () => {
  videoEl.pause();
});

videoEl.addEventListener('timeupdate', () => {
  currentTimeEl.textContent = videoEl.currentTime.toFixed(1);
  timingEl.value = videoEl.currentTime / videoEl.duration * 100;
});

volumeEl.addEventListener('input', () => {
  videoEl.volume = volumeEl.value;
});

timingEl.addEventListener('input', () => {
videoEl.currentTime = timingEl.value / 100 * videoEl.duration;
});