$(window).on('scroll', function(){
    if($(window).scrollTop()>0){
      $('.navbar').addClass('scrolled');
      $('.logo').attr('src', './images/blackLogo.png')
    }
    else{
      if($('.navbar').hasClass('scrolled')){
        $('.navbar').removeClass('scrolled');
        $('.logo').attr('src', './images/logo.png')
      } 
    }
  })
  
  $(window).on('load', function () {
    $(".preloader-section").delay(700).fadeOut(600, function () {
        $(this).remove();
    });
  });
  
  
  let isClicked = false;
  
  $('.navbar-toggler').on('click', function(){
    isClicked = !isClicked
    if(isClicked){
      $('.navbar').addClass('scrolled');
      $('.logo').attr('src', './images/blackLogo.png')
    }else{
      if($(window).scrollTop() == 0){
        $('.navbar').removeClass('scrolled');
        $('.logo').attr('src', './images/logo.png')
      }
    }
  })
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
  
  $('body').scrollspy({target: '#main-nav'});
  
  $('#main-nav a').on('click', function(e){
    if(this.hash !== ''){
      e.preventDefault();
      const hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      })
    }
  })