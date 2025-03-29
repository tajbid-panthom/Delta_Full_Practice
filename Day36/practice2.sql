create table student(
roll_no int primary key,
name varchar(30) not null,
city varchar(30),
marks int
)engine="InnoDB";

insert into student 
values(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(124,"casey","Pune",94),
(112,"duke","Pune",80);

select * from student;

-- qs1
select * from student where marks>75;

-- qs2
select city from student
group by city;

select distinct city from student;

-- qs3
select max(marks), city from student
group by city;

-- qs4
select avg(marks) from student;

-- qs5
alter table student
add column grade varchar(2);

update student
set grade="O"
where marks>=80;

update student
set grade="A"
where marks>=70 and marks<=80;

update student
set grade="B"
where marks>=60 and marks<=70;