(function($, Drupal) {
    // Make header sticky on scroll
    $(window).scroll(function() {
        var sticky = $('header#header-brand'),
            scroll = $(window).scrollTop();

        if (scroll >= 120) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    
})(jQuery, Drupal);