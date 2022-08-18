$(function () {
  // =====***** back to top button js starts *****=====//
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling >= 900) {
      $("#back-to-top").show();
    } else {
      $("#back-to-top").hide();
    }
  });
  // =====***** back to top button js ends *****=====//

  // =====***** service slick js starts *****===== //
  $(".banner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    dots: false,
    infinite: true,
    prevArrow: '<i class="fa fa-long-arrow-left prevarrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-long-arrow-right nextarrow" aria-hidden="true"></i>',

    // responsive starts
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
    // responsive ends
  });
  // =====***** service slick js ends *****===== //

  // =====***** service slick js starts *****===== //
  $(".service-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: false,
    infinite: true,
    prevArrow: '<i class="fa fa-long-arrow-left prevarrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-long-arrow-right nextarrow" aria-hidden="true"></i>',

    // responsive starts
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
    // responsive ends
  });
  // =====***** service slick js ends *****===== //

  // =====***** testimonials slick js starts *****===== //
  $(".testimonials-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: false,
    infinite: true,
    prevArrow: '<i class="fa fa-long-arrow-left prevarrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-long-arrow-right nextarrow" aria-hidden="true"></i>',

    // responsive starts
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
    // responsive ends
  });
  // =====***** testimonials slick js ends *****===== //

  // =====***** mixitup starts *****====== //
  var mixer = mixitup(".img-section");
  // =====***** mixitup ends *****====== //
});
