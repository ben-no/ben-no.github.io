/*jslint browser: true*/
/*global $, jQuery*/
(function ($) {
    "use strict";

    $(document).ready(function () {

        $(window).on('load', function () {

            var foundActive = false, activeElement, indicatorPosition, indicator = $('#navbar-indicator'), defaultPosition, currentElement = $(".navbar-right > ul > li.active");

		    var offset = -8; // value due to padding

            defaultPosition = currentElement.position().left + currentElement.width() / 2 + offset;
            indicator.css("left", defaultPosition);
            if ($('.navbar-toggle').css('display') === 'none') {
                indicator.css("display", "block");
            }

//		    $(".navbar-right > ul > li").hover(function () {
//		        activeElement = $(this);
//                defaultPosition = currentElement.position().left + currentElement.width() / 2 + offset;
//		        indicatorPosition = activeElement.position().left + activeElement.width() / 2 + offset;
//		        indicator.css("left", indicatorPosition);
//		    },
//		        function () {
////				check whether navindictator.hover
//
//                    indicator.css("left", defaultPosition);
//                });

		    $(".navbar-right > ul > li").mouseenter(function () {
		        activeElement = $(this);
                defaultPosition = currentElement.position().left + currentElement.width() / 2 + offset;
		        indicatorPosition = activeElement.position().left + activeElement.width() / 2 + offset;
		        indicator.css("left", indicatorPosition);
		    });
            $(".navbar-right > ul > li").mouseleave(function () {
//				check whether navindictator.hover

                 indicator.css("left", defaultPosition);
            });
        });

        $(window).resize(function () {
            var currentElement = $(".navbar-right > ul > li.active"), indicator = $('#navbar-indicator');
            indicator.css("left", currentElement.position().left + currentElement.width() / 2 - 8);
            if ($('.navbar-toggle').css('display') === 'none') {
                indicator.css("display", "block");
            } else {
                indicator.css("display", "none");
            }
        });

    });
}(jQuery));
