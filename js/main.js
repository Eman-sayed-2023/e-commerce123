AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 3
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



	var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();


	function makeTimer() {

		var endTime = new Date("30 December 2022 6:53:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);



})(jQuery);

const { to, registerPlugin, set, timeline } = gsap

gsap.registerPlugin(MorphSVGPlugin, Physics2DPlugin)

//gsap.globalTimeline.timeScale(.1);

document.querySelectorAll('.add-to-cart').forEach(button => {
    let background = button.querySelector('.background path')
    button.addEventListener('pointerdown', e => {
        if(button.classList.contains('active')) {
            return
        }
        to(button, {
            '--background-s': .97,
            duration: .1
        })
    })
    button.addEventListener('click', e => {
        e.preventDefault()
        if(button.classList.contains('active')) {
            return
        }
        button.classList.add('active')
        to(button, {
            keyframes: [{
                '--background-s': .97,
                duration: .1
            }, {
                '--background-s': 1,
                delay: .1,
                duration: .8,
                ease: 'elastic.out(1, .6)'
            }]
        })
        to(button, {
            '--text-x': '16px',
            '--text-o': 0,
            duration: .2
        })
        to(button, {
            keyframes: [{
                '--cart-x': '-12px',
                '--cart-s': 1,
                duration: .25
            }, {
                '--bottle-s': 1,
                '--bottle-o': 1,
                duration: .15,
                onStart() {
                    to(button, {
                        duration: .4,
                        keyframes: [{
                            '--bottle-r': '-8deg'
                        }, {
                            '--bottle-r': '8deg'
                        }, {
                            '--bottle-r': '0deg'
                        }]
                    })
                }
            }, {
                '--bottle-y': '0px',
                duration: .3,
                delay: .15,
                onStart() {
                    to(background, {
                        keyframes: [{
                            morphSVG: 'M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 12 72.5547 12C82.6251 12 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z',
                            duration: .1,
                            delay: .18
                        }, {
                            morphSVG: 'M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 4 72.5547 4C82.6251 4 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z',
                            duration: .8,
                            ease: 'elastic.out(1, .6)'
                        }]
                    })
                    to(button, {
                        '--bottle-s': .5,
                        duration: .15
                    })
                }
            }, {
                '--cart-y': '3px',
                duration: .1,
                onStart() {
                    to(button, {
                        keyframes: [{
                            '--check-y': '24px',
                            '--check-s': 1,
                            duration: .25
                        }, {
                            '--check-offset': '0px',
                            duration: .25
                        }]
                    })
                }
            }, {
                '--cart-y': '0px',
                duration: .2
            }, {
                '--cart-x': '-6px',
                '--bottle-r': '12deg',
                '--bottle-x': '-25%',
                duration: .15
            }, {
                '--cart-x': '-16px',
                '--bottle-r': '-12deg',
                '--bottle-x': '-50%',
                duration: .2,
                onStart() {
                    drops(button, 5, -130, -100);
                },
            }, {
                '--cart-x': '92px',
                '--cart-r': '-20deg',
                duration: .4,
                onStart() {
                    button.classList.add('clipped')
                },
                onComplete() {
                    set(button, {
                        '--cart-x': '-120px',
                        '--cart-s': .8,
                        '--cart-y': '-2px',
                        '--bottle-o': 0,
                        '--text-x': '2px'
                    })
                }
            }, {
                '--cart-x': '-57px',
                '--cart-r': '0deg',
                '--check-s': 0,
                duration: .3,
                delay: .1,
                clearProps: true,
                onStart() {
                    to(button, {
                        '--text-x': '10px',
                        '--text-o': 1,
                        duration: .2,
                        delay: .1
                    })
                },
                onComplete() {
                    button.classList.remove('active', 'clipped')
                }
            }]
        })
    })
})

function drops(parent, quantity, minAngle, maxAngle) {
    for(let i = quantity - 1; i >= 0; i--) {
        let angle = gsap.utils.random(minAngle, maxAngle),
            velocity = gsap.utils.random(60, 80)

        let div = document.createElement('div')
        div.classList.add('drop')

        parent.appendChild(div);

        set(div, {
            opacity: 1,
            scale: 0,
        });
        timeline({
            onComplete() {
                div.remove();
            }
        }).to(div, {
            duration: .4,
            scale: gsap.utils.random(.5, .7)
        }, 0).to(div, {
            duration: 1,
            physics2D: {
                angle: angle,
                velocity: velocity,
                gravity: 80
            }
        }, 0).to(div, {
            duration: .3,
            opacity: 0
        }, .3);
    }
}




















	





