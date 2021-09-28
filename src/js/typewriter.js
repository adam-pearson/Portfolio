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