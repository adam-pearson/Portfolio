// Typewriter effect - https://safi.me.uk/typewriterjs/

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    cursor: ""
});

typewriter.typeString('<h1>My Name is Adam Pearson</h1>')
    .pauseFor(1250)
    .typeString('<h2 class="strapline">I\'m a Web Developer')
    .start();