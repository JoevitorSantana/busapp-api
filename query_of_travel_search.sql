SELECT t.*, c.city_name AS "Partindo de", cF.city_name AS "Destino", (
	SELECT COUNT(trajectory_seat_id) 
    FROM seats s
    INNER JOIN trajectory tr ON s.trajectory_id = tr.trajectory_id
    INNER JOIN line_city lc ON lc.line_city_id = tr.initial_line_city
    INNER JOIN city c ON lc.city = c.city_id
    WHERE c.city_id = 8
) AS "Assentos disponíveis"
FROM trip t
INNER JOIN line_city lc ON t.line = lc.line
INNER JOIN line_city lcF ON t.line = lcF.line
INNER JOIN city c ON lc.city = c.city_id
INNER JOIN city cF ON lcF.city = cF.city_id
INNER JOIN trajectory tr ON lc.line_city_id = tr.initial_line_city
INNER JOIN trajectory trF ON lcF.line_city_id = trF.final_line_city
WHERE lc.city = 8
AND lcF.city = 1;