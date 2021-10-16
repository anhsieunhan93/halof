;(function($){
    "use strict"

    function showSearchBox() {
        $('.block-search a').on('click', function(e) {            
            e.preventDefault();
            $('.block-default-search').addClass('active');
        });

        $('.block-default-search .close').on('click', function() {
            $('.block-default-search').removeClass('active');
        });
    }

    // DOM Read
    $(function() {
        showSearchBox();
    });

})(jQuery);