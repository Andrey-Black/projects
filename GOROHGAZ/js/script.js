"use strict";

$(document).ready(function(){

$('.carousel-control-next, .carousel-control-prev').click(function(){
  $('.carousel-control-next, .carousel-control-prev').blur();
});

$(window).scroll(function(){
if($(window).scrollTop() >= 1) {
  $('.top-menu').addClass('top-menu-background-croll');
} else if($(window).scrollTop() === 0) {
  $('.top-menu').removeClass('top-menu-background-croll');
}
});

$(window).scrollTop(function(){
  if($(window).scrollTop() >= 1) {
    $('.top-menu').addClass('top-menu-background-croll');
  }
});

// $('.aboutus__img').addClass('animate__animated animate__backInLeft').css({'animation-duration':'2s',});


$(window).scroll(function(){
  let body = $('html').scrollTop();
  let element = $('#test').offset().top;
  if(body > element) {
  $('.aboutus__img').addClass('animate__animated animate__backInLeft').css({
    'animation-duration':'1s',
    'display':'block'
  });
  $('.aboutus__article').addClass('animate__animated animate__backInRight').css({
    'animation-duration':'1s',
    'display':'block'
  });
  }
});

});