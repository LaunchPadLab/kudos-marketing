  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      autoplay: false,
      center: true,
      loop: true,
      margin:10,
      nav: true,
      responsive:{
        0:{
            items:1
        }
      }
    });
  });

  $(document).ready(function() {
  $('.article-owl-carousel').owlCarousel({
    center:true,
    autoplay: true,
    loop: true,
    margin:10,
    nav: true,
    responsive:{
      0:{
          items:1
      },
      700:{
        items:3
      }
    }
  });
});