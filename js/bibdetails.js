/*jslint browser: true*/
/*global $, jQuery*/

(function ($) {
    "use strict";
    $(document).ready(function () {
//        $(".bibentry-details").css("display", "block");
        // das hier muss noch geaendert werden

//        if (window.location.hash !== "") {
//            $("a[name^=" + window.location.hash.replace("#", "") + "]").parent().find('.bibentry-details').css('display', 'block');
//        }

        $(".bibentry").on('click', 'ul li.bibmore', function (event) {
            var element = $(this).parent().parent().find('.bibentry-details');
            if (element.css('display') === 'none') {
                element.slideDown('fast');
            } else {
                element.slideUp('fast');
            }
            $(this).children("span").toggleClass("arrowdown arrowup");
        });


							
        $(".purebibtexentry").on('click', '.select_all', function (event) {
            var range = document.createRange(), textElement, sel;
            range.selectNode(event.target);
            window.getSelection().addRange(range);
            if (document.selection) {
                range = document.body.createTextRange();
                textElement = $(event.target).parent().find('.purebibtex').get(0);
                range.moveToElementText(textElement);
                range.select();

            } else if (window.getSelection) {
                sel = window.getSelection();
                sel.removeAllRanges();
                range = document.createRange();
                textElement = $(event.target).parent().find('.purebibtex').get(0);
                range.selectNode(textElement);
                sel.addRange(range);
            }
        });
        
    });
}(jQuery));
