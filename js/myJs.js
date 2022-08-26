$(document).ready(function(e) {
    new WOW().init();




    $(window).scroll(function() {
        var winWidth = $(window).width(),
            topWindow = $(window).scrollTop();
        if (topWindow > 0 && winWidth > 787) {
            $('header').addClass("small animated fadeInDown");
        } else {
            $('header').removeClass("small animated fadeInDown ");
        }
    });
    $(window).scroll(function() {
        var winWidth = $(window).width(),
            topWindow = $(window).scrollTop();
        if (topWindow = 0 && topWindow > 0 && winWidth < 787) {
            $('header').addClass("small animated fadeInDown");
        }
    });
    $("#mobile_menu_labIcon").click(function() {

        $(".portfolio-filter").toggleClass("on");
        $('.hamburger').toggleClass('is-active');
        $('#greybg ').toggleClass('on');
        $("body").toggleClass("no-scroll");
        if ($("#greybg").hasClass("on")) {
            $("body").addClass("no-scroll");
        }

    });

    $("#greybg").click(function() {
        $('#greybg,.portfolio-filter ').removeClass('on');
        $("body").removeClass("no-scroll");
        $('.hamburger').removeClass('is-active');

    });

});