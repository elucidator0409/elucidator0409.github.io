(function($) {
/* slick slider
    * ------------------------------------------------------ */
var clSlickSlider = function() {

    $('.clients').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        //autoplay: true,
        pauseOnFocus: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.testimonials').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnFocus: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

};

/* Initialize
    * ------------------------------------------------------ */
(function ssInit() {
        
   
    clSlickSlider();
    

})();

})(jQuery);

