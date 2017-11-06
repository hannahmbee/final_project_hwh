$(document).ready(function() {

// Slick slider
	$('.single-item').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

// INDEX.HTML: Might change this to have the preview ontop of the image with hover
// Somehow use 'this'... 
/* User clicks image
	<p> slides down
	"Read Less >" is shown */
	$('.readmore').click(function(e) {
		e.preventDefault();
		$('.show-this-on-click').slideDown();
		$('.readless').show();
	})

/* User clicks "Read Less >" 
	<p> slides up 
	"Read Less >" is hidden */
	$('.readless').click(function(e) {
		e.preventDefault();
		$('.show-this-on-click').slideUp();
		$('.readless').hide();
	})

//SCROLL TO TOP BUTTON
	//Check to see if window is at top
		//If not, display button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});

		//Click to scroll to top
		$('.scrollToTop').click(function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});


//HAMBURGER MENU to be finished
	$('.hamburger').on('click', function() {
		$('nav').slideToggle();
	})

});








