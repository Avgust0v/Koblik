$(document).ready(function () {
	let showAnim = true
	let countbox = '#counts'
	$(window).on('scroll load resize', function () {
		if (!showAnim) return false 
		let w_top = $(window).scrollTop() 
		let e_top = $(countbox).offset().top
		let w_height = $(window).height() 
		let d_height = $(document).height() 
		let e_height = $(countbox).outerHeight() 
		if (
			w_top + 200 >= e_top ||
			w_height + w_top == d_height ||
			e_height + e_top < w_height
		) {
			$('.production-slider__anim-number').spincrement({
				thousandSeparator: '',
				duration: 5000,
				from: 1,
			})
			showAnim = false
		}
	})
})
