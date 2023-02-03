CREATE TABLE trajectory 
(
    trajectory_id	    INT NOT NULL AUTO_INCREMENT,
    initial_line_city	INT NOT NULL,
    final_line_city	    INT NOT NULL,
    PRIMARY KEY (trjectory_id),
    FOREIGN KEY (initial_line_city) REFERENCES line_city(line_city_id);
    FOREIGN KEY (final_line_city) REFERENCES line_city(line_city_id);
);

INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('1', '2');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('2', '3');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('3', '4');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('4', '5');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('5', '6');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('6', '7');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('7', '8');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('8', '9');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('9', '10');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('10', '11');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('11', '12');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('13', '14');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('15', '16');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('17', '18');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('19', '20');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('21', '22');
INSERT INTO trajectory (initial_line_city, final_line_city) VALUES ('23', '24');
