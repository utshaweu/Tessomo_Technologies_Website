$(function(){
  'user strict'

  //Venobox js
  $('.venobox').venobox(); 

  //Gallery Slider
  $('.gallery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '.left',
    nextArrow: '.right',
    speed:1000,
    autoplaySpeed: 2500,
  });

  //Counter Up Js
  $('.counter').counterUp({
      delay: 10,
      time: 2000,
  });

});