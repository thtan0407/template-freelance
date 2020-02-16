$(document).ready(function () {
    $(document).on('click', '.left-wrapper > ul > li > a', function () {
        $(this).parents().find('ul.show-menu').removeClass('show-menu');
        $(this).next('ul').addClass('show-menu');
    })

    $(document).on("mouseup touchstart", function (e) {
        var o = $("ul.show-menu");
        o.is(e.target) || 0 !== o.has(e.target).length || ($("ul.show-menu").removeClass("show-menu"))
    });

    $(document).on('click', '.collapse-navbar a', function () {
        $(this).parents('.home-wrapper').toggleClass('js-collapse');
    })

    /*
        Design by K.Bee
        Facebook: https://www.facebook.com/thtan0407
    */

    $('.member-usecase ul li ul li ul').prev('.usecase-item').removeClass('usercase-before');
    $('.member-usecase ul li ul ul').hide();

    $(document).on('click', '.member-usecase ul li ul li .usecase-item .member-append a .fa-plus', function () {
        $(this).parent().parent().parent().parent().parent().find('ul.show-usecase').removeClass('show-usecase');
        $(this).parent().parent().parent().parent().parent().find('.usecase-item').removeClass('usercase-before');
        $(this).parent().parent().parent().parent().parent().find('.usecase-item .member-append a .fa-minus').parent().html('<i class="fal fa-plus"></i>');

        $(this).parents('.usecase-item').next('ul').addClass('show-usecase');
        $(this).parents('.usecase-item').addClass('usercase-before');
        $(this).parent().html('<i class="fal fa-minus"></i>');
    })

    $(document).on('click', '.member-usecase ul li ul li .usecase-item .member-append a .fa-minus', function () {
        $(this).parents('.usecase-item').next('ul').hide();
        $(this).parents('.usecase-item').removeClass('usercase-before');
        $(this).parent().html('<i class="fal fa-plus"></i>');
    })

})

function clipBoard() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}