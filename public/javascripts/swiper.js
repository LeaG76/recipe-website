var swiper = new Swiper(".slide-container", {
    slidesPerView: 5,
    spaceBetween: 25,
    sliderPerGroup: 5,
    loop: true,
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
      374: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,
      },
    },
  });