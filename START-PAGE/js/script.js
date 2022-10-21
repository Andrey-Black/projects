"use strict";

$('.list-project__icon').click(function() {
    return function() {
      if (!$(this).hasClass('list-project__icon-opened')) {
        $('.list-project__icon').removeClass('list-project__icon-opened');
        $(".list-project__text-hidden").removeClass("list-project__text-hidden-opened");
        $(this).parent().find('.list-project__text-hidden').toggleClass('list-project__text-hidden-opened');
        $(this).toggleClass('list-project__icon-opened');
      } else {
        $(".list-project__icon").removeClass("list-project__icon-opened");
        $('.list-project__text-hidden').removeClass('list-project__text-hidden-opened');
      }
    };
  }());

$('.mail-hidden').click(function(){
  $('.mail-hidden').text('niceblackwinchesterice@gmail.com')
});

$('.telegram-hidden').click(function(){
  $('.telegram-hidden').text('@WaterCatRS')
});