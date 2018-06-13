/**
 *****************************************
 * main.js
 *
 * JS FILE FOR CUSTOM JS AND ACTIVE JS
 *
 *****************************************
 **/

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // -------------------------------------------------------------
        // event slider active
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.event-slide').slick({
                slideToShow: 1,
                prevArrow: false,
                nextArrow: false,
                autoplay: true,
                speed: 2000,
                   responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
//                        centerMode: true,
//                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                  ]
            });
        }

        // -------------------------------------------------------------
        // home-9 nice select active
        // -------------------------------------------------------------
        if ($.fn.niceSelect) {
            $('.select-option').niceSelect();

        }


        // -------------------------------------------------------------
        // sticky js active
        // -------------------------------------------------------------
        if ($.fn.sticky) {
            $(".header-area, .home-2-header-area").sticky({
                stopSpacing: 0
            });
        }

        // -------------------------------------------------------------
        // pricing active bg
        // -------------------------------------------------------------
        $('.single-pricing').on('click', function () {
            $('.single-pricing').removeClass('active');
            $(this).addClass('active');
        });


        // -------------------------------------------------------------
        // lightbox active
        // -------------------------------------------------------------
        if ($.fn.magnificPopup) {
            $('.lightbox-popup, .img-popup, .home-8-section-lightbox').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom',
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out'
                },
                gallery: {
                    enabled: true,
                }
            });

        }

        // -------------------------------------------------------------
        // masonry active
        // -------------------------------------------------------------
        if ($.fn.masonry) {
            $('.home-2-portfolio-items').masonry({
                // options...
                itemSelector: '.home-2-single-potfolio',
                columnWidth: 0
            });
        }
        
        
        // -------------------------------------------------------------
        // owl carousel active
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {
            $(".home-3-homepage-slider").owlCarousel({
                items: 1,
                nav: true,
                dots: true,
                autoplay: true,
                loop: true,
                mouseDrag: false,
                touchDrag: false,
                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
                animateIn: "zoomInCustom",
                animateOut: "fadeOut",
            });

        }

        // -------------------------------------------------------------
        //owl carousel active
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {
            $(".home-9-homepage-slider").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                autoplay: true,
                loop: true,
                mouseDrag: false,
                touchDrag: false,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                animateIn: "zoomInCustom",
                animateOut: "fadeOut",
            });

        }
        
        
        // -------------------------------------------------------------
        // owl carousel active
        // -------------------------------------------------------------
        if ($.fn.owlCarousel) {
            $(".home-6-home-page-slide").owlCarousel({
                items: 1,
                nav: true,
                dots: false,
                autoplay: true,
                loop: true,
                mouseDrag: false,
                touchDrag: false,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                animateIn: "zoomInCustom",
                animateOut: "fadeOut",
            });

        }
        
        
        // -------------------------------------------------------------
        // active home-3 work slider 
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home-3-home-slide').slick({
                variableWidth: true,
                autoplay: true,
                centerMode: true,
                centerPadding: '60px',
                infinite: true,
                speed: 400,
                pauseOnHover:false,
                cssEase: 'linear',
                prevArrow: '<div class="slick--prev"><i class="fa fa-angle-left"></i></div>',
                nextArrow: '<div class="slick--next"><i class="fa fa-angle-right"></i></div>',
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
//                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                  ]
            });
        }
        
        
        // -------------------------------------------------------------
        // active home-3 testimonial slider 
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home-3-testimonial-home-slide').slick({
                slideToShow: 1,
                autoplay: true,
                speed: 1000,
                centerMode: true,
                pauseOnHover:false,
                centerPadding: '0px',
                prevArrow: '<div class="slick--prev"><i class="fa fa-angle-left"></i></div>',
                nextArrow: '<div class="slick--next"><i class="fa fa-angle-right"></i></div>',
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        centerMode: true,
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: true,
                        centerMode: true,
                        speed: 600,
                        slidesToShow: 1
                      }
                    }
                  ]
                
            });
        }
        
        
        // -------------------------------------------------------------
        // active home-4 testimonial slider 
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home-4-testimonial-slide').slick({
                slideToShow: 1,
                autoplay: true,
                speed: 300,
                dots: true,
                prevArrow: false,
                nextArrow: false,
                button: false,
                dotsClass: 'string'

            });
        }


        // -------------------------------------------------------------
        // counter home-4 
        // -------------------------------------------------------------
        if ($.fn.countTo) {
            $('.counter-section').on('inview', function (event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.home-4-count, .home-5-count').each(function () {
                        var $this = $(this);
                        $({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 5000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).off('inview');
                }
            });

        }

        
        // -------------------------------------------------------------
        // home-4 search bar
        // -------------------------------------------------------------
        $('.search_btn').on('click', function () {
            $('.home-4-search input').toggleClass('fade');
        })

        
        // -------------------------------------------------------------
        // home-7 expand menu
        // -------------------------------------------------------------
        $('.home-7-menu-expand').on('click', function () {
            $('.home-7-menu, .home-7-menu-expand').toggleClass('expand');
        })



        // -------------------------------------------------------------
        // home-7 portfolio isotope 
        // -------------------------------------------------------------
        if ($.fn.isotope) {
            $('.home-7-portfolio-item').isotope({
                itemSelector: '.home-7-single-items',
                filter: '*'
            });
        }

        // -------------------------------------------------------------
        // home-7 portfolio isotope menu 
        // -------------------------------------------------------------
        if ($.fn.isotope) {
            $('.home-7-portfolio-menu li').click(function () {

                var selector = $(this).attr('data-filter');

                jQuery('.home-7-portfolio-item').isotope({

                    filter: selector

                });

            });
        }

        // -------------------------------------------------------------
        //  home-7 portfolio isotope 
        // -------------------------------------------------------------
        if ($.fn.masonry) {
            $('.home-7-portfolio-item').masonry({
                // options...
                itemSelector: '.home-7-single-items',
                columnWidth: 0
            });
        }


        // -------------------------------------------------------------
        //  home-7 portfolio isotope 
        // -------------------------------------------------------------
        $('.home-7-portfolio-menu li').on('click', function () {
            $('.home-7-portfolio-menu li').removeClass('active');
            $(this).addClass('active');
        })

        // -------------------------------------------------------------
        //  home-8 fullpage js active
        // -------------------------------------------------------------
        if ($.fn.fullpage) {
            $('#fullpage').fullpage({
                onLeave: function (index, nextIndex, direction) {
                    //it won't scroll if the destination is the 3rd section
                    if (nextIndex == 8) {
                        return false;
                    }
                },
//                afterRender: function () {
//                    setInterval(function () {
//                        $.fn.fullpage.moveSectionDown();
//                    }, 5000);
//                }
            });

        }


        // -------------------------------------------------------------
        //  home-10 testimonial slider 
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home-10-testimonial-left-top').slick({
                centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                slidesToShow: 3,
                prevArrow:false,
                nextArrow:false,
                asNavFor:'.home-10-testimonial-slide-bottom',
            });
        }
        
        
        // -------------------------------------------------------------
        //  home-10 testimonial slider bottom 
        // -------------------------------------------------------------
        if ($.fn.slick) {
            $('.home-10-testimonial-slide-bottom').slick({
                centerMode: true,
                centerPadding: '60px',
                autoplay:true,
                cssEase: 'linear',
                speed:400,
                asNavFor:'.home-10-testimonial-left-top',
                slidesToShow: 1,
                prevArrow: '<div class="slick--prev"><i class="fa fa-angle-left"></i></div>',
                nextArrow: '<div class="slick--next"><i class="fa fa-angle-right"></i></div>',
            });
        }
        
        
        // -------------------------------------------------------------
        // onepage nav start
        // -------------------------------------------------------------
            $('ul#nav > li > a, ul#nav2 > li > a').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                   if (target.length) {
                     $('html,body').animate({
                         scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        }); 
       
        
        
        // -------------------------------------------------------------
        // responsive menu start
        // -------------------------------------------------------------
        if ($.fn.slicknav) {
		   $('ul#nav').slicknav({
            prependTo:".responsive_menu",
            label:""
            
            })
        }

        
                
        // -------------------------------------------------------------
        // coundown home 2 start
        // -------------------------------------------------------------
        if ($.fn.slicknav) {
		    $('#clock').countdown('2017/10/10', function(event) {
            $(this).html(event.strftime(' <div class="day_wrap"> <div class="days">days</div>%D </div>  <div class="day_wrap"> <div class="days">hours</div>%H </div> <div class="day_wrap"> <div class="days">minutes</div>%M </div>   <div class="day_wrap">  <div class="days">secound</div>%S </div>'));
            });
        }


    });



    jQuery(window).load(function () {
        
        // -------------------------------------------------------------
        // animation active
        // -------------------------------------------------------------
        new WOW().init();
        
        jQuery('#preloader').fadeOut(3000);

    });


}(jQuery));
