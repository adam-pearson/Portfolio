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
    sidemenu.show();
    sidemenu.animate({'left': 0}, 300);
    sidemenu.addClass('shown');
    overlay.show();
    overlay.animate({'opacity': 1}, 150);
    overlay.addClass('shown');
});

close.on('click', function() {
    sidemenu.hide();
    sidemenu.removeClass('shown');
    overlay.hide();
    overlay.removeClass('shown');
});

overlay.on('click', function() {
    sidemenu.hide();
    sidemenu.removeClass('shown');
    overlay.hide();
    overlay.removeClass('shown');
});

$(window).resize(function() {
    if ($(window).width() >= 768) {
        sidemenu.removeClass('shown');
        overlay.hide();
        overlay.removeClass('shown');
    }
});