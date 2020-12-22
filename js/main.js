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

$('.faq-collapse-main').on('click', function () {
    $(this).toggleClass('faq-open');
});


$('.burger-menu-btn').on('click', function () {
    $(this).toggleClass('burger-menu-btn-close');
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


/*function initMap() {
    const myLatLng = { lat: 40.198964680048235, lng: 44.52889812443517 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map:map,
        icon: 'http://work-permit.frigatestudio.com/img/icons/marp_mark.png'
    });
}

initMap();*/


/*Mobile modal Tabs*/
/*$('.mobile_tabs').removeClass('visible_tab')
$('.mobile_tab_btn').on('click', function () {
    if ($(this).attr('tabname') === $('.mobile_tabs').attr('tabname')){
        $('.mobile_tabs').addClass('visible_tab')
    }
})*/

$('.mobile_tab_btn a').on('click', function (e) {
    e.preventDefault();
    $('.mobile_tabs').hide();
    $("#" + $(this).attr('href')).show();
});
