CREATE TABLE trip 
(
    trip_id	INT,
    line	INT,
    date	DATE,
    hour	TIME,

    PRIMARY KEY (trip_id),
    FOREIGN KEY (line) REFERENCES line(line_id)
);

INSERT INTO trip (trip_id, line, date, hour) VALUES ('1', '1', '2023-01-22', '22:00:00');
INSERT INTO trip (trip_id, line, date, hour) VALUES ('1', '2', '2023-01-22', '22:00:00');
