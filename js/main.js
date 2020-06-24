/*Custom Select Box*/

$('.selected').on('click', function () {
    $('.select-box').toggleClass('box-open')
});

$('.lang-item').each((i, o)=>{
    $(o).on('click', function () {
        $('.selected-lang').html($(this).html());
        $('.select-box').removeClass('box-open')
    })
});
