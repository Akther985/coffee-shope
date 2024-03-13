(function ($) {
    "use strict";
    jQuery(document).ready(function($){      
       
        // mobile off canver menu 
        $(".menu-trigger").on("click", function(){
          $(".off-canvar-mobile-menu, .off-canvar-overlay").addClass("active");
          return false;
      });

      $(".menu-close").on("click", function(){
          $(".off-canvar-mobile-menu").removeClass("active");
          return false;
      });       
      
        $('.responsive').slick({
            dots:true,
            infinite: true,
            autoplay:true,
            arrows:false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots:false,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              
            ]
          });             

          $('.venobox').venobox({
            numeratio: true,
            infinigall: true
          });

          $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
      
    });    

}(jQuery));