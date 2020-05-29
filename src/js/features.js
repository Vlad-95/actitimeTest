$(document).ready(function () {
    $('.features__slider').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    
    $('.features__slider-item-text').matchHeight();
});