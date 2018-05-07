'use strict';

var menuToggle = document.querySelector('.header-menu__toggle');
var menuList = document.querySelector('.header-menu__list');

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menuToggle.classList.toggle("header-menu__toggle--close");
  menuList.classList.toggle("header-menu__list--show");
});


$(function() {
 $('.portfolio-toggles .portfolio-button').click(function(){
	var get_id = this.id;
	var get_current = $('.posts .' + get_id);

	$('.post').not(get_current).hide(100);
	get_current.show(100);
 });

 $('#showall').click(function() {
	$('.post').show(100);
 });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:8
  });
});

if($(window).width() < 700){
	$(".owl-carousel").owlCarousel({
		items:3
	});
}
