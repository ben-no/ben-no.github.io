/*jslint browser: true*/
/*global $, jQuery*/
(function ($) {
    "use strict";
    
    $(document).ready(function () {

        $(window).load(function () {

		    var foundActive = false, activeElement, indicatorPosition, indicator = $('#navbar-indicator'), defaultPosition, currentElement = $(".navbar-right > ul > li.active");
		
		    var offset = -8; // value due to padding
            
//            defaultPosition = currentElement.position().left + currentElement.width() / 2 + offset;
//            indicator.css("left", defaultPosition);
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
//                defaultPosition = currentElement.position().left + currentElement.width() / 2 + offset;
//		        indicatorPosition = activeElement.position().left + activeElement.width() / 2 + offset;
//		        indicator.css("left", indicatorPosition);
                var oldOffset = indicator.offset();
                indicator.appendTo(activeElement);
                var newOffset = indicator.offset;
                var temp = indicator.clone(true).appendTo('body');
                temp.css({
                    'position': 'absolute',
                    'left': oldOffset.left,
                    'top': oldOffset.top,
                    'z-index': 1000,
                     display: 'block'
                });
                indicator.hide();
                temp.animate({'top': newOffset.top, 'left': newOffset.left}, 'slow', function(){
                   indicator.show();
//                   temp.remove();
                });                
                
		    });
            $(".navbar-right > ul > li").mouseleave(function () {
//				check whether navindictator.hover

//                 indicator.css("left", defaultPosition);
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

