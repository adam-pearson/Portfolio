// Typewriter effect - https://safi.me.uk/typewriterjs/

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    cursor: "",
    delay: 50
});

typewriter.typeString('<h1>My Name is Adam Pearson</h1>')
    .pauseFor(750)
    .typeString('<h2 class="strapline">I\'m a Web Developer')
    .start();

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