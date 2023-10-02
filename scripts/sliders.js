const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  grabCursor: true,
  centeredSlides: false,
  loop: true,
  keyboard: {
    enabled: true
  },
  mousewheel: {
    invert: true,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next, .btn__slider_right',
    prevEl: '.swiper-button-prev, .btn__slider_left',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: Math.round(widthContainer / (widthSlide + 14)*100)/100,
      spaceBetween: 14
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
