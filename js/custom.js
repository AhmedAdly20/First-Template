/* golbal $, alert, console*/
$(function() {
	'use strict';
	// Adjust header height
	//var myheader = $('.header')
	//myheader.height($(window).height());
	//$(window).resize(function(){
	//myheader.height($(window).height());
	//$('.bxslider').each(function(){
	//	$(this).css('paddingTop',($(window).height()-$('.bxslider li').height()) /2)
	//});
	//});

	// links add active class
	$('.navbar li a').click(function(){
		$(this).parent().addClass('active1').siblings().removeClass('active1');
	});

	// li in the center for the slider
	//$('.header').each(function(){
//$(this).css('paddingTop',($(window).height()-$(this).height()) /3)
//	});
	$('.navbar li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		},1000);
	});
});