// Side bar

var burger = $('#burger');
var sidemenu = $('#sidebar');
var close = $('.close');
var overlay = $('.overlay');


burger.on('click', function() {
    sidemenu.animate({'left': 0}, 300);
    sidemenu.addClass('shown');
    overlay.animate({'opacity': 1}, 150);
    overlay.addClass('shown');
    $('body').addClass('fixed-position');
});

close.on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});

overlay.on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});

$(window).resize(function() {
    if ($(window).width() >= 768) {
        sidemenu.removeClass('shown');
        overlay.removeClass('shown');
        $('body').removeClass('fixed-position');
        $('.btn.burger').blur();
    }
});

$('a[href*="#projects"]').on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});

$('.nav a[href*="#contact"]').on('click', function() {
    sidemenu.removeClass('shown');
    overlay.removeClass('shown');
    $('body').removeClass('fixed-position');
});
