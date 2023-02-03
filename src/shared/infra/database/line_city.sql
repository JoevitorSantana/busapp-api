CREATE TABLE line_city 
(
    line_city_id	INT NOT NULL AUTO_INCREMENT,
    line            INT NOT NULL,
    city	        INT NOT NULL,
    line_ordenation	INT NOT NULL,
    PRIMARY KEY (line_city_id),
    FOREIGN KEY (line) REFERENCES line(line_id),
    FOREIGN KEY (city) REFERENCES city(city_id)
);

INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '1', '1');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '2', '2');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '3', '3');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '4', '4');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '5', '5');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '6', '6');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '7', '7');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '8', '8');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '9', '9');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '10', '10');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '11', '11');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('1', '12', '12');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '12', '1');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '11', '2');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '10', '3');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '9', '4');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '8', '5');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '7', '6');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '6', '7');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '5', '8');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '4', '9');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '3', '10');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '2', '11');
INSERT INTO line_city (line, city, line_ordenation) VALUES ('2', '1', '12');
