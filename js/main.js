$(document).ready(function() {

// Slick slider
	$('.single-item').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

//Might change this to have the preview ontop of the image

/* User clicks image
	<p> slides down
	"Read Less >" is shown */
	$('.read-more').click(function(e) {
		e.preventDefault();
		$('#show-on-click').slideDown();
		$('.read-less').show();
	})

/* User clicks "Read Less >" 
	<p> slides up */
	$('.read-less').click(function(e) {
		e.preventDefault();
		$('#show-on-click').slideUp();
		$('.read-less').hide();
	})


});