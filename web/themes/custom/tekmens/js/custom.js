(function($, Drupal) {
    $(window).ready(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

    // Make header sticky on scroll
    $(window).scroll(function() {
        var sticky = $('header#header-brand'),
            lock = $('#logotop'),
            scroll = $(window).scrollTop();

        if (scroll >= 120) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

        if (scroll >= 120 && scroll <= 239) lock.css('top',10);
        if (scroll >= 240 && scroll <= 359) lock.css('top',8);
        if (scroll >= 360 && scroll <= 479) lock.css('top',6);
        if (scroll >= 480 && scroll <= 599) lock.css('top',4);
        if (scroll >= 600) lock.css('top',2);


    });


    
})(jQuery, Drupal);