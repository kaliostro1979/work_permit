/*Custom Select Box*/

$('.selected').on('click', function () {
    $('.select-box').toggleClass('box-open')
});

$('.lang-item a').each((i, o) => {
    $(o).on('click', function () {
        $('.selected-lang').html($(this).parent().html());
        $('.select-box').removeClass('box-open')
    })
});


/*Parallax*/

$('.parallax-window').parallax();

//Collapse FAQ

$('.faq-col-title').on('click', function () {
    $(this).toggleClass('faq-col-title-open');
    $(this).find('.faq-icon').toggleClass('faq-open');
    $(this).parent().find('.faq-col-body').toggleClass('faq-col-body-open')
})


$('.burger-menu-btn').on('click', function () {
    $(this).toggleClass('burger-menu-btn-close')
    $('.burger-menu').toggleClass('burger-menu-show')
});


/*Sidebar*/

$('.sidebar-item a').on('click', function (e) {
    if ($(this).parent('.sidebar-item').children('.sidebar-item-inner').length > 0){
        e.preventDefault();
        $(this).parent('li').toggleClass('sidebar-item-show')
    }
});


/*Google Map*/


$('.reg_options_close_btn').on('click', function () {
    $(this).parent('.reg_options').remove();
});

$('.profile_photo_delete_btn').on('click', function () {
    $(this).parent('.profile-photo').remove();
});


$(".review-slider").owlCarousel({
    items: 1,
    dots: true
});

$(".pb-slider").owlCarousel({
    items: 6,
    dots: false,
    margin: 30,
    responsive: {
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
});