<?php include "dist/inc/head.php" ?>

<?php include "dist/inc/menu.php" ?>

<!-- BEGIN BODY -->

<div class="whole-page container">
        <div class="page-background">
            <!-- Header -->
            <div id="top" class="header container">
                <div class="header-inner">
                    <div class="logo-container">
                        <a href="index.html">
                            <img class="main-logo" src="dist/assets/img/optimised_logo.svg" alt="Adam Pearson monogram logo">
                        </a>
                    </div>
                    <div class="header-buttons">
                        <div>
                            <a href="index.html#contact">
                                <div class="btn contact">
                                    <span>Contact</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <button id="burger" type="button" class="btn burger">
                                <span class="burger-inner">
                                    <span class="burger-lines"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- code -->
            <div class="code container">
                <div class="code-inner inner">
                    <div class="code-block">
                        <h1>Coding Examples</h1>
                        <h2>Auto-Resizing Submenu Background</h2>
                        <p>The following JavaScript & jQuery code allowed me to set a full-width
                            background on a submenu which was inside a smaller container div, by adjusting
                            the left offset and width based on page width (with and without a scrollbar)
                            and the distance of the object to the left side of the page.
                        <pre><code id="code-1" class="language-js">var scrollContainer = document.getElementById('scroll-container');
var subBg = document.getElementsByClassName('sub-bg');
var mainMenu = document.getElementsByClassName('main-menu');

function GetElementDistance(obj) {
var leftLen = obj.getBoundingClientRect().left; 
var rightLen = obj.getBoundingClientRect().right; 
return [leftLen, rightLen];
}

Array.from(mainMenu).forEach(function(mainMenu, index) {
mainMenu.addEventListener('mouseenter', function() {
    var leftDistance = "-" + GetElementDistance(subBg[index])[0] + "px";
    if (Modernizr.hiddenscroll === true) {
        $('.sub-bg').css({
        "width": scrollContainer.offsetWidth,
        "left": leftDistance
        });
    } else {
        $('.sub-bg').css({
        "width": scrollContainer.clientWidth,
        "left": leftDistance
        });
    }
});

mainMenu.addEventListener('mouseleave', function() {
    $('.sub-bg').css({
    "left": "0px"
    });
});
});
                        </code></pre>
                        <h2>SQL Movie Database Query</h2>
                        <p>
                            This SQL query is designed to return all movies, alongside their director and rating,
                            where the movie has a higher rating than another movie (in this case, American Beauty),
                            and where the movie was released after another movie (in this case, Lawrence of Arabia).
                        </p>
                        <pre><code id="code-1" class="language-sql">SELECT DISTINCT mv.mov_title AS "Movie Title",
    dr.dir_fname || ' ' || dr.dir_lname AS "Director",
    rt.rev_stars AS "Rating"
FROM movie AS mv

JOIN movie_cast AS mv_cst ON mv_cst.mov_id = mv.mov_id
JOIN rating AS rt ON rt.mov_id = mv.mov_id
JOIN movie_direction AS mv_dr ON mv_dr.mov_id = mv.mov_id
JOIN director AS dr ON dr.dir_id = mv_dr.dir_id

WHERE rt.rev_stars > (
    SELECT rating.rev_stars
    FROM rating
    JOIN movie ON movie.mov_id = rating.mov_id
    WHERE movie.mov_title = 'American Beauty'
) 
AND mv.mov_year > (
    SELECT mov_year
    FROM movie
    WHERE movie.mov_title = 'Lawrence of Arabia'
)

ORDER BY mv.mov_title ASC;
                        </code></pre>
                        <p>This code returns the following data from the database:</p>
                        <table id="sql-table" class="display">
                            <thead>
                            <tr>
                                <th>Movie Title</th>
                                <th>Director</th>
                                <th>Rating</th>
                            </tr>	</thead>	<tbody>	<tr>
                                <td>Aliens</td>
                                <td>James Cameron</td>
                                <td>8.40</td>
                            </tr>
                            <tr>
                                <td>Annie Hall</td>
                                <td>Woody Allen	</td>
                                <td>8.10</td>
                            </tr>
                            <tr>
                                <td>Blade Runner</td>
                                <td>Ridley Scott</td>
                                <td>8.20</td>
                            </tr>
                            <tr>
                                <td>Donnie Darko</td>
                                <td>Richard Kelly</td>
                                <td>8.10</td>
                            </tr>
                            <tr>
                                <td>Princess Mononoke</td>
                                <td>Hayao Miyazaki</td>
                                <td>8.40</td>
                            </tr>
                            <tr>
                                <td>Slumdog Millionaire</td>
                                <td>Danny Boyle</td>
                                <td>8.00</td>
                            </tr>
                            <tr>
                                <td>The Usual Suspects</td>
                                <td>Bryan Singer</td>
                                <td>8.60</td>
                            </tr>
                            <tr>
                                <td>Titanic</td>
                                <td>James Cameron</td>
                                <td>7.70</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

<!-- END BODY -->

<?php include "dist/inc/scripts.php";