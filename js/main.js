//GOOGLE MAPS
	
function initMap() {

    var mindLocation = {lat: 51.468543, lng: -0.113233};
    var map = new google.maps.Map(document.getElementById('map-mind'), {
      zoom: 15,
      center: mindLocation
    });
    var marker = new google.maps.Marker({
      position: mindLocation,
      map: map
    });

    var location = {lat: 51.5128, lng: -0.137835};
    var map = new google.maps.Map(document.getElementById('map-samaritans'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }



$(document).ready(function() {

// Slick slider
	$('.single-item').slick( {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false
	});

// Somehow use 'this'... 
/* User clicks image
	<p> slides down */

	$('.readmore').on('click', function(e) {
		e.preventDefault();
		$(this).next('.show-this-on-click').slideToggle();
	});

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


//HAMBURGER MENU
	/* User clicks hamburger
		Menu slides down */
	$('.hamburger').on('click', function() {
		$('nav').slideToggle();
	});
//If window is over 768px nav is shown
//If window is below 768px nav is hidden
	$(window).on('resize', function() {
		if ($(window).width() >= 768 && !$('nav').is(':visible')) {
			$('nav').show();
		} else if ($(window).width() < 768 && $('nav').is(':visible')) {
			$('nav').hide();
					
		}
	});

//SERIES BUTTON
/* User clicks "Series *arrow icon*"
		Menu slides down */
	$('.dropbtn').on('click', function() {
		$('.dropdown-content').slideToggle();
	});

// On [name="suggest"] change
	// get the value from $(this)
	//Remove class ".hidden" from text area
	$("[name=entry.519560185]").on('change', function() {
		var selection = $(this).val();

		if (selection === 'yes') {
			$('[name="entry.2123424413"]').removeClass('hide');
		} else {
			$('[name="entry.2123424413"]').addClass('hide');
		}
		//Since adding Google Forms this addClass and removeClass no longer works
	});

});








