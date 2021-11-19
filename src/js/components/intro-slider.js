$(document).ready(function () {
	$(".intro-slider").slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4500,
		easing: "easy-in-out",
		cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $(".intro__controls"),
		appendDots: $(".intro__controls"),
		draggable: false,
		prevArrow: "<button type='button' class='intro-slider__slick-prev'></button>",
		nextArrow: "<button type='button' class='intro-slider__slick-next'></button>",
	});
});






