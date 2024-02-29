(function ($) {
    "use strict";

    // initializing preloader
    $(window).on('load',function(){

        // preloader
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

        // banner img animation
        setInterval(function(){ 
            $(".banner .part-img").addClass("animated")
        }, 700);    
    });

    $(document).ready(function($){

        // date-picker
        if($('div').hasClass('birth-date-element')) {
            const myDatePicker = MCDatepicker.create({ 
                el: '#birth-date',
                dateFormat: 'MM/DD/YYYY',
                showCalendarDisplay: false,
                bodyType: 'inline',
            });
        }

        // testimonial slider 
        $(".testimonial-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            slideTransition: 'linear',
            smartSpeed: 500,
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutDown',
            autoplay: true,
            dotsClass: 'carousel-custom-dots',
            dotClass: 'owl-dot',
            mouseDrag: false,
            navText: ["<img src='assets/img/testimonial/left-arrow.png'>","<img src='assets/img/testimonial/right-arrow.png'>"]
        });

        // testimonial slider 
        $(".recent-post-slider").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            slideTransition: 'linear',
            smartSpeed: 500,
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutDown',
            autoplay: true,
            dotsClass: 'carousel-custom-dots',
            dotClass: 'owl-dot',
            mouseDrag: false,
            navText: ["<img src='assets/img/testimonial/left-arrow.png'>","<img src='assets/img/testimonial/right-arrow.png'>"],
            responsive: {
                1200: {
                    items: 1,
                    margin: 0
                },
                992: {
                    items: 2,
                    margin: 40
                },
                768: {
                    items: 2,
                    margin: 20
                }
            }
        });

        // recommended post slider
        $(".recommended-post-slider").owlCarousel({
            loop: true,
            margin: 40,
            nav: false,
            items: 2,
            slideTransition: 'linear',
            smartSpeed: 500,
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutDown',
            autoplay: true,
            autoWidth:true,
            mouseDrag: true,
            dots: false
        });

        
        $('.footer').find('.footer-bottom').prepend("<div class='back-to-top-btn'><a href='#'><i class='fa-solid fa-arrow-turn-up'></i></a></div>");

        // fixed navbar
        $(window).on('scroll', function(){
            var headerSection = $('.header');
            var backToTopBtn = $('.back-to-top-btn a');
            var scroll = $(window).scrollTop();
            var footerSection = $('.footer').offset().top;
            var footerOffset = footerSection - $(window).innerHeight();

            if ($(window).scrollTop() > 300) {
                headerSection.addClass('header-fixed fadeInDown animated');
            } else {
                headerSection.removeClass('header-fixed fadeInDown animated');
            }

            // fixed header remove for register page only
            if($('.header').hasClass('header-for-register')) {
                $('.header').removeClass('header-fixed fadeInDown animated');
            }
            

            if ($(window).scrollTop() > 1500) {
                backToTopBtn.addClass('active');
            } else {
                backToTopBtn.removeClass('active');
            }

            if(scroll > footerOffset) {
                backToTopBtn.addClass('foot-on-bottom');
                $('.footer').find('.footer-bottom').find('.back-to-top-btn').find('a').addClass('active-plus');
            } else {
                backToTopBtn.removeClass('foot-on-bottom');
                $('.footer').find('.footer-bottom').find('.back-to-top-btn').find('a').removeClass('active-plus');
            }
        });

    });
    
}(jQuery));	