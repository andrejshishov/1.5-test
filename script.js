const slider = document.querySelector('.swiper');


  let mySwiper;

  let swiperPagination = document.querySelector('.swiper-pagination')
  let swiperWrapper = document.querySelector('.swiper-wrapper');      
  console.log(swiperWrapper);
  let swiperSlide = document.querySelectorAll('.swiper-slide');
  console.log(swiperSlide);


  function mobileSlider() {

  if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },

      slideToClickedSlide: true,

    spaceBetween:16,

    slidesPerView:1.3,

    speed:800,

    slideClass: 'swiper-slide',

    });


slider.dataset.mobile = 'true';




  }

if (window.innerWidth >= 767) {
  slider.dataset.mobile = 'false';

  slider.classList.remove('swiper');
  swiperPagination.classList.remove('swiper-pagination');
  swiperWrapper.classList.remove('swiper-wrapper')
  for ( let slide of swiperSlide) {
    slide.classList.remove('swiper-slide');
  }

  if (slider.classList.contains('swiper-initialized')) {
  mySwiper.destroy();
  }

}

}



mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
})






