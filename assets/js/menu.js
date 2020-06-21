var $ = jQuery.noConflict();

(function($) {
    "use strict";

    /*-------------------------------------------------*/
    /* =  Menu
    /*-------------------------------------------------*/
    try {

        var menuMobile = $('#mobile-menu'),
            mainMenu = $('#main-menu'),
            header = $('#header'),
            headerHeight = header.outerHeight(),
            headerStickySpace = 100;

        mainMenu.on("click", '[class*="menu-button"]', function(e) {

            $('body').toggleClass('no-scroll');

            var mainMenuItem = $(e.currentTarget);

            if (menuMobile.attr('aria-expanded') === 'true') {
                menuMobile.attr('aria-expanded', 'false');
                $(this).parent().attr('aria-expanded', 'false');
                menuMobile.find('[class*="mobile-submenu"]').removeClass('active');
            } else {
                menuMobile.attr('aria-expanded', 'true');
                $(this).parent().attr('aria-expanded', 'true');
            }

        });
        menuMobile.on("click", 'li[class*="dropdown-parent"]', function(e) {
            var menuItem = $(e.currentTarget);

            // fixed submenu mobile menu
            if (menuItem.attr('aria-expanded') === undefined) {
                var idDropdown = menuItem.data('dropdown');
                menuMobile.find('#' + idDropdown).toggleClass('active');
            } else {
                // dropdown mobile menu
                if (menuItem.attr('aria-expanded') === 'true') {
                    $(this).attr('aria-expanded', 'false');
                } else {
                    $(this).attr('aria-expanded', 'true');
                }
            }
        });
        menuMobile.on("click", '#backSubmenu', function() {
            $(this).parent().removeClass('active');
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Sticky menu
    /*-------------------------------------------------*/
    try {
        $(window).on('scroll', function() {

            var scroll = $(window).scrollTop();

            if (scroll >= headerHeight + headerStickySpace) {
                header.addClass("moove");
            } else {
                header.removeClass("moove");
            }
        });
    } catch (err) {

    };
    /*-------------------------------------------------*/
    /* =  Search Box
    /*-------------------------------------------------*/
    try {

        var searchBoxHeader = $('#header #search-box-header'),
            searchHeader = $('#header [class|="search-header"]');

        searchBoxHeader.on("click", function(e) {
            if (searchHeader.attr('aria-expanded') === 'true') {
                searchHeader.attr('aria-expanded', 'false');
            } else {
                searchHeader.attr('aria-expanded', 'true');
            }
        });
    } catch (err) {

    };
})(jQuery);