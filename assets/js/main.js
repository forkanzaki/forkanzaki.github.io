/* --------------------------------------------------------

Template Name: Jackson
Description: Personal Portfolio Template
Version: 1.0
Author: themehavens

=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header takes the Full Height of the window
3 - Color Switcher && Changing Colors
4 - Sticky Menu
5 - About Section Skill Bars
6 - Particle Background in Home Section
7 - Hide menu after clicking on a link
8 - Jquery Smooth Scroll
9 - jquery scroll spy
10 - Parallax Effect
11 - Start numbers animate at fun-facts section 
12 - Start Isotop Plugin in Portfolio Section
13 - Start Owl Carousel Plugin in Client Section
14 - Typed Text in Home Section
15 - Magnific Popup Js
16 - Jquery Go Down Button
17 - Skrollr Js Active Jquery
18 - Headroom Js Active Jquery

------------------------------------------------------- */

(function($) {

    "use strict";

	/* ---------------------------------------------------
        1 - Adjust Loading Page
	----------------------------------------------------- */
    $(window).on("load", function () {
        $("#loading #loading-center").delay(500).animate({
            top: "-100%"
        }, 1000, "easeInQuart");
        $("#loading").delay(1800).fadeOut(1500);
    });
        
    /* ----------------------------------------------------------
        2 - Make Header takes the Full Height of the window
    ------------------------------------------------------------ */
    var homeSec = $("#home");
    homeSec.height($(window).height());

    $(window).on("resize", function() {
        homeSec.height($(window).height());
    });

    /* --------------------------------------------------------
        3 - Color Switcher && Changing Colors
    ---------------------------------------------------------- */
    /* Variables */
    var colorSwitcher 	= $(".color-switcher"),
        switcherBtn 	= $(".switcher-btn"),
        colorSlot 		= $(".color-switcher .color-slot");
    /* Show/Hide color switcher on clicking on switcher button */
    switcherBtn.on("click", function(e) {
        e.preventDefault();
        if(colorSwitcher.hasClass("closed")) {
            colorSwitcher.removeClass("closed").animate({
                left: "0px"
            }, 300, "easeInOutSine");
        } else {
            colorSwitcher.animate({
                left: "-200px"
            }, 300, "easeInOutSine").addClass("closed");
        }
    });

    /* Giving every color-slot it's background color */
    colorSlot.css("background-color", function () {
        return $(this).attr("data-background");
    });

    /* Changing color when clicking on color-slot  */
    colorSlot.on("click", function() {
        var dataTarget = $(this).attr("data-target");
        $("link[href*='color-']").attr("href", dataTarget);		
    });
    
    /* ---------------------------------------------------
        4 - Sticky Menu
    ----------------------------------------------------- */
    $(".header-area").sticky({topSpacing:0});
    
    /* ---------------------------------------------------
        5 - About Section Skill Bars  
    ----------------------------------------------------- */
    $(".about-bottom").appear(function () {
        $(".skillbar").skillBars();
    }, {
        accX: 0,
        accY: -350
    });
    
    /* ---------------------------------------------------
        6 - Particle Background in Home Section
    ----------------------------------------------------- */
    window.onload = function() {
        Particles.init({
            // normal options
            color: '#b9b9b9',
            connectParticles: false,
            selector: '.particle-bg',
            maxParticles: 100,
            minDistance: 120,
            sizeVariations: 5,
            speed: 0.6,

            // options for breakpoints
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        maxParticles: 70,
                        color: '#b9b9b9',
                        connectParticles: false
                    }
                }, {
                    breakpoint: 425,
                    options: {
                        maxParticles: 30,
                        connectParticles: true
                    }
                }, {
                    breakpoint: 320,
                    options: {
                        maxParticles: 0 // disables particles.js
                    }
                }
            ]
        });
    };
    
    /* ---------------------------------------------------
        7 - Hide menu after clicking on a link 
    ----------------------------------------------------- */
    $("ul.nav li a").on("click", function () {
        $("#myNavbar").collapse("hide");
    });

    /* ---------------------------------------------------
        8 - Jquery Smooth Scroll
    ----------------------------------------------------- */
    $("li.smooth-menu > a").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '0';
        $("html, body").stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });       

    /* ---------------------------------------------------
        9 - jquery scroll spy
    ----------------------------------------------------- */
    $(window).on("scroll", function () {
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 94
        }); 
    });

    /* ---------------------------------------------------
        10 - Parallax Effect
    ----------------------------------------------------- */
    var parallaxHome 	    = $("#home.parallax"),
        parallaxFacts 	    = $("#fun-facts.parallax"),
        parallaxPromo 	    = $("#promo.parallax"),
        parallaxclient 	    = $("#client.parallax");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        parallaxHome.css({"background-attachment": "scroll"});
        parallaxFacts.css({"background-attachment": "scroll"});
        parallaxPromo.css({"background-attachment": "scroll"});
        parallaxclient.css({"background-attachment": "scroll"});
    } else {
        parallaxHome.parallax("50%", 0.3);
        parallaxFacts.parallax("50%", 0.3);
        parallaxPromo.parallax("30%", 0.3);
        parallaxclient.parallax("50%", 0.3);
    }
    
    /* ---------------------------------------------------
        11 - Start numbers animate at fun-facts section 
    ----------------------------------------------------- */
    $("#fun-facts").appear(function () {
          $(".timer").countTo();
    }, {
          accX: 0,
          accY: -350
    });
    
    /* ---------------------------------------------------
        12 - Start Isotop Plugin in Portfolio Section
    ----------------------------------------------------- */
    //active isotop js
    $('.porfolio-items').isotope({
        itemSelector: '.single-porfolio',
        layoutMode: 'fitRows',
    });

    //isoptop click function
    $(".portfolio-filter > ul.nav > li").on("click", function () {
        $(".portfolio-filter > ul.nav > li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".porfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
    
    /* ---------------------------------------------------
        13 - Start Owl Carousel Plugin in Client Section
    ----------------------------------------------------- */
    $(".client-group").owlCarousel({
        navigation: false,
        autoPlay: 3000,
        slideSpeed: 1500,
        pagination: true,
        paginationSpeed: 1500,
        singleItem: true 
    });
    
    /* ---------------------------------------------------
        14 - Typed Text in Home Section
	----------------------------------------------------- */
	$(".typed-element").typed({
    	strings: ["jackson smith .", "live in australia .", "helpfull hacker at", "themeforest.net ."],
    	typeSpeed: 15,
    	loop: true,
    	backDelay: 3000
    });
    
    /* ----------------------------------------------------------
        15 - Magnific Popup Js
    ------------------------------------------------------------ */
    var magnifPopup = function () {
        $('.zoom').magnificPopup({
            type: 'image',
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                
                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('a.zoom') ? openerElement : openerElement.find('a.zoom');
                }
            }
        });
    }; 
    magnifPopup();

    /* ---------------------------------------------------
        16 - Jquery Go Down Button
    ----------------------------------------------------- */
    $("a.scroll-link").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '60';
        $("html, body").stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        
        event.preventDefault();
    });
    
    /* ---------------------------------------------------
        17 - Skrollr Js Active Jquery
    ----------------------------------------------------- */
    skrollr.init({
		forceHeight: false,
		mobileCheck: function(){
			if((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
				//alert('mobile');
				//setScrollTop(0);
				//Where should I set setScrollTop(0); ???
			}
		}
	});
    
    /* ---------------------------------------------------
        18 - Headroom Js Active Jquery
    ----------------------------------------------------- */
    // grab an element
    var myElement = document.querySelector(".headroom");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();

})(jQuery);