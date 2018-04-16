(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });
    

    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    //MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
		mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
		},
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
		cursor: 'mfp-zoom-out-cur',
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
		
        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By default it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
      }
	});

	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>Por Francisco Maturana</small>';
				}
			}
		});
	});

	$(document).ready(function() {

		$('.simple-ajax-popup-align-top').magnificPopup({
			type: 'ajax',
			alignTop: true,
			overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
		});
	
		$('.simple-ajax-popup').magnificPopup({
			type: 'ajax'
		});
		
	});

    // SMOOTH SCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);


// $('.carousel').carousel()

// $('.carousel').carousel({
// 	interval: 2000
//   })

  $('.carousel').carousel()


	// var page_position = jQuery(document).scrollTop();       
	// jQuery(document).scroll(function(event){
	// var position_actually = jQuery(document).scrollTop();
	// if(position_actually>position_chat){
	// static_chat.animate({
	// 	top: "+"+jQuery("#move_to").offset().top
	// },100);
	// }else if(page_position<position_actually||position_actualy===position_chat){
	// alert("test"); // TEST para saber cuando vuelve a la posición original
	// }
	
	// });