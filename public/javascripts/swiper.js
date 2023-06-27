/* Slider categories */

var swiperCategories = new Swiper(".category-slide-container", {
  slidesPerView: 5,
  spaceBetween: 25,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1050: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    }
  },
});

/* Slider recipes */

var swiperRecipes = new Swiper(".recipe-slide-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: "true",
  slidesPerView: "auto",
  initialSlide: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});