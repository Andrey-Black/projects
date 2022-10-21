"use strict";

$(document).ready(function(){

//? удаление фокуса у кликнутой кнопки на слайдере, на телефоне почему-то не работает.
$('.carousel-control-next, .carousel-control-prev').click(function(){
  $('.carousel-control-next, .carousel-control-prev').blur();
});

//? добавление/удаление стиля background для верхнего меню при скролее.
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

$(function() {
	$('.hamburger-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('hamburger-active');
	});
});

$('.hamburger-button').click(function(){
  $('.nav').toggleClass('nav-active')
  $('.nav__list-hidden').toggleClass('nav-list-hidden-active')
  $('.nav__item, .nav__item-animation').toggleClass('animate__animated animate__fadeInLeft')
});

//? Попытка сделать прогрузку элемента при скроле, работает но не получается сделать так как нужно, нашел альтернативу библиотека wowjs.
// $(window).scroll(function(){
//   let body = $('html').scrollTop();
//   let element = $('#test').offset().top;
//   if(body > element) {
//   $('.aboutus__img').addClass('animate__animated animate__backInLeft').css({
//     'animation-duration':'1s',
//     'display':'block'
//   });
//   $('.aboutus__article').addClass('animate__animated animate__backInRight').css({
//     'animation-duration':'1s',
//     'display':'block'
//   });
//   }
// });

//? включение всплывающих подсказок bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//? массивы с обьектами, каждый обьект имеет изображение для конкретной галереии, пока что я умею хранить данные только на клиенте.
 $('.img-gallery-1').magnificPopup({
  items: [{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/slider-5.jpg',
    type: 'image'
  },{
    src: './images/daewoo_lanos__286864754f.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-2').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/slider-2.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-3').magnificPopup({
  items: [{
    src: './images/ff.webp',
    type: 'image'
  },{
    src: './images/ml.jpg',
    type: 'image'
  },{
    src: './images/rv.webp',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-4').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/15.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-5').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/15.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-6').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/15.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-7').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/15.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-8').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/15.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

 $('.img-gallery-9').magnificPopup({
  items: [{
    src: './images/slider-3.jpg',
    type: 'image'
  },{
    src: './images/14a.webp',
    type: 'image'
  },{
    src: './images/15.jpg',
    type: 'image'
  },{
    src: './images/slider-1.jpg',
    type: 'image'
  }],
  gallery: {
    enabled: true
  }
 });

});