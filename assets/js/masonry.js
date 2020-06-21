var $ = jQuery.noConflict();

(function($) {
    "use strict";

    try {

        var $mainContainerSimple = $('[data-isotope="load-simple"] .row');
        $mainContainerSimple.imagesLoaded(function() {

            var $container = $mainContainerSimple.isotope({ itemSelector: '[data-isotope="load-simple"] [class*="element"]', layoutMode: 'fitRows' });
            var $simpleFilters = $('[data-isotope-filters] ul');

            $simpleFilters.on('click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });
            });
            $simpleFilters.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });

        });

    } catch (err) {

    }

    //masonry
    try {
        var $masonryContainer = $('[data-isotope="masonry"] .row');
        $masonryContainer.imagesLoaded(function() {
            $masonryContainer.isotope({
                itemSelector: '[data-isotope="masonry"] [class*="element"]',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '[data-isotope="masonry"] [class*="element"]',
                    gutter: 18
                }
            });
            $masonryContainer.isotope('layout');
        });

    } catch (err) {

    }

    try {
        var $masonryContainerF = $('[data-isotope="fmasonry"] .row');
        $masonryContainerF.imagesLoaded(function() {
            $masonryContainerF.isotope({
                itemSelector: '[data-isotope="masonry"] [class*="element"]',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '[data-isotope="masonry"] [class*="element"]',
                    gutter: 18
                }
            });
            var $masonryFiltersF = $('[data-isotope-filters] ul');
            $masonryFiltersF.on('click', 'li', function() {
                var filterValueF = $(this).attr('data-filter');
                $masonryContainerF.isotope({
                    filter: filterValueF
                });
            });
            $masonryFiltersF.each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'li', function() {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });

        });

    } catch (err) {

    }

    //fitRows
    try {
        var $blogContainer = $('[data-isotope="fitRows"] .row');
        $blogContainer.imagesLoaded(function() {
            $blogContainer.isotope({ itemSelector: '[data-isotope="fitRows"] [class*="element"]', layoutMode: 'fitRows' });
            $blogContainer.isotope('layout');
        });
    } catch (err) {

    }

})(jQuery);