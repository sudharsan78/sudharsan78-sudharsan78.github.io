(function($){
    $(document).ready(function(){

        $('.slider').slider({
            indicators: false,
            height: 500,
        });

        $('.scrollspy').scrollSpy({
            scrollOffset: 50
        });

        $('nav ul li').click(function() {
            $('nav ul li').removeClass('trans-pink');
            $(this).addClass('trans-pink');   
        });

        $('#testimonail-slider').slider({
            height: 300,
        })

    }); // end of document ready
})(jQuery); // end of jQuery name space