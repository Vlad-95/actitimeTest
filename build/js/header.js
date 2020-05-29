$(document).ready(function() {

    if (window.innerWidth <= 992) {
        //клик по бургеру
        $('.header__burger').click(function() {
            $('.header__menu').fadeToggle();
            $(this).toggleClass('active');
        });

        // открытие подменю
        $('.header__menu__list-item--dropdown').click(function() {
            $(this).find('.header__menu__dropdown-list').slideToggle();
            $(this).toggleClass('open');
        })
    };
    
})