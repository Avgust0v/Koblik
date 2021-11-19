$(document).ready(function () {
	$('.services-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		infinite: false,
		appendDots: $('.services-slider__dots'),
		asNavFor: '.services__mobile-slider',
		prevArrow:
			"<button type='button' class='services-slider__slick-prev'></button>",
		nextArrow:
			"<button type='button' class='services-slider__slick-next'></button>",


	});

	$('.services__mobile-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.services-slider'
	});



});
