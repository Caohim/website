(function() {
  $.fn.shuffle = function() {

    var allElems = this.get(),
      getRandom = function(max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function() {
        var random = getRandom(allElems.length),
            randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });
    this.each(function(i) {
      $(this).replaceWith($(shuffled[i]));
    });
    return $(shuffled);
  };

  jQuery(function($) {
    var App;
    App = {
      carousel: $('#js-carousel'),
      init: function() {
        $('.js-carousel-item').shuffle();
        return App.carousel.owlCarousel({
          items: 1,
          loop: true,
          margin: 20,
          dots: false,
          dotsSpeed: 600,
          responsiveClass: true,
          responsive: {
            400: {
              dots: true
            },
            600: {
              items: 2,
              dots: true
            }
          }
        });
      }
    };
    return $(function() {
      return App.init();
    });
  });

}).call(this);
