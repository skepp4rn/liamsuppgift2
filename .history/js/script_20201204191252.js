AOS.init();

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 4,
      loop: true,
      margin: 60,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  })