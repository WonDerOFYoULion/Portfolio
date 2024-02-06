import '../index.html';
import '../scss/main.scss';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const cont = document

document.addEventListener('DOMContentLoaded', function () {
  
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 'auto', 
    loop: true, 
    centeredSlides: true,
  
    effect: 'cube', 
    cubeEffect: {
      shadow: false,
    },

    on: {
      slideChange: function () {
        const slideNames = ["Rocky Mountain Vacations", "Way Around The Island", "New Oceans", "Desert"];
        const activeIndex = this.realIndex;
        
        document.querySelector('.name').textContent = slideNames[activeIndex];
      },
    },

  });

  const customPrevButton = document.querySelector('.swiper-button-prev');
  const customNextButton = document.querySelector('.swiper-button-next');

  customPrevButton.addEventListener('click', () => {
    swiper1.slidePrev();
  });

  customNextButton.addEventListener('click', () => {
    swiper1.slideNext();
  });

});

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto', 
  spaceBetween: 100, 
  loop: true, 
  centeredSlides: true,

  preventClicks: true,

  effect: 'coverflow', 
  coverflowEffect: {
    rotate: 0, 
    stretch: 0, 
    depth: 140, 
    modifier: 1, 
    slideShadows: false,
  },

  on: {
    transitionEnd: function () {

      const activeSlideIndex = this.activeIndex;

      document.querySelectorAll('.featured-videos-anim').forEach((slide, index) => {
        if (index === activeSlideIndex) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });

    },
  },

});

