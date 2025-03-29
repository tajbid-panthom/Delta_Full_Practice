-- General Order

select column(s),
from table_name
where condition
group by column(s)
having condition
order by column(s) asc;

-- for removeing safe_mode
set sql_safe_updates = 0;
-- for enabling safe_mode
set sql_safe_updates = 1;


--update
update table_name
set col1 = value1,
    col2 = value2
where condition;

--delete
delete from table_name
where condition;

--insert
insert into table_name (col1, col2, col3)
values (value1, value2, value3);


--add column
alter table table_name
add column_name datatype constraint;

--drop column
alter table table_name
drop column column_name;

--modify column
alter table table_name
modify column_name datatype constraint;

--rename column
alter table table_name
change column old_column_name new_column_name  datatype constraint;

--rename table
alter table old_table_name
rename to new_table_name;

--create table
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);

--create table with primary key
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    primary key (column1, column2)
);

--create table with foreign key
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    foreign key (column1) references parent_table (parent_column)
);

--create table with unique key
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    unique (column1, column2)
);

--create table with check constraint
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    check (condition)
);

--create table with default value
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    default value
);

--create table with auto increment
create table table_name (
    column1 datatype constraint auto_increment,
    column2 datatype constraint,
    ...
);

--create table with timestamp
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    timestamp default current_timestamp
);

--create table with date
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    date default current_date
);

--create table with time
create table table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
    time default current_time
);

