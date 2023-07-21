$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-to-top-btn').fadeIn();
		} else {
			$('#back-to-top-btn').fadeOut();
		}
	});

	// Scroll to top when the "Back to Top" button is clicked
	$('#back-to-top-btn').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});

	$(window).scroll(function () {
		var nav_offset_top = $('header').height() + 50;
		var scroll = $(window).scrollTop();
		if (scroll >= nav_offset_top) {
			$('.header-section').addClass('navbar-fixed');
		} else {
			$('.header-section').removeClass('navbar-fixed');
		}
	});
});