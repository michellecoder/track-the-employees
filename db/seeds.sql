

USE employee_db;

INSERT INTO department (department_name)
VALUES ("accounting"),
("HR"),
("IT"),
("Billing");



INSERT INTO role (title,salary,department_id)
VALUES ("accountant",8000,1),
("hiring manager",85000,2),
("frontdesk representitive",90000,3);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Sam","Thompson",2,NULL),
("Goku","Dragonball", 3, 1);
