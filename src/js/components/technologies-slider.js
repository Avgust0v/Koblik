$(document).ready(function () {
	$(".technologies__slider").slick({
		infinite: false,
		easing: "ease-in",
		speed: 1000,
		slidesToShow: 4,
		variableWidth: true,
		slidesToScroll: 1,
		swipeToSlide: true,
		appendArrows: $(".technologies-slider__controls"),
		prevArrow: "<button type='button' class='intro-slider__slick-prev technologies-slider__slick-prev'></button>",
        nextArrow: "<button type='button' class='intro-slider__slick-next technologies-slider__slick-next'></button>",
	});
});
