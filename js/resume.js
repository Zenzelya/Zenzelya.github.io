(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.portfolio__item').hover(function() {
    $(this).find('.portfolio__overlay').fadeIn('normal');
    $(this).find('.overlay__name--portfolio')
        .addClass('fadeInUp')
        .removeClass('fadeOutDown');
    $(this).find('.overlay__link')
        .addClass('fadeInUp')
        .removeClass('fadeOutDown');
    $(this).find('img').addClass('portfolio__item--blur');
    }, function() {
        $(this).find('.portfolio__overlay').fadeOut('normal');
        $(this).find('.overlay__name--portfolio')
            .addClass('fadeOutDown')
            .removeClass('fadeInUp');
        $(this).find('.overlay__link')
            .addClass('fadeOutDown')
            .removeClass('fadeInUp');
        $(this).find('img').removeClass('portfolio__item--blur');
    });

})(jQuery); // End of use strict
