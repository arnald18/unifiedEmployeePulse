
-- Create Department Table

use employee_tracker;

create table department (
id INT NOT null auto_increment primary key,
name VARCHAR(255) NOT NULL
);

-- CREATE ROLE TABLE

use employee_tracker;

create table role (
id INT NOT null auto_increment primary key,
title VARCHAR(255) NOT NULL,
salary DECIMAL not null,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL
);

--  CREATE EMPLOYEE TABLE

use employee_tracker;

create table employee (
  id INT not null auto_increment primary key,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
