/*jslint browser: true*/
/*global $, jQuery*/
(function ($) {
    "use strict";
    $(document).ready(function () {

        $(window).load(function () {

		    var foundActive = false, activeElement, indicatorPosition, indicator = $('#navbar-indicator'), defaultPosition, parentPosition;
		
		    var menu_offset = 0; // value due to padding

            defaultPosition = indicator.position().left + menu_offset;
            parentPosition = indicator.parent().position().left;

		
		    $(".navbar-right > ul > li").hover(function () {
		        activeElement = $(this);
                parentPosition = indicator.parent().position().left;
		        indicatorPosition = activeElement.position().left + activeElement.width() / 2 + menu_offset -1000 ;
		        indicator.css("left", indicatorPosition);
		    },
		        function () {
                    indicator.css("left", defaultPosition);
                });
        });

    });
}(jQuery));

