-- Database name
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- Tables

CREATE TABLE department(
  id_department INT PRIMARY KEY  AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id_role INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department (id_department) ON DELETE CASCADE
);

CREATE TABLE employee(
id_employee INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES role(id_role) ON DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee(id_employee) ON DELETE SET NULL
);