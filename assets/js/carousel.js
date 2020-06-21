var $ = jQuery.noConflict();

(function($) {
    "use strict";

    try {
        var owlPortfolio = $('.portfolio-carousel');

        owlPortfolio.owlCarousel({
            items: 3,
            lazyLoad: true,
            loop: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                415: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
        $('.portfolio-wrap .navigation .nav--prev').on('click', function() {
            owlPortfolio.trigger('prev.owl.carousel', [800]);
        });
        $('.portfolio-wrap .navigation .nav--next').on('click', function() {
            owlPortfolio.trigger('next.owl.carousel', [800]);
        });

    } catch (err) {

    };

    try {
        var owlTestimonials = $('.testimonials-carousel');
        owlTestimonials.owlCarousel({
            items: 2,
            lazyLoad: true,
            loop: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                415: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
        $('.testimonials-wrap .navigation .nav--prev').on('click', function() {
            owlTestimonials.trigger('prev.owl.carousel', [800]);
        });
        $('.testimonials-wrap .navigation .nav--next').on('click', function() {
            owlTestimonials.trigger('next.owl.carousel', [800]);
        });
    } catch (err) {

    };

    try {
        var owlTeam = $('.team-carousel');
        owlTeam.owlCarousel({
            items: 4,
            lazyLoad: true,
            loop: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                415: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
        $('.team-wrap .navigation .nav--prev').on('click', function() {
            owlTeam.trigger('prev.owl.carousel', [800]);
        });
        $('.team-wrap .navigation .nav--next').on('click', function() {
            owlTeam.trigger('next.owl.carousel', [800]);
        });
    } catch (err) {

    };
    try {
        var owlGallery = $('.gallery-carousel');
        owlGallery.owlCarousel({
            items: 2,
            lazyLoad: true,
            loop: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                415: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        });
        $('.gallery-wrap .navigation .nav--prev').on('click', function() {
            owlGallery.trigger('prev.owl.carousel', [800]);
        });
        $('.gallery-wrap .navigation .nav--next').on('click', function() {
            owlGallery.trigger('next.owl.carousel', [800]);
        });
    } catch (err) {

    };
    try {
        var owlArticles = $('.articles-carousel');
        owlArticles.owlCarousel({
            items: 3,
            lazyLoad: true,
            loop: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                415: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
        $('.articles-wrap .navigation .nav--prev').on('click', function() {
            owlArticles.trigger('prev.owl.carousel', [800]);
        });
        $('.articles-wrap .navigation .nav--next').on('click', function() {
            owlArticles.trigger('next.owl.carousel', [800]);
        });
    } catch (err) {

    };

    try {
        var owlImages = $('.images-carousel');
        owlImages.owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayHoverPause: false,
            dots: true,
            nav: true,
            navText: ['<span><i class="feather icon-arrow-left"></i></span>', '<span><i class="feather icon-arrow-right"></i></span>']
        });
    } catch (err) {

    };

    try {
        var mySwiper = new Swiper('.slider-pageheader', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: {
                loadPrevNext: true,
            },
            fadeEffect: {
                crossFade: true,
            },
            speed: 800,
            autoplay: {
                delay: 5000,
            },
            // Navigation arrows
            navigation: {
                nextEl: '[class*="swiper-button-next"]',
                prevEl: '[class*="swiper-button-prev"]',
            }
        })
    } catch (err) {

    };
})(jQuery);