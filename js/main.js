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

function initMap() {
    const myLatLng = { lat: 40.198964680048235, lng: 44.52889812443517 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map:map,
        icon: 'http://localhost:63342/work_permit/img/icons/marp_mark.png'
    });
}

initMap();


$('.reg_options_close_btn').on('click', function () {
    $(this).parent('.reg_options').remove();
});

$('.profile_photo_delete_btn').on('click', function () {
    $(this).parent('.profile-photo').remove();
});