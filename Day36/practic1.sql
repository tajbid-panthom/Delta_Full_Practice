create database college;
use college;
create table Teacher(
id int primary key,
name varchar(30),
subject varchar(30),
salary int default 45000
)engine="InnoDB";

insert into Teacher 
values (23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

select * from Teacher;
-- qs1
select * from Teacher
where salary>55000;

-- qs2
alter table Teacher
change column salary ctc int;

-- qs3
set sql_safe_updates = 0;
update Teacher 
set ctc = ctc + (ctc*.25);

-- qs4
alter table Teacher
add city varchar(30) default "Gurgeon";

-- qs5
alter table Teacher 
drop column ctc;

drop table Teacher;


