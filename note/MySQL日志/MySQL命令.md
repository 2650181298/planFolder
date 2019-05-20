

 ## 关于数据库 

> show databases;--------查询数据库 
drop database 数据库名----------删除数据库 
show create database 数据库名称;-----------查看 某个已创建好的数据库 
use 数据库名字；-------选中数据库 
create database xiaoxu charset utf8;---------- 创建一个名称为xiaoxu的数据库utf8可让数据显示中文 


 ## 关于表与表值 

> select * from 表名字；--------查询表值 
select * from 表名字 where id=1;--------查询第一条表值 
show tables;--------查看数据库中所有的数据表 
drop table 表名-------删除表 
rename table 旧名字 to 新名字--------给表改名 
truncate 表名字---------删除表数据 
SELECT 列名1，列表2...FROM 表名;-------查询指定数据 
SELECT * FROM 表名 WHERR 列名 LIKE '____S';----------查询有五个字母且结尾为S的换为%李%则查询包含李的 
  
 
### 在表中添加新的行 

> insert into 表名 
(相关列的名) 
values 
(相对应列的值); 

### 创建表  

> create table 表名( 
字段名称 字段类型 [字段属性] [索引], 
字段名称 字段类型 [字段属性] [索引] 
);表引擎 字符集 

### 修改表 

> alter tabel 表名 add 添加的列名 数据类型; ---添加列名 

> alter table 表名 modify 修改的列明 修改后的类型; ---更改数据类型 
 
> rename table 表名 to 新表名; ---更改表名 

> ALTER TABLE 表名 CHANGE 列名 新列名 数据类型; ---修改列名 

> OPDATE 表名 SET 列名 ='' WHERE 列名='要修改的行名';-------修改单行单数据 

> OPDATE 表名 SET 列名 ='';-------修改一列所有数据
#### 示例 

> CREATE TABLE MyGuests ( 
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(30) NOT NULL, 
    lastname VARCHAR(30) NOT NULL, 
    email VARCHAR(50), 
    reg_date TIMESTAMP 
); 

> NOT NULL - 每一行都必须含有值（不能为空），null 值是不允许的。 
DEFAULT value - 设置默认值 
UNSIGNED - 使用无符号数值类型，0 及正数 
AUTO_INCREMENT - 设置 MySQL 字段的值在新增记录时每次自动增长 1 
PRIMARY KEY - 设置数据表中每条记录的唯一标识。 通常列的 PRIMARY KEY 设置为 ID 数值，与AUTO_INCREMENT 一起使用。 
每个表都应该有一个主键(本列为 "id" 列)，主键必须包含唯一的值。 

PRIMARY KEY------主键

CONSTRAINT C_P_FK FOREIGN KEY(外键名) REFERENCES 表名(主键名)-----添加约束