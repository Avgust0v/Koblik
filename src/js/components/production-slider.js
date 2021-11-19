$(document).ready(function () {
	$('.production-slider__inner').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		vertical: true,
		adaptiveHeight: true,
		verticalSwiping: true,
		cssEase: 'ease-out',
		prevArrow:
			"<button type='button' class='production-slider__slick-prev'></button>",
		nextArrow:
			"<button type='button' class='production-slider__slick-next'></button>",
		appendArrows: $('.production-slider__arrows'),
	})
})