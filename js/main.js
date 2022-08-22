(function($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header-section').length) {
			/*$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header-section').addClass('navbar-fixed');
				} else {
					$('.header-section').removeClass('navbar-fixed');
				}
			});*/
		}
	}
	navbarFixed();
})(jQuery);
