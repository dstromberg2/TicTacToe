(function($) {
    $.fn.slidein = function(page) {
        return this.each(function() {
            $('.intro').animate({ left: '-150%' }, 500);
            $(this).animate({ left: '0%' }, 500);
        });
    }
}) (jQuery);

(function($) {
    $.fn.slideout = function(page) {
        return this.each(function() {
            $(this).animate({ left: '150%' }, 500);
            $('.intro').animate({ left: '0%' }, 500);
        });
    }
}) (jQuery);

