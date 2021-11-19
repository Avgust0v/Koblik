$(document).ready(function () {


    $(".about-slider").on('init', function(event, slick, currentSlide){
        $("#counter").text(1 + " /" + slick.slideCount);
     });

	$(".about-slider").slick({
		infinite: true,
        autoplay:true,
        autoplaySpeed: 4500,
        adaptiveHeight: true,
        easing: "easy-in",
        fade: true,
        speed: 1000,
		slidesToShow: 1,
        appendArrows: $(".about-slider__controls-wrapper"),
		slidesToScroll: 1,
        prevArrow: "<button type='button' class='intro-slider__slick-prev about-slider__slick-prev'></button>",
        nextArrow: "<button type='button' class='intro-slider__slick-next about-slider__slick-next'></button>",
	});



    $(".about-slider").on('afterChange', function(event, slick, currentSlide){
        $("#counter").text(currentSlide + 1 + " /" + slick.slideCount);
     });
});



