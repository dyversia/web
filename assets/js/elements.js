var $ = jQuery.noConflict();

(function($) {
    "use strict";

    var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
    var $widthR = $(window).width(),
        $root = $('html, body');

    /*-------------------------------------------------*/
    /* =  Lazy Loader
    /*-------------------------------------------------*/
    try {
        $(document).ready(function() {
            $("img[data-unveil]").unveil(200, function() {
                $(this).on("load", function() {
                    $(this).css('opacity', 1);
                });
            });
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Accordion ELEMENT
    /*-------------------------------------------------*/
    try {
        $("[class|='accordion-element']").on("click", ".icon", function(event) {
            $(this).parent().parent().find('li').removeClass('open');
            $(this).parent().toggleClass('open');
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Tabs ELEMENT
    /*-------------------------------------------------*/
    try {
        $('[class|="ttabs-element"] [class|="ttabs"]').on("click", " .ttab", function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var tabID = $(this).attr('data-ttab');

            var tabSelected = $(this).closest('[class|="ttabs-element"]').find("[data-ttab='" + tabID + "']");
            tabSelected.siblings().removeClass('active');
            tabSelected.addClass('active');

        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Anchor
    /*-------------------------------------------------*/
    try {
        $('a[data-anchor][href*="#"]').on("click", function(event) {
            event.preventDefault();

            var width = $(window).width(),
                offset;

            if (width >= 1199) {
                offset = -60;
            } else if (width < 1199) {
                offset = -40;
            }

            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top + offset
            }, 500);
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Animations
    /*-------------------------------------------------*/
    try {
        AOS.init({
            once: true
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Youtube Video: Magnific popup
    /*-------------------------------------------------*/
    var player,
        companyVideoID = $('a.yt-video').attr('data-videoID');

    function playVideo() {
        new YT.Player('youtube-player', {
            width: '100%',
            height: '100%',
            videoId: companyVideoID,
            events: {
                'onReady': function(event) {
                    player = event.target;
                    player.playVideo();
                }
            }
        });
    }

    try {
        $('a.yt-video').magnificPopup({
            items: [{
                src: "<div id='youtube-player'></div>",
                type: 'inline'
            }],
            callbacks: {
                open: function() {
                    if (!player) {
                        // 2. This code loads the IFrame Player API code asynchronously.
                        var tag = document.createElement('script');

                        tag.src = "https://www.youtube.com/iframe_api";
                        var firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                        window.onYouTubeIframeAPIReady = function() {
                            playVideo();
                        };
                    } else {
                        playVideo();
                    }
                },
            },
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: true
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Vimeo Video: Magnific popup
    /*-------------------------------------------------*/
    try {
        $('[class*="lightbox-iframe"]').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: true,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }

                    // you may add here more sources

                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Gallery Lightbox: Magnific popup
    /*-------------------------------------------------*/
    try {
        $('[class*="gallery-images"]').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '[class*="lightbox"]',
                type: 'image',
                fixedContentPos: true,
                gallery: {
                    enabled: true
                },
                closeBtnInside: false
            });
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Transition
    /*-------------------------------------------------*/
    $("a[href*='html'], a[href='/']").on("click", function(event) {
        event.preventDefault();
        $('body').removeClass('visible');
        var url = $(this)[0]['href'];
        setTimeout(function() {
            window.location.href = url;
        }, 400);
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    $('body').addClass('visible');
});