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