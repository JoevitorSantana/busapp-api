CREATE TABLE city 
(
    city_id	INT     NOT NULL AUTO_INCREMENT,
    city_name       VARCHAR(512),
    city_state      INT,
    PRIMARY KEY (city_id),
    FOREIGN KEY (city_state) REFERENCES state(state_id)
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
