-- Create the database employee_tracker
CREATE DATABASE employee_tracker;
USE employee_tracker;
-- Create the table actors.
CREATE TABLE employee (
  id int AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int(30) NOT NULL,
  manager_id int(30) NOT NULL,
  PRIMARY KEY(id)
);