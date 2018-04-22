CREATE TABLE Region (
id INTEGER PRIMARY KEY,
name_of_region VARCHAR(100)
);


CREATE TABLE Country (
id INTEGER PRIMARY KEY,
name_of_country VARCHAR(100),
region_id INTEGER
);


CREATE TABLE Location (
id INTEGER PRIMARY KEY,
street_address VARCHAR(100),
postal_code VARCHAR(100) ,
city VARCHAR(100),
state VARCHAR(100),
country_id INTEGER
);


CREATE TABLE Job (
id INTEGER PRIMARY KEY,
title VARCHAR(100),
min_salary FLOAT4,
max_salary FLOAT4,
);

CREATE TABLE Job_Grade (
id INTEGER PRIMARY KEY,
level_of_job VARCHAR(100),
lowest_salary INTEGER,
highest_salary INTEGER
);

CREATE TABLE Job_History (
id INTEGER PRIMARY KEY,
employee_id INTEGER,
start_date DATE,
end_date DATE,
job_id INTEGER,
department_id INTEGER
);

CREATE TABLE Department (
id INTEGER PRIMARY KEY,
name_of_department VARCHAR(100),
manager_id INTEGER,
location_id INTEGER
);


CREATE TABLE Employee (
id INTEGER PRIMARY KEY,
first_name VARCHAR(100),
last_name VARCHAR(100),
email VARCHAR(100),
phone_number VARCHAR(100),
hire_date DATE,
job_id INTEGER,
salary FLOAT4,
manager_id INTEGER,
department_id INTEGER
);

--EXERCICE
--Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000;
select first_name,last_name,salary
from employee e
where e.salary < 6000;
--Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.;
select first_name,last_name,department_id,salary
from employee e
where e.salary > 8000;
--Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen".;
select first_name,last_name,department_id
from employee e
where e.last_name = 'McEwen';
--Write a query in SQL to display all the information for all employees without any department number.;
select *
from employee e
where e.department_id is null;
--Write a query in SQL to display all the information about the department Marketing.;
select *
from department d
where d.name_of_department = 'Marketing';
--Write a query in SQL to display the full name (first and last), hire date, salary, and department number for those employees whose first name does not containing the letter M and make the result set in ascending order by department number.;
select first_name,last_name,hire_date,salary,department_id
from employee e
where e.first_name not like '%M%'
and e.first_name not like '%m%'
order by department_id asc;
--Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000 and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987.;
select *
from employee e
where e.salary between 8000 and 12000
and e.department_id not in (4,12,7)
and e.hire_date < '1987-06-05';
--Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn any commission.;
select first_name,last_name,salary
from employee;
--Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen, and salary, for those employees whose salary is within the range of 9000 and 17000. The column headings assign with Full_Name, Contact_Details and Remuneration respectively.;
select concat (first_name,' ',last_name) as full_name,
concat (phone_number,' ',email)as contact_details,
salary from employee;
--Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending with the letter m.;
select first_name,last_name,salary
from employee e
where e.first_name like '%m';


--Write a query in SQL to display the full name (first and last) name, and salary, for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name.

select first_name,last_name,salary
from employee e
where e.salary < '7000' or
e.salary > '15000'
order by e.last_name asc;

--Write a query in SQL to display the full name (first and last), job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009.

select first_name, last_name, job_id,hire_date
from employee e
where e.hire_date between '2007-11-05' and '2009-07-05';

--Write a query in SQL to display the the full name (first and last name), and department number for those employees who works either in department 7 or 9.
select first_name,last_name,department_id
from employee e
where e.department_id = 7 or e.department_id=9;


--Write a query in SQL to display the full name (first and last name), salary, and manager number for those employees who is working under a manager.
select first_name,last_name,salary,manager_id
from employee e
where e.manager_id is not null;


--Write a query in SQL to display all the information from Employees table for those employees who was hired before June 21st, 2002.
select *
from employee e
where e.hire_date < '2002-06-21';


--Write a query in SQL to display the first and last name, email, salary and manager ID, for those employees whose managers are hold the ID 21, 4 or 46.
select first_name,last_name,email,salary,manager_id
from employee e
where e.manager_id in ('21','4','46');


--Write a query in SQL to display all the information for all employees who have the letters D, S, or N in their first name and also arrange the result in descending order by salary.
select *
from employee e
where e.first_name like '%D%'
or e.first_name like '%S%'
or e.first_name like '%N%'
order by e.salary desc;

--Write a query in SQL to display the full name (first name and last name), hire date, commission percentage, email and telephone separated by '-', and salary for those employees who earn the salary above 11000 or the seventh digit in their phone number equals 3 and make the result set in a descending order by the first name.

select concat(first_name,' ',last_name) as full_name,
hire_date,
concat (email,'-',phone_number) as contact_details,
salary
from employee e
where salary > 11000
or e.phone_number like '___.___.3___'
or e.phone_number like '___.__._3__.______'
order by first_name desc;


--Write a query in SQL to display the first and last name, and department number for those employees who holds a letter s as a 3rd character in their first name.
select first_name,last_name,department_id
from employee e
where e.first_name like '__s%';


--Write a query in SQL to display the employee ID, first name, job id, and department number for those employees who is working except the departments 5, 3 and 8.
select id, first_name,job_id,department_id
from employee e
where department_id not in ('5','3','8');

--Write a query in SQL to display the first name, last name, department number, and department name for each employee.

select first_name,last_name,department_id,name_of_department
from employee e
inner join department d
on e.department_id = d.id;

--Write a query in SQL to display the first and last name and salary for those employees who earn less than the employee earn whose number is 83.


select first_name,last_name,salary
from employee
where salary < (select salary from employee where id = 83);

--Write a query in SQL to display the first name of all employees including the first name of their manager.

select emp.first_name as employees,
distinct man.first_name as boss
from employee emp
inner join employee man
on emp.manager_id = man.id
order by man.first_name asc;

-- Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.

select dep.name_of_department,
concat(emp.first_name,' ',emp.last_name) as full_name,
loc.city
from department dep
inner join employee emp on dep.manager_id = emp.id
inner join location loc on dep.location_id = loc.id;
