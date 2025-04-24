(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        /*---------------------------------------------------
            Main Slider
        ----------------------------------------------------*/
        $('.slider-carousel').owlCarousel({
            loop: true,
            navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'lightSpeedIn',
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            Screenshot Slider
        ----------------------------------------------------*/
        $('.screenshots-slider').owlCarousel({
            loop: true,
            navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            margin: 10,
            center: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });

        /*---------------------------------------------------
            Video PopUp
        ----------------------------------------------------*/
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*---------------------------------------------------
            Smooth Scroll
        ----------------------------------------------------*/
        $('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }); 
    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });

    new WOW().init();
    //Dynamic year 
    const currentYear = new Date().getFullYear();
    document.getElementById('footerYear').textContent = currentYear;

}(jQuery));

