(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(t,n,a){"use strict";a.r(n);var s=a(33),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),a("p",[t._v("python是一种解释型的语言")]),t._v(" "),a("p",[t._v("python2 默认编码方式是ascii码,")]),t._v(" "),a("p",[t._v("而python3默认编码方式是utf-8")]),t._v(" "),a("p",[t._v("所以最好在 行首行添加")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#-*- encoding:utf-8 -*-\n")])])]),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),a("p",[t._v("变量: 就是将一些运算的中间结果暂时存到内存,以便后续代码调用")]),t._v(" "),a("p",[t._v("1, 必须由数字, 字母, 下划线任意组合, 且不能数字开头\n2, 不用是python中的关键字\n3, 变量具有可描述性。\n4, 不能是中文。")]),t._v(" "),a("p",[t._v("tips: 多个单词, 推荐, 用 _ 来连接")]),t._v(" "),a("h2",{attrs:{id:"常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[t._v("#")]),t._v(" 常量")]),t._v(" "),a("p",[t._v("没有真正的常量, 是用大写来约定,它是一个常量,请不要改它而已.")]),t._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 单行注释\n\n'''\n多行注释\n多行注释\n多行注释  可以赋值给一个变量, 成为多行文本\n'''\n\n\"\"\"\n多行注释\n多行注释\n多行注释  可以赋值给一个变量, 成为多行文本\n\"\"\"\n\n")])])]),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" input")]),t._v(" "),a("p",[t._v("用户交互,  在终端,接收用户的输入")]),t._v(" "),a("p",[t._v("注意它接收的 数据类型全部是str")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nname = input('请输入你的名字:')  # 参数,是显示在终端的提醒文字\nage = input('请输入你的年龄:')\n\nprint('我的名字是:', name, '我今年', age, '岁了')\n\n")])])]),a("h2",{attrs:{id:"if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[t._v("#")]),t._v(" if")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 第一种\nif 4 > 5: \n  print('为真则执行这里')\n\n# 第二种\nif 4 > 5:\n  print('为真则执行这里')\nelse:\n  print('为假则执行这里')\n\n# 多选\nif num == '1':\n  print('为真则执行这')\nelif num == '2':\n  print('为真则执行这')  \nelif num == '3':\n  print('为真则执行这')  \nelif num == '4':\n  print('为真则执行这')  \nelse: \n  print('以上条件没一个为真,才执行这')\n\n# 注意, 这种elif 当一个条件成立后, 后续的代码就不会执行了, 要注意,条件出现的先后顺序\n\n")])])]),a("h2",{attrs:{id:"循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[t._v("#")]),t._v(" 循环")]),t._v(" "),a("h3",{attrs:{id:"while"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#while"}},[t._v("#")]),t._v(" while")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("while flag: \n  print('while后接着的flag\n  为真,就执行,要注意,避免死循环')\n\ncount = 1\nwhile count <= 100:\n  print(count)\n  count = count + 1\n\n# 会一直打印 1 2 3 ....  100  \n")])])]),a("p",[a("strong",[t._v("continue")])]),t._v(" "),a("p",[t._v("跳过这次循环, 即 continue后的代码就不执行了,")]),t._v(" "),a("p",[t._v("回到循环的开始去,重新判断flag是否为真,真的则进入循环,假就结束循环.")]),t._v(" "),a("p",[a("strong",[t._v("break")]),t._v(" 跳出循环, break后面的代码不执行,并跳出循环")])])}),[],!1,null,null,null);n.default=e.exports}}]);