--Manager id has to use an emplyee id that already exsits "the first seeds for manager id needs to be NULL"

--write DEPARTMENT, ROLE, EMPLOYEE in that order

--values the right data type

INSERT INTO department (department_name)
VALUES ("accounting"),
("HR"),
("IT");

INSERT INTO role (title,salary,department_id)
VALUES ("accountant",8000,1),
("hiring manager",8500,2),
("frontdesk representitive",90000,3);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Sam","Thompson",1,NULL);