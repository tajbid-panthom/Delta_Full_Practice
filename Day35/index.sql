create database college;
use college;

create table student(
	rollNo int,
    name varchar(30),
    age int
)ENGINE="InnoDB";

insert into student values(101,"Adam",20),(102,"Dam",21);

select * from student;

create database if not exists school;

show databases;
show tables;