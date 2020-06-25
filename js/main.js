/*Custom Select Box*/

$('.selected').on('click', function () {
    $('.select-box').toggleClass('box-open')
});

$('.lang-item a').each((i, o)=>{
    $(o).on('click', function () {
        $('.selected-lang').html($(this).parent().html());
        $('.select-box').removeClass('box-open')
    })
});

//Collapse FAQ

$('.faq-col-title').on('click', function () {
    $(this).toggleClass('faq-col-title-open');
    $(this).find('.faq-icon').toggleClass('faq-open');
    $(this).parent().find('.faq-col-body').toggleClass('faq-col-body-open')
})
