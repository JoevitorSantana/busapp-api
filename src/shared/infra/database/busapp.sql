CREATE DATABASE busapp;

USE busapp;

CREATE TABLE states 
(
    state_id	    INT NOT NULL AUTO_INCREMENT,
    state_name	    VARCHAR(512),
    state_acronim	VARCHAR(512),
    PRIMARY KEY (state_id)
);

INSERT INTO states (state_name, state_acronim) VALUES ('Acre', 'AC');
INSERT INTO states (state_name, state_acronim) VALUES ('Alagoas', 'AL');
INSERT INTO states (state_name, state_acronim) VALUES ('Amapá', 'AP');
INSERT INTO states (state_name, state_acronim) VALUES ('Amazonas', 'AM');
INSERT INTO states (state_name, state_acronim) VALUES ('Bahia', 'BA');
INSERT INTO states (state_name, state_acronim) VALUES ('Ceará', 'CE');
INSERT INTO states (state_name, state_acronim) VALUES ('Distrito Federal', 'DF');
INSERT INTO states (state_name, state_acronim) VALUES ('Espírito Santo', 'ES');
INSERT INTO states (state_name, state_acronim) VALUES ('Goiás', 'GO');
INSERT INTO states (state_name, state_acronim) VALUES ('Maranhão', 'MA');
INSERT INTO states (state_name, state_acronim) VALUES ('Mato Grosso', 'MT');
INSERT INTO states (state_name, state_acronim) VALUES ('Mato Grosso do Sul', 'MS');
INSERT INTO states (state_name, state_acronim) VALUES ('Minas Gerais', 'MG');
INSERT INTO states (state_name, state_acronim) VALUES ('Pará', 'PA');
INSERT INTO states (state_name, state_acronim) VALUES ('Paraíba', 'PB');
INSERT INTO states (state_name, state_acronim) VALUES ('Paraná', 'PR');
INSERT INTO states (state_name, state_acronim) VALUES ('Pernambuco', 'PE');
INSERT INTO states (state_name, state_acronim) VALUES ('Piauí', 'PI');
INSERT INTO states (state_name, state_acronim) VALUES ('Rio de Janeiro', 'RJ');
INSERT INTO states (state_name, state_acronim) VALUES ('Rio Grande do Norte', 'RN');
INSERT INTO states (state_name, state_acronim) VALUES ('Rio Grande do Sul', 'RS');
INSERT INTO states (state_name, state_acronim) VALUES ('Rondônia', 'RO');
INSERT INTO states (state_name, state_acronim) VALUES ('Roraima', 'RR');
INSERT INTO states (state_name, state_acronim) VALUES ('Santa Catarina', 'SC');
INSERT INTO states (state_name, state_acronim) VALUES ('São Paulo', 'SP');
INSERT INTO states (state_name, state_acronim) VALUES ('Sergipe', 'SE');
INSERT INTO states (state_name, state_acronim) VALUES ('Tocantins', 'TO');

CREATE TABLE city 
(
    city_id	        INT NOT NULL AUTO_INCREMENT,
    city_name       VARCHAR(512),
    city_state      INT,
    PRIMARY KEY (city_id),
    FOREIGN KEY (city_state) REFERENCES states(state_id)
);

INSERT INTO city (city_name, city_state) VALUES ('Campo Grande', '12');
INSERT INTO city (city_name, city_state) VALUES ('Nova Alvorada do Sul', '12');
INSERT INTO city (city_name, city_state) VALUES ('Bataguassu', '12');
INSERT INTO city (city_name, city_state) VALUES ('Presidente Epitácio', '25');
INSERT INTO city (city_name, city_state) VALUES ('Presidente Venceslau', '25');
INSERT INTO city (city_name, city_state) VALUES ('Presidente Prudente', '25');
INSERT INTO city (city_name, city_state) VALUES ('Assis', '25');
INSERT INTO city (city_name, city_state) VALUES ('Ourinhos', '25');
INSERT INTO city (city_name, city_state) VALUES ('Sorocaba', '25');
INSERT INTO city (city_name, city_state) VALUES ('Campinas', '25');
INSERT INTO city (city_name, city_state) VALUES ('São Paulo', '25');
INSERT INTO city (city_name, city_state) VALUES ('Rio de Janeiro', '25');
INSERT INTO city (city_name, city_state) VALUES ('Porecatu', '16');
INSERT INTO city (city_name, city_state) VALUES ('Rolândia', '16');
INSERT INTO city (city_name, city_state) VALUES ('Londrina', '16');
INSERT INTO city (city_name, city_state) VALUES ('Ponta Grossa', '16');
INSERT INTO city (city_name, city_state) VALUES ('Curitiba', '16');

