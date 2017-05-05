$(document).ready(function(){

  //current menu item highlight
  $(".dropdown-menu li a").on('click', function(){
    console.log($(this).parents(".dropdown"));
    $(this).parents(".dropdown").addClass("current-item");
  });

  //disbale mobile page main scrolling when menu is open
  $(".navbar-toggle").click(function(){
    $("body").toggleClass("menu-open");
  });

  $('.as-seen-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          padding: 0
        }
      }
    ]
  });

  $('.stay-connected-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.stay-connected-slider-mobile').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.features-mobile-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.news-items-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.testimonials-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });



  window.sr = ScrollReveal({
    distance: '0',
    delay: 500
  });
  sr.reveal('.info-item-wrapper.left .info-item', { duration: 1500 }, 400);
  sr.reveal('.info-item-wrapper.right .info-item', { duration: 1500 }, 400);

});