SELECT DISTINCT mv.mov_title AS "Movie Title",
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