CREATE TABLE line 
(
    line_id	            INT NOT NULL AUTO_INCREMENT,
    line_description    VARCHAR(512),
    PRIMARY KEY (line_id)
);

INSERT INTO line (line_description) VALUES ('Campo Grande X Rio de Janeiro');
INSERT INTO line (line_description) VALUES ('Rio de Janeiro X Campo Grande');
INSERT INTO line (line_description) VALUES ('Campo Grande X Londrina');
INSERT INTO line (line_description) VALUES ('Londrina X Campo Grande');

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

CREATE TABLE trajectory 
(
    trajectory_id	    INT NOT NULL AUTO_INCREMENT,
    initial_line_city	INT NOT NULL,
    final_line_city	    INT NOT NULL,
    PRIMARY KEY (trajectory_id),
    FOREIGN KEY (initial_line_city) REFERENCES line_city(line_city_id),
    FOREIGN KEY (final_line_city) REFERENCES line_city(line_city_id)
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

CREATE TABLE users
(
    user_id         INT NOT NULL AUTO_INCREMENT,
    user_name       VARCHAR(250) NOT NULL,
    user_lastname   VARCHAR(250),
    user_email      VARCHAR(250),
    user_password   VARCHAR(250),
    PRIMARY KEY (user_id)
);

CREATE TABLE bus
(
    bus_id                  INT NOT NULL AUTO_INCREMENT,
    bus_model               VARCHAR(250),
    bus_plate               VARCHAR(50),
    bus_brand               VARCHAR(250),
    bus_number_of_seats     INT NOT NULL,
    bus_creation_date       DATE,
    bus_modification_date   DATE,
    PRIMARY KEY (bus_id)
);

CREATE TABLE trip
(
    trip_id                 INT NOT NULL AUTO_INCREMENT,
    trip_line               INT NOT NULL,
    trip_date               DATE,
    trip_hour               TIME,
    trip_bus                INT NOT NULL,
    trip_creation_date      DATETIME,
    trip_modification_date  DATETIME,
    PRIMARY KEY (trip_id),
    FOREIGN KEY (trip_line) REFERENCES line(line_id),
    FOREIGN KEY (trip_bus) REFERENCES bus(bus_id)
);

CREATE TABLE seats
(
	seat_id					INT NOT NULL AUTO_INCREMENT,
    seat_trajectory			INT NOT NULL,
    seat_number 			INT NOT NULL,
    seat_status 			VARCHAR(250),
    trip_id					INT,
    trip_creation_date 		DATETIME, 
    trip_modification_date 	DATETIME,
    PRIMARY KEY (seat_id),
    FOREIGN KEY (seat_trajectory) REFERENCES trajectory(trajectory_id),
    FOREIGN KEY (trip_id) REFERENCES trip(trip_id)
);

CREATE TABLE ticket
(
    ticket_id               	INT NOT NULL AUTO_INCREMENT,
    ticket_trip             	INT NOT NULL,
    ticket_ini_trajectory   	INT NOT NULL,
    ticket_fin_trajectory   	INT NOT NULL,
    ticket_seat             	INT NOT NULL,
    ticket_passenger        	INT NOT NULL,
    ticket_date_creation 		DATETIME,
    ticket_date_modification 	DATETIME,
    PRIMARY KEY (ticket_id),
    FOREIGN KEY (ticket_trip) REFERENCES trip(trip_id),
    FOREIGN KEY (ticket_ini_trajectory) REFERENCES trajectory(trajectory_id),
    FOREIGN KEY (ticket_fin_trajectory) REFERENCES trajectory(trajectory_id),
    FOREIGN KEY (ticket_seat) REFERENCES seats(seat_id),
    FOREIGN KEY (ticket_passenger) REFERENCES users(user_id)
);