$('.container-slider').slick({
    dots: true,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover:false,
    arrows:false,
    infinite:false,
    responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }],
    });


    $('.slide-mockup').slick({
      dots: true,
      speed:1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover:false,
      fade:true,
      arrows:true,
      infinite: true,
      nextArrow: '<button class="slick-next"><i class="fa-solid fa-angles-right"></i></i></i></button>',
      prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
      });