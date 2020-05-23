$(function(){
  'use strict'

  //Preloader js
  $(window).on('load',function(){
    $(".preloader").delay(1000).fadeOut(1000);
  });

  //Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     
     if(scrolling > 50){
         $(".navbar").addClass("menu-bg");
     }
     else{
         $(".navbar").removeClass("menu-bg");
     }
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
 });

  // Closes responsive menu when a scroll link is clicked
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  //Back to top js
  var back2top = $(".back-to-top");
  var html_body = $('html,body');
  back2top.click(function(){
    html_body.animate({scrollTop:0},1000);
  });


  //Smooth Scroll js
  var html_body = $('html, body');
  $('a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 45
              }, 1500);
              return false;
          }
      }
  });


  //Venobox js
  $('.venobox').venobox(); 

  //Gallery Slider
  $('.gallery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '.right',
    nextArrow: '.left',
    speed:1000,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode:false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      ]
  });

  //Team Slider Js
  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '.right2',
    nextArrow: '.left2',
    speed:1000,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode:false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      ]
  });

  //Counter Up Js
  $('.counter').counterUp({
      delay: 10,
      time: 2000,
  });

  //Wow Js
  new WOW().init();

});