/*jslint browser: true*/
/*global $, jQuery*/
(function ($) {
    "use strict";
    $(document).ready(function () {

        $(window).load(function () {

            $('.navbar-right').prepend("<div id='navbar-indicator'></div>");
		
		    var foundActive = false, activeElement, indicatorPosition, indicator = $('#navbar-indicator'), defaultPosition;
		
		    var menu_offset = 0; // value due to padding

            $(".navbar-right > ul > li").each(function () {
		        if ($(this).hasClass('active')) {
		            activeElement = $(this);
		            foundActive = true;
                }
		    });
		
		
            if (foundActive === false) {
		        activeElement = $(".navbar-right > ul > li").first();
		    }
		
		    defaultPosition = indicatorPosition = activeElement.position().left + activeElement.width() / 2 - 8 + menu_offset;
//		    console.log(activeElement);
//            console.log(activeElement.position().left);
//		    console.log(activeElement.width());
		    indicator.css("left", indicatorPosition);
		
		    $(".navbar-right > ul > li").hover(function () {
		        activeElement = $(this);
		        indicatorPosition = activeElement.position().left + activeElement.width() / 2 - 8 + menu_offset;
		        indicator.css("left", indicatorPosition);
		    },
		        function () {
                    indicator.css("left", defaultPosition);
                });
        });

    });
}(jQuery));

