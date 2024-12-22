(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(e,t,a){"use strict";a.r(t);var n=a(33),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[e._v("#")]),e._v(" 基础知识")]),e._v(" "),a("h2",{attrs:{id:"统一字符编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一字符编码"}},[e._v("#")]),e._v(" 统一字符编码")]),e._v(" "),a("ul",[a("li",[e._v(">  表示 MySQL端终输入")])]),e._v(" "),a("h4",{attrs:{id:"_1-查看编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看编码"}},[e._v("#")]),e._v(" 1 查看编码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mysql> \\s\n")])])]),a("p",[e._v("其中 带 characterset 字段的 就是和编码有关的, 统一设置为 utf8 防止出现乱码")]),e._v(" "),a("h4",{attrs:{id:"_2-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置"}},[e._v("#")]),e._v(" 2 设置")]),e._v(" "),a("p",[e._v("在配置文件配置,  在安装根目录下 创建 my.ini  并写好配置,  多少项目根据需要自己配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[mysql]                 // mysql 客户端 专用的配置\ndefault-character-set=utf8\n\n[mysqld]                    // 以下 针对 mysql 服务端进行配置\nport=3306\nbasedir=D:/program/phpstudy_pro/Extensions/MySQL5.7.26/\ndatadir=D:/program/phpstudy_pro/Extensions/MySQL5.7.26/data/\ncharacter-set-server=utf8\ndefault-storage-engine=MyIsam\nmax_connections=100\ncollation-server=utf8_unicode_ci\ninit_connect='SET NAMES utf8'\ninnodb_buffer_pool_size=64M\ninnodb_flush_log_at_trx_commit=1\ninnodb_lock_wait_timeout=120\ninnodb_log_buffer_size=4M\ninnodb_log_file_size=256M\ninteractive_timeout=120\njoin_buffer_size=2M\nkey_buffer_size=32M\nlog_error_verbosity=1\nmax_allowed_packet=16M\nmax_heap_table_size=64M\nmyisam_max_sort_file_size=64G\nmyisam_sort_buffer_size=32M\nread_buffer_size=512kb\nread_rnd_buffer_size=4M\nserver_id=1\nskip-external-locking=on\nsort_buffer_size=256kb\ntable_open_cache=256\nthread_cache_size=16\ntmp_table_size=64M\nwait_timeout=120\n\n[client]              // 只要是客户端都用这个配置, 如java  php  python\nport=3306\ndefault-character-set=utf8\n")])])]),a("h2",{attrs:{id:"初识-sql-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初识-sql-语句"}},[e._v("#")]),e._v(" 初识 SQL 语句")]),e._v(" "),a("p",[e._v("SQL语言分为3种类型")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("DDL语句: 数据库定义语言:　数据库, 表, 视图, 索引, 存储过程，　如：creat drop alter")])]),e._v(" "),a("li",[a("p",[e._v("DML语句: 数据库操作语言: 插入数据insert, 删除数据delete, 更新数据update, 查询数据select")])]),e._v(" "),a("li",[a("p",[e._v("DCL语句: 数据库控制语言: 例如控制用户的访问权限grant, revoke")])])]),e._v(" "),a("h4",{attrs:{id:"操作文件夹-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作文件夹-库"}},[e._v("#")]),e._v(" 操作文件夹(库)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 增\n> create database db1 charset utf8;\n\n// 查\n> show create database db1;               // 查看单个数据库 详情\n> show databases;                          // 查看所有数据\n\n// 改\n> alter database db1 charset gbk;          \n\n// 删\n> drop database db1;\n")])])]),a("h4",{attrs:{id:"操作文件-表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作文件-表"}},[e._v("#")]),e._v(" 操作文件(表)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//切换文件夹\n>　use db1;\n\n//查看当前所在文件夹\n> select database()\n\n// 增\n> create table t1(id int, name char);\n\n// 查\n> show create table t1;\n> show tables;\n> desc t1;\n\n// 改\n> alter table t1 modify name char(6);   //改name 字段\n> alter table t1 change name NAME char(7);  // 改字段name  为NAME\n\n// 删\n> drop table t1;\n")])])]),a("h4",{attrs:{id:"操作文件内容-记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作文件内容-记录"}},[e._v("#")]),e._v(" 操作文件内容(记录)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 增\n> insert t1(id, name) values (1, 'yycu01'), (2, 'yycu02'), (3, 'yycu03');\n> insert t1 values (1, 'yycu01'), (2, 'yycu02'), (3, 'yycu03'); // 不指定字段顺序,则安字段在表中的顺序\n// 查\n> select id, name from db1.t1;\n> select id, name from t1;    //  不加库名, 默认是在当前库下的t1表\n> select * from t1;   // * 表示所有字段\n\n// 改\n> update db1.t1 set name=\"yycu\";  // 没有指定where 条件则会,全改了\n> update db1.t1 set name=\"yycu\" where id=2;\n\n// 删\n> delete from t1;  // 全删除了\n> delete from t1 where id = 1; //删除指定的\n\n")])])]),a("h2",{attrs:{id:"库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#库操作"}},[e._v("#")]),e._v(" 库操作")]),e._v(" "),a("h4",{attrs:{id:"自带的库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自带的库"}},[e._v("#")]),e._v(" 自带的库")]),e._v(" "),a("ul",[a("li",[e._v("information_schema: 虚拟库, 不点磁盘空间, 存储的是数据库启动后的一些参数,如用户表信息,列信息,权限信息,字符信息等.")]),e._v(" "),a("li",[e._v("performance_schema: mysql5.5 开始新增的一个数据库, 主要用于收集数据库服务器性能参数,记录处理查询请求时发生的各种事件,锁等现象.")]),e._v(" "),a("li",[e._v("mysql: 授权库,主要存储系统用户的权限信息")]),e._v(" "),a("li",[e._v("test: mysql 数据库系统自动创建的测试数据库")])]),e._v(" "),a("h4",{attrs:{id:"创建数据库存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库存"}},[e._v("#")]),e._v(" 创建数据库存")]),e._v(" "),a("p",[a("strong",[e._v("查看帮助")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(">help create     \n>help create database\n其中 [] 表示可有可无, 其它的必须有\n{a|b}  代表必须有, a 或 b\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//1 语法\n> create database 数据库名 charset utf8;\n\n//2 命名规则\n数字,下划线, @, #, $\n区分大小写,\n唯一\n不要用关键字\n不要单独使用数字\n最长128位\n")])])]),a("h2",{attrs:{id:"存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[e._v("#")]),e._v(" 存储引擎")]),e._v(" "),a("p",[e._v("存储引擎就是表的类型")]),e._v(" "),a("h4",{attrs:{id:"查看mysql支持的引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql支持的引擎"}},[e._v("#")]),e._v(" 查看mysql支持的引擎")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> show engines;              // 用 InnoDB  \n")])])]),a("h4",{attrs:{id:"指定表类型-存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定表类型-存储引擎"}},[e._v("#")]),e._v(" 指定表类型/存储引擎")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(">create table t1(id int)engine=innodb;\n> create table t3(id int) charset utf8 engine=innodb;   //指定字符 在 引擎前面\n")])])]),a("h2",{attrs:{id:"表的增删改查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表的增删改查"}},[e._v("#")]),e._v(" 表的增删改查")]),e._v(" "),a("h4",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[e._v("#")]),e._v(" 创建表")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> create table 表名(\n    字段名1 类型[(宽度) 约束条件],\n    字段名2 类型[(宽度) 约束条件],\n    字段名3 类型[(宽度) 约束条件]\n)\n\n# 注意\n1. 同一张表中,字段不能重名\n2. 宽度和约束条件可选\n3. 字段名和类型是必须的\n")])])]),a("h4",{attrs:{id:"查看表信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看表信息"}},[e._v("#")]),e._v(" 查看表信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> show create table t1;   \n> show create table t1\\G;     // 一行一行显示   \n\n\n> desc  t1;\n")])])]),a("h4",{attrs:{id:"修改表结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改表结构"}},[e._v("#")]),e._v(" 修改表结构")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 1 修改表名\n> alter table 表名 rename 新表名;\n\n// 2 增加字段\n> alter table 表名 add 字段名 数据类型[完整性约束条件], add 字段名2 数据类型[完成约束条件];\n                                    //可以添加多个,也可以添加一个, 后面的字段也要带add\n\n> alter table 表名 add 字段名 数据类型[完整约束条件] first;    // 指定插入的位置\n> alter table 表名 add 字段名 数据类型[完整约束条件] after 字段名; // 插入指定字段后\n\n// 3 删除字段\n> alter table 表名 drop 字段名;\n\n// 4 修改字段\n> alter table 表名 modify 字段名 数据类型 [完整约束条件];\n> alter table 表名 change 旧字段名 新字段名 旧数据类型 [完整约束条件];\n> alter table 表名 change 旧字段名 新字段名 新数据类型 [完整约束条件];\n")])])]),a("h4",{attrs:{id:"复制表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制表"}},[e._v("#")]),e._v(" 复制表")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> create table t1 select 字段1, 字段2 from t2;  //把t1 查出的字段复制到一张新表 t1; 表结构,记录也复制过来的\n\n> create table t1 select 字段1, 字段2 from t2 where 1> 5;//查不到记录, 只复制了表结构\n\n> create table t1 like t2; //只复制 t2的表结构\n\n\n")])])]),a("h4",{attrs:{id:"删除表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[e._v("#")]),e._v(" 删除表")]),e._v(" "),a("blockquote",[a("p",[e._v("drop table 表名;")])]),e._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[e._v("#")]),e._v(" 数据类型")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("大小")]),e._v(" "),a("th",[e._v("范围(有符号)")]),e._v(" "),a("th",[e._v("范围(无符号)")]),e._v(" "),a("th",[e._v("用途")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("tinyint")]),e._v(" "),a("td",[e._v("1字节")]),e._v(" "),a("td",[e._v("(-128,127)")]),e._v(" "),a("td",[e._v("(0,255)")]),e._v(" "),a("td",[e._v("小整数值")])]),e._v(" "),a("tr",[a("td",[e._v("smallint")]),e._v(" "),a("td",[e._v("2字节")]),e._v(" "),a("td",[e._v("(-32 768, 32 767)")]),e._v(" "),a("td",[e._v("(0, 65 535)")]),e._v(" "),a("td",[e._v("大整数值")])]),e._v(" "),a("tr",[a("td",[e._v("mediumint")]),e._v(" "),a("td",[e._v("3字节")]),e._v(" "),a("td",[e._v("(-8 388 608, 8 388 607)")]),e._v(" "),a("td",[e._v("(0, 16 777 215)")]),e._v(" "),a("td",[e._v("大整数值")])]),e._v(" "),a("tr",[a("td",[e._v("int或integer")]),e._v(" "),a("td",[e._v("4字节")]),e._v(" "),a("td",[e._v("(-2 147 483 648, 2 147 483 647)")]),e._v(" "),a("td",[e._v("(0, 4 294 967 295)")]),e._v(" "),a("td",[e._v("大整数值")])]),e._v(" "),a("tr",[a("td",[e._v("bigint")]),e._v(" "),a("td",[e._v("8字节")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("极大整数值")])]),e._v(" "),a("tr",[a("td",[e._v("float")]),e._v(" "),a("td",[e._v("4字节")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("单精度 浮点数值")])]),e._v(" "),a("tr",[a("td",[e._v("double")]),e._v(" "),a("td",[e._v("8字节")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("双精度 浮点数值")])]),e._v(" "),a("tr",[a("td",[e._v("decimal")]),e._v(" "),a("td",[e._v("对decimal(m,d),"),a("br"),e._v("如果m>d为m+2,否则为d+2")]),e._v(" "),a("td",[e._v("依赖于m和d的值")]),e._v(" "),a("td",[e._v("依赖于m和d的值")]),e._v(" "),a("td",[e._v("小数值")])])])]),e._v(" "),a("h4",{attrs:{id:"整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[e._v("#")]),e._v(" 整型")]),e._v(" "),a("p",[e._v("int 的存储宽度为4个bytes(8位) 即 32个bit 即 2**32")]),e._v(" "),a("p",[e._v("默认是有符号的,  无符号需要声明")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> create table t1(x tinyint unsigned);\n\n> create table t1(x int(1) unsigned zerofill); \n         //注意 ,整型类型不要(1)来限制宽度,它限制的是显示宽度, \n         //不是限制存储宽度, 存储宽度是mysql限制死了的,用不同的整型类型就是不同的存储宽度\n         //显示宽度是指 在select 查询显示 结果时, 它显示的宽度而已,如果没有设置 填充,就留空\n         //有就填充到指定的显示宽度\n         // 一般不指定显示宽度, 自动会设置到刚好显示最大的位数\n")])])]),a("h4",{attrs:{id:"浮点类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点类型"}},[e._v("#")]),e._v(" 浮点类型")]),e._v(" "),a("p",[e._v("floate double decimal")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# float(m, d) [unsigned] [zerofill]\n\n单精度浮点数(非准确小数值), m是数字总个数, d是小数点后个数, m最大是255, d最大值为30\n\n\n# double(m, d) [unsigned] [zerofill]\n\n双精度浮点数(非准确小数值), m是数字总个数, d是小数点后个数, m最大是255, d最大值为30\n\n\n# decimal(m, d) [unsigned] [zerofill]\n\n准确小数值, m是数字总个数, d是小数点后个数, m最大是65, d最大值为30\n\n\n它们的区别是精度不一样\n上面两个整数位大, decimal整数位小但精确\n\n通常前两个就够用了, 除你要造原子强弹,火箭, 才考虑decimal\n\n")])])]),a("h4",{attrs:{id:"日期类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期类型"}},[e._v("#")]),e._v(" 日期类型")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create table student(\n    id int,\n    name char(6),\n    born_year year,\n    birth_date date,\n    class_time time,\n    reg_time datetime\n);\ninsert into student values (1, 'yycu', now(), now(), now(), now());\n//   1  yycu  2020  2020-06-20  17:33:35   2020-06-20 17:33:35 \n// > \\c   可以终止运行  如果有引号没配对, 则停不了, 需要先加上引号,再 \\c才终止\n")])])]),a("p",[a("strong",[e._v("datetime与timestamp的区别")]),e._v("\n大部分应用还是用 datetime")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("datetime")]),e._v(" "),a("th",[e._v("timestamp")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("日期范围")]),e._v(" "),a("td",[e._v("1001-9999年")]),e._v(" "),a("td",[e._v("1970-2038年")])]),e._v(" "),a("tr",[a("td",[e._v("时区")]),e._v(" "),a("td",[e._v("与时区无关")]),e._v(" "),a("td",[e._v("与时区有关")])]),e._v(" "),a("tr",[a("td",[e._v("存储空间")]),e._v(" "),a("td",[e._v("8字节")]),e._v(" "),a("td",[e._v("4字节")])]),e._v(" "),a("tr",[a("td",[e._v("默认值")]),e._v(" "),a("td",[e._v("null")]),e._v(" "),a("td",[e._v("不能为空,默认当前时间"),a("br"),e._v("(current_timestamp)")])])])]),e._v(" "),a("h4",{attrs:{id:"字符类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符类型"}},[e._v("#")]),e._v(" 字符类型")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("char")]),e._v(" "),a("th",[e._v("varchar")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("长度")]),e._v(" "),a("td",[e._v("定长")]),e._v(" "),a("td",[e._v("变长")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[e._v("简单,粗暴,储存快,查询快")]),e._v(" "),a("td",[e._v("复杂,慢")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td",[e._v("浪费空间")]),e._v(" "),a("td",[e._v("节省空间")])])])]),e._v(" "),a("p",[e._v("一般使用char 类型")]),e._v(" "),a("p",[e._v("还有其它 可以存很长长度的类型")]),e._v(" "),a("p",[e._v("但数据库不应该存很长的类型, 可以想其它解决办法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 宽度指的是字符的个数  下面两个都是最多只能存5个字\ncreate table t1(name char(5));    // 不够也被全5个字符, 补空格  (定长, 一定要达到指定的长度)\n\ncreate table t1(name varchar(5));  // 不够就不够,有几个就存几个,但不超过5 (长度可以变,不超过5就行)\n\n// 末尾的空格, 存储时会存进去, 但取的时间, 会被省略掉, where = 比较时, 不管末尾的空格\n// 前面的空格不去掉的,  只去末尾\n// where like  不适用这条规则\n\n// 它们存的时\nname char(5)   定长会被空格, 每一个都是5个, 取值,直接定长5个5个的取\negon |alex |wxx  |\n\nname varchar(5) 可以变长度, 它还需要存它自己的长度\negon|alex|wxx|\n// 要在开头加一个 byte 来存它自已的长度, 长度过大, 保存长度的byte就需要也多个(最多2个)\n1bytes+egon|1bytes+alex|1bytes+wxx\n4+egon|4+alex|3+wxx\n\n\n//\n")])])]),a("h4",{attrs:{id:"枚举类型-集合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举类型-集合类型"}},[e._v("#")]),e._v(" 枚举类型  集合类型")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create table consumer(\n    id int,\n    name char(16),\n    sex enum('male', 'female', 'ohter'),\n    level enum('vip1', 'vip2', 'vip3'),\n    hobbies set('play', 'music', 'read', 'run')\n)\n\ninsert into consumer values(1, 'yycu', 'male', 'vip2', 'read');\n")])])]),a("h2",{attrs:{id:"约束条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约束条件"}},[e._v("#")]),e._v(" 约束条件")]),e._v(" "),a("p",[e._v("创建表时对字段的约束条件")]),e._v(" "),a("h4",{attrs:{id:"not-null-与-default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-null-与-default"}},[e._v("#")]),e._v(" not null 与 default")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create table t1(\n    id int(11) unsigned zerofill, //id 被 int(11)限制,  在此 数据类型的基础之上,再被 unsigned 限制\n)\n\ncreate table t1(\n    id int,\n    name char(6), \n    sex enum('male','female') not null default 'male'\n)\n")])])]),a("h4",{attrs:{id:"unique-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[e._v("#")]),e._v(" unique key")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 方法一   单列唯一\ncreate table department (\n    id int unique,\n    name char(10) unique\n);\n\n// 方法二 单列唯一\ncreate table department (\n    id int,\n    name char(10),\n    unique(id),\n    unique(name)\n);\n\n// 联合唯一\ncreate table services (\n    id int,\n    ip char(15),\n    port int,\n    unique(id),    // 单列唯一\n    unique(ip, port)   //联合唯一, 两个字段合起来是唯一的,不合,单独,是可以重复的\n)\n\n")])])]),a("h4",{attrs:{id:"primary-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-key"}},[e._v("#")]),e._v(" primary key")]),e._v(" "),a("p",[e._v("主键, not null unique")]),e._v(" "),a("p",[e._v("存储引擎(innodb): 对于innodb存储引擎来说, 一张表内必须有一个主键.")]),e._v(" "),a("p",[e._v("如果没有,mysql 一旦识别是innodb表,则会找一个 not null unique的字段来做主键")]),e._v(" "),a("p",[e._v("如果 也没有,就用一个隐藏的主键")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 单列主键\ncreate table t1(\n    id int primary key,\n    name char(16)\n);\n\n\n# 复合主键\ncreate table t1(\n    ip char(15),\n    port int,\n    primary key(ip, port)\n);\n\n")])])]),a("h4",{attrs:{id:"auto-increment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-increment"}},[e._v("#")]),e._v(" auto_increment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("create table t1(\n    id int primary key auto_increment,\n    name char(16)\n);\n\n这样就不用给id 传值 ,当然,你也可以传, 只要符合不为空,且唯一就可以了\n当下次自动增加会从你上次传入的值,开始自动增加,就是从上一条记录开始自动增长\n\n// 清空表\n\ndelete from t1;\n //注意,此时这张表的id是自增长的,它的值 没有重置, 下次插入,会在上一次的值加1 \n //delete 适合删除指定范围的行, 和where 配全使用\n\n //清空表用 下面这个,才是正解\n truncate t1;   // 才会 重置id的自增长记录\n")])])]),a("h4",{attrs:{id:"foreign-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreign-key"}},[e._v("#")]),e._v(" foreign key")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 先建被关联的表, 并且保证被关联的字段唯一\ncreate table dep(\n    id int primary key ,\n    name char(16),\n    commnent char(50)\n)\n\n\n# 再建立关联的表\ncreate table emp(\n    id int primary key,\n    name char(10),\n    sex enum('male', 'female'),\n    dep_id int,\n    foreign key(dep_id) references dep(id)\n    on delete cascade       //还需要这个\n    on update cascade,      //还需要这个 \n)\n")])])]),a("ul",[a("li",[e._v("要先建立 关联的表")]),e._v(" "),a("li",[e._v("并保证关联字段 唯一")]),e._v(" "),a("li",[e._v("插入数据里, 关联的表要先有数据, 然后再插入")]),e._v(" "),a("li",[e._v("两张表, 藕和在一起了")]),e._v(" "),a("li",[e._v("一般在项目中, 一般不要这样子做, 在程序逻辑里控制")])]),e._v(" "),a("p",[a("strong",[e._v("删除的时候")])]),e._v(" "),a("ul",[a("li",[e._v("要先删除表里的数据 ,然后才能删除关联表里的数据")]),e._v(" "),a("li",[e._v("先删除关联表里的数据, 如果有被关联的数据,则会报错")])]),e._v(" "),a("h2",{attrs:{id:"两张表的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两张表的关系"}},[e._v("#")]),e._v(" 两张表的关系")]),e._v(" "),a("p",[e._v("要判断两张表的关系,需要先后,站在左表和右表,来看,来确定")]),e._v(" "),a("h4",{attrs:{id:"多对一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多对一"}},[e._v("#")]),e._v(" 多对一")]),e._v(" "),a("p",[e._v("左边表的多条记录,能对应上右边表的一条记录, 也可以返过来说是一对多, 只是站的表不同")]),e._v(" "),a("p",[e._v("例:　　出版社　　　　书\n先站在　出版社，")]),e._v(" "),a("h4",{attrs:{id:"多对多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多对多"}},[e._v("#")]),e._v(" 多对多")]),e._v(" "),a("p",[e._v("双向的多对一， 叫做多对多， 不能通过在表里建一个外键，来达到关联的关系")]),e._v(" "),a("p",[e._v("因为他们都需要要有对方， 需要建一引新的表来 存他们的关系")]),e._v(" "),a("p",[e._v("如  author表   book表")]),e._v(" "),a("p",[e._v("然后建一张 author2book 来存他们的关联关系，")]),e._v(" "),a("p",[e._v("作者    书")]),e._v(" "),a("h4",{attrs:{id:"一对一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一对一"}},[e._v("#")]),e._v(" 一对一")]),e._v(" "),a("p",[e._v("客户   学生   （每一个都是客户，  只有报名了，才是学生）")]),e._v(" "),a("p",[e._v("（客户表先有， 学生表后有， 在后有的表加字段）")]),e._v(" "),a("p",[e._v("在  学生里 加一个 字段 存 客户的id, 它是一个外键， 唯一")]),e._v(" "),a("h2",{attrs:{id:"记录的增删改查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录的增删改查"}},[e._v("#")]),e._v(" 记录的增删改查")]),e._v(" "),a("h4",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[e._v("#")]),e._v(" insert")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("insert into 表名（字段1， 字段2， 字段3..., 字段n) values(值1, 值2, 值3...值n);\n\ninsert into 表名 values(值1, 值2, 值3...值n);\n")])])]),a("h4",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" update")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("update 表名 set 字段1 = 值1, 字段2 = 值2 where 条件;\n")])])]),a("h4",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" delete")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("delete table 表名 where 条件;\n\n")])])]),a("h4",{attrs:{id:"select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[e._v("#")]),e._v(" select")]),e._v(" "),a("p",[e._v("单表查询    多表查询")]),e._v(" "),a("h2",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[e._v("#")]),e._v(" 查询")]),e._v(" "),a("h4",{attrs:{id:"单表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单表查询"}},[e._v("#")]),e._v(" 单表查询")]),e._v(" "),a("p",[e._v("一条完整的单表查询语句")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select distinct 字段1,字段2,...  from 库.表 \n    wehre 条件\n    group by 分组条件\n    having 过滤\n    order by 排序字段\n    limit n;\n\n")])])]),a("ul",[a("li",[e._v("字段名 as 别名      这样 给字起别名")]),e._v(" "),a("li",[e._v("concat('xxx', 字段名, 字段名) as 别名     格式化字段  并起别名")])]),e._v(" "),a("h4",{attrs:{id:"where-约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-约束"}},[e._v("#")]),e._v(" where 约束")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from tableName where id > 7;\n\n# 先找表,执行 from tableName\n# 再where \n# 再打印 select 出来\n\nselect 字段1, 字段2 from employee where post='xxx' and salary>8000;\n\nselect * from employee where salary >=20000 and salary <=3000\n也可以这样写\nseleet * from employee where salary between 20000 and 30000\n\n\nselect * from employee where salary < 20000 or salary >3000\n也可以这样写\nseleet * from employee where salary not between 20000 and 30000\n\nselect * from employee where age=73 or age = 81 or age = 28\n上面写太累了, 可以下面这样写\nselect * from employee where age in (73,81,28)\n\n\nselect * from employee where post_comment is Null;\nselect * from employee where post_comment is not Null;\n\n% 相当于  正则的  *    任意多字符\n_  任意一个字符,  写 __ 是任意两个字符\nselect * from employee where name like \"jin%\"\n\n")])])]),a("h4",{attrs:{id:"group-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[e._v("#")]),e._v(" group by")]),e._v(" "),a("ul",[a("li",[e._v("首先明确一点，分组发生在where之后， 即分组是基于 where之后得到的记录而进行的")]),e._v(" "),a("li",[e._v("分组指的是：将所有记录按照某个相同字段进行归类，　如员工信息表的职位分组，或按照性别分组")]),e._v(" "),a("li",[e._v("为什么要分组呢\n"),a("ul",[a("li",[e._v("取每个部门的最高工资")]),e._v(" "),a("li",[e._v("取每个部门的员工数")]),e._v(" "),a("li",[e._v("取男人和女人数")])])]),e._v(" "),a("li",[e._v("不要用 unique的字段作为分组的依据,没意义")]),e._v(" "),a("li",[e._v("没有分组,整体就是一个分组,也可惜使用聚合函数")])]),e._v(" "),a("p",[a("strong",[e._v("小窍门:＇每＇这个字后面的字段,就是我们分组的依据")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('select * from employee [where] group by post; \n分完组以后,只能查看分组的字段,(终端,会显示, 每一个分组的第一条记录,这样的数据没意义的\n分组,你还看单独一条是没意思的, \n> set global sql_mode="ONLY_FULL_GROUP_BY"   严格模式就是只能查看分组的字段\n)\n也可以取每个组聚合的结果\n')])])]),a("h4",{attrs:{id:"聚合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[e._v("#")]),e._v(" 聚合函数")]),e._v(" "),a("ul",[a("li",[e._v("max")]),e._v(" "),a("li",[e._v("min")]),e._v(" "),a("li",[e._v("avg")]),e._v(" "),a("li",[e._v("sum")]),e._v(" "),a("li",[e._v("count")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("每个职位有多少个员工\nselect post, count(id) as emp_count from employee groub by post\nselect post max(salar)  as emp_max_salar from employee groub by post\nselect post min(salar)  as emp_min_salar from employee groub by post\nselect post avg(salar)  as emp_avg_salar from employee groub by post\nselect post sum(age)  as emp_age from employee groub by post\n\n")])])]),a("p",[a("strong",[e._v("没有group by 则默认整个作一组")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select max(salary) from employee\n")])])]),a("p",[a("strong",[e._v("group_concat")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("             拼接, 把分组的结果拼接起来\nselect post, group_concact(name) from employee group by post\n")])])]),a("h4",{attrs:{id:"having-过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#having-过滤"}},[e._v("#")]),e._v(" having 过滤")]),e._v(" "),a("p",[e._v("having 是在 分组 group by 之后\nwhere 是在 分组 group by 之前")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select post, group_concat(name), count(id) from employee group by post having count(id) > 2;\n\nselect post, avg(salary) from employee group by post having avg(salary) > 10000 and avg(salary) < 20000;\n")])])]),a("h4",{attrs:{id:"order-by-排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-by-排序"}},[e._v("#")]),e._v(" order by 排序")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nselect * from employee order by age asc;    # asc 升序, 默认就是asc  降序 desc\n\nselect * from  employee order by age desc;  # 降序\n\nselect max(salary) from employee where max(salary) > 1000;  这是一条错语的示例, where 后面不能用聚合函数\n\nselect post, count(id) as emp_count from employee where salary > 1000 group by post having count(id) > 5;\n\n//                  这里还没执行  去重                                              这先执行, 执行时 as 还没执行\nselect distinct post, count(id) as emp_count from employee where salary > 1000 group by post having emp_count > 5;  # 错误示例,\n\n")])])]),a("h4",{attrs:{id:"limit-限制条数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-限制条数"}},[e._v("#")]),e._v(" limit 限制条数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from employee limit 3;\n\nselect * from employee order by salary desc limit 1;  #limit 1; 取一个\n\nselect * from employee limit 0, 5;   #  从第0个开始, 往后取5条\n\nselect * from employee limit 0, 5;   #  从第5个开始, 往后取5条\n\nselect * from employee limit 10, 5;  #  从第10个开始, 往后取5条\n\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 语法顺序\n\nselect distinct 字段1,字段2,...  from 库.表 \n    wehre 条件\n    group by 分组条件\n    having 过滤\n    order by 排序字段\n    limit n;\n\n\n执行顺序 :\n\ndef from (db, table):\n    f = open(r'%s\\%s'%(db,table))\n    retrun f\n\n\ndef where(condition, f):\n    for line in f:\n        if condition:\n            yield line\n\n\ndef group(lines):\n    pass\n\ndef having(group_res):\n    pass\n\ndef distinct(havcing_res):\n    pass\n\ndef order(distinct_res):\n    pass\n\ndef limit(order_res):\n    pass\n\n\ndef select():\n    f = from ('db1', 't1')\n    lines = where('id>3',f)\n    group_res = group(lines)\n    having_res = having(group_res)\n    distinct_res = distinct(having_res)\n    order_res = order(distinct_res)\n    res = limit(order_res)\n    print(res)\n    return res\n")])])]),a("h4",{attrs:{id:"正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[e._v("#")]),e._v(" 正则表达式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from employee where name like 'jin%';\n\nselect * from employee where name regexp '^jin';\n\nselect * from employee where name regexp '^jin.*(g|n)$';\n")])])]),a("h2",{attrs:{id:"连表操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连表操作"}},[e._v("#")]),e._v(" 连表操作")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 笛卡儿集,  左表的记录, 都会和右边的每一项对应,  没什么意思, 但它简单暴的把两个表连起来\nselect * from employee, department;   \n")])])]),a("p",[e._v("连表操作,就是在  笛卡儿集 的基础之上 筛选,有关系的数据")]),e._v(" "),a("h4",{attrs:{id:"内连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内连接"}},[e._v("#")]),e._v(" 内连接")]),e._v(" "),a("p",[e._v("只取两张表的共同部分")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from employee inner join department on employee.dep_id = department.id [where]; \n\n再跟where 就是 做where 的事了\n\n")])])]),a("h4",{attrs:{id:"左连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#左连接"}},[e._v("#")]),e._v(" 左连接")]),e._v(" "),a("p",[e._v("在内连接的基础上保留左表的记录, 即便左表的记录和右表豪无对应关系")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from employee left join department on employee.dep_id = department.id;\n")])])]),a("h4",{attrs:{id:"右连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#右连接"}},[e._v("#")]),e._v(" 右连接")]),e._v(" "),a("p",[e._v("在内连接的基础上保留右表的记录, 即便右表的记录和左表豪无对应关系")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from employee right join department on employee.dep_id = department.id;\n")])])]),a("h4",{attrs:{id:"全外连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全外连接"}},[e._v("#")]),e._v(" 全外连接")]),e._v(" "),a("p",[e._v("在内连接的基础上保留,没有对应关系的记录")]),e._v(" "),a("p",[e._v("mysql 不支持 full join")]),e._v(" "),a("p",[e._v("需要用 左连接 和右连接  配全,  用 union 把两个结果合起来")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from employee left join department on employee.dep_id = department.id\nunion\nselect * from employee right join department on employee.dep_id = department.id\n\n")])])]),a("p",[a("strong",[e._v("示例")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 查询平均年龄大于 30 岁的部门名\nselect departement.name, avg(age) from employee inner join department on employee.dep_id = departement.id\n    group by departement.name \n    having avg(age) > 30\n")])])]),a("p",[a("strong",[e._v("执行顺序")])]),e._v(" "),a("p",[e._v("先执行 from 语句, 得到一张虚拟表\n执行 on  过滤\n添加 外部行  join\n执行 group by 分组\n执行 having\n执行 select 列表\n执行 distinct\n执行 order by\n执行 limit 子句")]),e._v(" "),a("h2",{attrs:{id:"子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子查询"}},[e._v("#")]),e._v(" 子查询")]),e._v(" "),a("p",[e._v("子查询是将一条查询语句嵌套在另一个查询语句中")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('查询平均年龄在25岁以上的部门名\n\nselect name from department where id in\n(select dep_id from employee\n    group by dep_id\n    having avg(age)>25)\n    ;\n\n其实等于之前学的\nselect name from department where id in (201, 202);\n\n只不过现在是用 子查询了\n\n\n\n查看技术部员工姓名\nselect name from employee where dep_id = (\nselect id from department where name = "技术");\n\n\n查看不足1人的部门名\n\nselect name from department where id not in (\n    select distinct dep_id from employee\n)\n\n\n查询大于所有人平均年龄的员工名与年龄\nselect name, age from employee where age > (\n    select avg(age) from employee\n)\n\n\n带exists 关键字的查询\n\nselect * from employee\nwhere EXISTS\n(select id from department where name="技术");\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from \n(select id, name sex from employee) as t1;   // 启一个表名,当做一个表来用\n\n这样可以做到表和自己连接\n\n\n# 每个部门最新入职的那名员工\n\nselect * from employee as t1\ninner join\n(select post, max(hire_date) as max_hire_date from employee\n group by ) as t2\n on t1.post = t2.post\n where t1.hire_date = t2.max_hire_date\n")])])]),a("h2",{attrs:{id:"权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[e._v("#")]),e._v(" 权限管理")]),e._v(" "),a("p",[e._v("1 创建账号\n# 本地账号\ncreate user 'username'@'localhost' identified by '123';"),a("br"),e._v("\n#mysql -username -p123")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# 远程账号              客户端的ip地址,  前端是 客户端能ping 通 mysql 服务器\ncreate user 'username'@'192.168.31.10' identified by '123';  \ncreate user 'username'@'192.168.31.%' identified by '123';  %表示任意\ncreate user 'username'@'%' identified by '123';  所有网都能访问,当然需要无ping通\n#mysql -username -p123 -h服务端ip\n")])])]),a("p",[e._v("2 授权    要root 账号才能进行授权操作\nuser: "),a("em",[e._v(".")]),e._v("\ndb: db1.*\ntables_priv: db1.t1\ncolumns_priv: id, name")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("grant all on *.* to 'username'@'localhost';  \ngrant select on *.* to 'username2'@'localhost'; \n\nrevoke select on *.* from 'username2'@'localhost';\n\n\ngrant select on  db1.*  to 'username2'@'localhost'; \nrevoke select on db1.* from 'username2'@'localhost';\n\n\ngrant select on db1.t2 to 'username2'@'localhost';\nrevoke select on db1.t2 to 'username2'@'localhost';\n\ngrant select(id,name), update(age) on db1.t3 to 'username2'@'localhost';\n")])])]),a("h2",{attrs:{id:"navicat-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navicat-工具"}},[e._v("#")]),e._v(" navicat  工具")]),e._v(" "),a("p",[e._v("一款管理mysql的可视化工具")]),e._v(" "),a("h2",{attrs:{id:"pymysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pymysql"}},[e._v("#")]),e._v(" pymysql")]),e._v(" "),a("p",[e._v("需要先安装 pymysql 模块")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip3 install pymysql\n或\npipenv install pymysql\n")])])]),a("h4",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[e._v("#")]),e._v(" 基本使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import pymysql\n\nuser = input(\'user>>: \').strip()\npwd = input(\'pwd>>: \').strip()\n\n# 建立连接\nconn = pymysql.connect(\n    host="localhost",\n    port=3306,\n    user="yycu",\n    password="001001001",\n    db="db",\n    charset="utf8"\n)\n\n# 拿到游标  (就像我们在终端 光标闪闪等我们输入)\ncursor = conn.cursor()\n\n# 执行sql语句                       注意这里, 要包个引号, 记得你是在拼sql\nsql = \'select * from user where user="%s" and pwd="%s"\'% (user, pwd)\nrows = cursor.execute(sql)   \n# rows 拿到的是受影响的行数, 即在终端输入查询后,表格底提示的行数\n\n# 关闭游标  关闭连接\ncursor.close()\nconn.close()\n\nif rows:\n    print("登录成功")\nelse: \n    print("登录失败")\n')])])]),a("h4",{attrs:{id:"sql-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入"}},[e._v("#")]),e._v(" sql 注入")]),e._v(" "),a("p",[e._v("还是上面的程序")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('>user>>: yycu" -- xxx\n>pawwword>>: \n')])])]),a("p",[e._v("这样即使密码不正确也可以查询成功\n它实际拼出的sql 语句如下:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('select * from user where user="yycu" -- xxx" and pwd=""\n')])])]),a("p",[e._v("在sql语句中 -- 表示之后的内容都是注释了\n这就是sql注入攻击, 需要防范.")]),e._v(" "),a("p",[a("strong",[e._v("不要自己拼接字符串")])]),e._v(" "),a("p",[e._v("正确做法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import pymysql\n\nuser = input(\'user>>: \').strip()\npwd = input(\'pwd>>: \').strip()\n\n# 建立连接\nconn = pymysql.connect(\n    host="localhost",\n    port=3306,\n    user="yycu",\n    password="001001001",\n    db="db",\n    charset="utf8"\n)\n\n# 拿到游标  (就像我们在终端 光标闪闪等我们输入)\ncursor = conn.cursor()\n\n# 执行sql语句\n#sql = \'select * from user where user="%s" and pwd="%s"\'% (user, pwd)\nsql = \'select * from user where user=%s and pwd=%s\'\nrows = cursor.execute(sql, (user, pwd))   \n# 在cursor.execute 第二个参数以元素的形式传参,可以防止sql注入\n# rows 拿到的是受影响的行数, 即在终端输入查询后,表格底提示的行数\n\n# 关闭游标  关闭连接\ncursor.close()\nconn.close()\n\nif rows:\n    print("登录成功")\nelse: \n    print("登录失败")\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);