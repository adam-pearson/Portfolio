SELECT mv.mov_title AS "Movie Title",
       act.act_fname || ' ' || act.act_lname AS "Actor Name"
 
FROM movie AS mv

JOIN movie_cast AS mv_cst ON mv_cst.mov_id = mv.mov_id
JOIN actor AS act ON act.act_id = mv_cst.act_id
JOIN rating AS rt ON rt.mov_id = mv.mov_id

WHERE AVG(rt.rev_stars) > (
    SELECT AVG(rating.rev_stars)
    FROM rating
    JOIN movie ON movie.mov_id = rating.mov_id
    GROUP BY movie.mov_id
    HAVING movie.mov_title = 'American Beauty'
) 

ORDER BY mv.mov_title ASC;
