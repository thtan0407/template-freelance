$(document).ready(function () {
    $(document).on('click', '.left-wrapper > ul > li', function () {
        $(this).parents().find('ul.show-menu').removeClass('show-menu');
        $(this).find('ul').toggleClass('show-menu');
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
        $(this).parents('.usecase-item').next('ul').removeClass('show-usecase');
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


var windowWidth = $(window).width();
$(document).ready(function () {
    $(".humburger").on("click", function () {
        windowWidth < 992 && (
            $(".humburger").toggleClass("active_humburger"),
            $('.left-wrapper').toggleClass('overlay'),
            $('.left-wrapper > ul').toggleClass('menu_mobile')
        )
    })

    $(document).on("mouseup touchstart", function (e) {
        var o = $(".left-wrapper ul");
        o.is(e.target) || 0 !== o.has(e.target).length || ($(".left-wrapper ul").removeClass("menu_mobile"),
            $(".humburger").removeClass("active_humburger"),
            $(".left-wrapper").removeClass("overlay"))
    });
});

$(document).on('click', '.main-transaction .btn-submit', function () {
    var data = $(this).parents().find('#amountusd').val();
    if (data == '') {
        $(this).parents().find('.error-data').show();
    } else {
        $(this).parents().find('.error-data').hide();
        $(this).parents().find('.form-item').removeClass('hidden-form');
        $(this).parents().find('.transaction-icon').addClass('hidden-form');
    }
})