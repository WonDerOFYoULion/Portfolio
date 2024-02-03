import '../index.html';
import '../scss/main.scss';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
  slidesPerView: 'auto', // Отображаемый слайд (автоматический размер)
  spaceBetween: 100, // Расстояние между слайдами
  loop: true, // Зацикливание карусели
  centeredSlides: true,

  grabCursor: true,
  preventClicks: true,

  

  effect: 'coverflow', // Используем эффект coverflow
  coverflowEffect: {
    rotate: 0, // Угол поворота боковых слайдов
    stretch: 0, // Растяжение боковых слайдов
    depth: 140, // Глубина визуализации боковых слайдов
    modifier: 1, // Множитель, управляющий градиентом
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

