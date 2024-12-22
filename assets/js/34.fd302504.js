(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{369:function(n,t,e){"use strict";e.r(t);var s=e(33),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[n._v("#")]),n._v(" 设计模式")]),n._v(" "),e("h2",{attrs:{id:"面向对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[n._v("#")]),n._v(" 面向对象")]),n._v(" "),e("h4",{attrs:{id:"搭建es6编译环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建es6编译环境"}},[n._v("#")]),n._v(" 搭建ES6编译环境")]),n._v(" "),e("p",[n._v("1 初始化 npm 环境")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm init -yes\n")])])]),e("p",[n._v("2 安装 webpack")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm i -D webpack webpack-cli\npm i -D webpack-dev-server html-webpack-plugin\n\n")])])]),e("p",[n._v("webpack.dev.config.js")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const path = require('path')\n\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n\nmodule.exports = {\n    mode: 'development',\n    entry: './src/index.js',\n    output: {\n        path: __dirname,\n        filename: './release/bundle.js'\n    },\n    module: {\n        rules: [\n            { test: /\\.js$/, exclude: /node_modules/, loader: \"babel-loader\" }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './index.html'\n        })\n    ],\n    devServer: {\n        contentBase: path.join(__dirname, 'release'),\n        open: true,\n        port: 9000\n    }\n}\n")])])]),e("p",[n._v("3 安装 babel")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install --save-dev babel-loader @babel/core\nnpm install @babel/preset-env --save-dev\n")])])]),e("p",[n._v(".babelrc")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n    "presets": ["@babel/preset-env"]\n}\n')])])]),e("h4",{attrs:{id:"什么是面向对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是面向对象"}},[n._v("#")]),n._v(" 什么是面向对象")]),n._v(" "),e("h5",{attrs:{id:"类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[n._v("#")]),n._v(" 类")]),n._v(" "),e("p",[n._v("即是模板 用来创建实例")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 类\nclass People {\n    constructor(name, age){   //构造函数\n        this.name = name     // 属性\n        this.age = age\n    }\n    eat(){                      //方法\n        alert('eat some thing')\n    }\n}\n\n// 创建实例   通过new 创建,   通过 . 运算符 设备属性  和  方法\nconst zhang = new People('zhang', 20)\nzhang.eat()\n\n\n// 继承\n// 子类继承父类\nclass Student extends People {         //通过关键字 extends 实现继承\n    constructor(name, age, number) {\n        super(name, age)           //在构造函数第一句 调用父类的构造函数 super\n        this.number = number \n    }\n}\n\n// 封装 public protected  private\n// es6 尚不支持, typescript 支持了\n")])])]),e("p",[n._v("// 多态")]),n._v(" "),e("p",[n._v("// 不像java 支持得那么好,毕竟是弱类型语言")]),n._v(" "),e("h5",{attrs:{id:"uml类图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml类图"}},[n._v("#")]),n._v(" UML类图")]),n._v(" "),e("p",[n._v("Unified Modeling Language 统一建模语言")]),n._v(" "),e("p",[n._v("类图, UML包含很多种图, 和设计模式相关的是类图")]),n._v(" "),e("p",[n._v("关系, 主要讲解泛化和关联")]),n._v(" "),e("p",[n._v("演示, 代码和类图结合")]),n._v(" "),e("p",[e("strong",[n._v("工具")])]),n._v(" "),e("p",[e("code",[n._v("MS Office visio")])]),n._v(" "),e("p",[e("code",[n._v("https://www.processon.com")])]),n._v(" "),e("p",[e("strong",[n._v("类图")]),n._v("\n类图一般长这个类\n"),e("img",{attrs:{src:"/images/class.png",alt:""}})]),n._v(" "),e("p",[n._v("这是一个具体的类图")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/people.jpg",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("关系")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/relation.jpg",alt:""}})]),n._v(" "),e("p",[n._v("类A 和 类B 继承 People")]),n._v(" "),e("p",[n._v("类People 内引用 House类")]),n._v(" "),e("h2",{attrs:{id:"设计原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[n._v("#")]),n._v(" 设计原则")]),n._v(" "),e("h4",{attrs:{id:"何为设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何为设计"}},[n._v("#")]),n._v(" 何为设计?")]),n._v(" "),e("ul",[e("li",[n._v("即按照哪一种思路或者标准来实现功能")]),n._v(" "),e("li",[n._v("功能相同,可以有不同的设计方案来实现")]),n._v(" "),e("li",[n._v("伴随着需求增加,设计的作用才能体现出来")])]),n._v(" "),e("p",[e("strong",[n._v("unix/linux设计哲学")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("准则1: 小即是美")])]),n._v(" "),e("li",[e("p",[n._v("准则2: 让每个程序只做好一件事")])]),n._v(" "),e("li",[e("p",[n._v("准则3: 快速建立原型")])]),n._v(" "),e("li",[e("p",[n._v("准则4: 舍弃高效率而取可移植性")])]),n._v(" "),e("li",[e("p",[n._v("准则5: 采用纯文本来存储数据")])]),n._v(" "),e("li",[e("p",[n._v("准则6: 充分利用软件的杠杆效应(软件复用)")])]),n._v(" "),e("li",[e("p",[n._v("准则7: 使用shell 脚本来提高杠杆效应和可移植性")])]),n._v(" "),e("li",[e("p",[n._v("准则8: 避免强制性的用户界面")])]),n._v(" "),e("li",[e("p",[n._v("准则9: 让每个程序都称为过滤器")])]),n._v(" "),e("li",[e("p",[n._v("小准则: 允许用户定制环境")])]),n._v(" "),e("li",[e("p",[n._v("小准则: 尽量使操作系统内核小而轻量化")])]),n._v(" "),e("li",[e("p",[n._v("小准则: 使用小写字母并尽量简短")])]),n._v(" "),e("li",[e("p",[n._v("小准则: 沉默是金")])]),n._v(" "),e("li",[e("p",[n._v("小准则: 各部分之和大于整体")])]),n._v(" "),e("li",[e("p",[n._v("小准则: 寻求90%的解决方案")])])]),n._v(" "),e("h4",{attrs:{id:"s-o-l-i-d-五大设计原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s-o-l-i-d-五大设计原则"}},[n._v("#")]),n._v(" S O L I D 五大设计原则")]),n._v(" "),e("h5",{attrs:{id:"s-单一职责原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#s-单一职责原则"}},[n._v("#")]),n._v(" S 单一职责原则")]),n._v(" "),e("ul",[e("li",[n._v("一个程序只做好一件事")]),n._v(" "),e("li",[n._v("如果功能过于复杂就拆分开, 每个部分保持独立")])]),n._v(" "),e("h5",{attrs:{id:"o-开放封闭原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#o-开放封闭原则"}},[n._v("#")]),n._v(" O 开放封闭原则")]),n._v(" "),e("ul",[e("li",[n._v("对扩展开放, 对修改封闭")]),n._v(" "),e("li",[n._v("增加需求时,扩展新代码, 而非修改已有代码")]),n._v(" "),e("li",[n._v("这是软件设计的终极目标")])]),n._v(" "),e("h5",{attrs:{id:"l-李氏转换原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#l-李氏转换原则"}},[n._v("#")]),n._v(" L 李氏转换原则")]),n._v(" "),e("ul",[e("li",[n._v("子类能覆盖父类")]),n._v(" "),e("li",[n._v("父类能出现的地方子类就能出现")]),n._v(" "),e("li",[n._v("JS中使用较少 (弱类型 & 继承使用较少)")])]),n._v(" "),e("h5",{attrs:{id:"i-接口独立原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-接口独立原则"}},[n._v("#")]),n._v(" I 接口独立原则")]),n._v(" "),e("ul",[e("li",[n._v('保持接口的单一独立,避免出现"胖接口"')]),n._v(" "),e("li",[n._v("JS中没有接口(typscript有),使用较少")]),n._v(" "),e("li",[n._v("类似于单一职责原则,这里更关注接口")])]),n._v(" "),e("h5",{attrs:{id:"d-依赖倒置原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#d-依赖倒置原则"}},[n._v("#")]),n._v(" D 依赖倒置原则")]),n._v(" "),e("ul",[e("li",[n._v("面向接口编程, 依赖于抽象不依赖于具体")]),n._v(" "),e("li",[n._v("使用方只关注接口而不关注具体类的实现")]),n._v(" "),e("li",[n._v("JS中使用较少(没有接品 & 弱类型)")])]),n._v(" "),e("h4",{attrs:{id:"从设计到模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从设计到模式"}},[n._v("#")]),n._v(" 从设计到模式")]),n._v(" "),e("p",[n._v("设计模式, 需要  拆分来看,是两个东西来的, 是 设计 和 模式\n需要先了解设计, 然后,才是模式")]),n._v(" "),e("h5",{attrs:{id:"_23种设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23种设计模式"}},[n._v("#")]),n._v(" 23种设计模式")]),n._v(" "),e("ul",[e("li",[n._v("创建型")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("工厂模式(工厂方法模式,抽象工厂模式,建造者模式)\n单例模式\n原型模式\n")])])]),e("ul",[e("li",[n._v("结构型")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("适配模式    装饰器模式\n代理模式    外观模式\n\n桥接模式    组合模式\n享元模式  \n\n")])])]),e("ul",[e("li",[n._v("行为型")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\n策略模式    模板方法模式   观察者模式\n迭代器模式  职责连模式      命令模式\n备忘录模式   状模式       访问者模式\n中介者模式   解释器模式\n\n")])])]),e("h2",{attrs:{id:"设计模式-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计模式-2"}},[n._v("#")]),n._v(" 设计模式")]),n._v(" "),e("h4",{attrs:{id:"如何学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何学习"}},[n._v("#")]),n._v(" 如何学习?")]),n._v(" "),e("ul",[e("li",[n._v("明白每个设计的道理和用意")]),n._v(" "),e("li",[n._v("通过经典应用体会它的真正使用场景")]),n._v(" "),e("li",[n._v("自己编码时多思考,尽量模仿")])]),n._v(" "),e("h4",{attrs:{id:"工厂模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[n._v("#")]),n._v(" 工厂模式")]),n._v(" "),e("p",[e("strong",[n._v("摘要")])]),n._v(" "),e("ul",[e("li",[n._v("将 new 操作单独封装")]),n._v(" "),e("li",[n._v("遇到 new 时, 就要考虑是否该使用工厂模式")])]),n._v(" "),e("p",[e("strong",[n._v("UML类图")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/factory.jpg",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("生活场景")])]),n._v(" "),e("ul",[e("li",[n._v("去购买汉堡,直接点餐,取餐,不用自己亲手做")]),n._v(" "),e("li",[n._v('商店要 "封装" 做汉堡的工作, 做好直接给买者')])]),n._v(" "),e("p",[e("strong",[n._v("前端场景")])]),n._v(" "),e("ul",[e("li",[n._v("jQuery - $('div')")]),n._v(" "),e("li",[n._v("React.createElement")]),n._v(" "),e("li",[n._v("vue 异步组件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class Product {\n    constructor(name){\n        this.name = name\n    }\n\n    init(){\n        console.log('init')\n    }\n\n    fun1() {\n        console.log('fun1')\n    }\n\n    fun2() {\n        console.log('fun1')\n    }\n}\n\nclass Creator {\n    create(name) {\n        return new Product(name)\n    }\n}\n\n// 测试\nconst creator = new Creator()\n\nconst p = creator.create('p1')\n\np.init()\np.fun1()\np.fun2()\n")])])]),e("h4",{attrs:{id:"单例模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[n._v("#")]),n._v(" 单例模式")]),n._v(" "),e("p",[e("strong",[n._v("摘要")])]),n._v(" "),e("ul",[e("li",[n._v("系统中被唯一使用")]),n._v(" "),e("li",[n._v("一个类只有一个实例")])]),n._v(" "),e("p",[n._v("单例模式需要用到java的特性(private),  es6中没有, 只能用 java 代码来演示uml图的内容")]),n._v(" "),e("p",[e("strong",[n._v("UML类图")])]),n._v(" "),e("p",[n._v("java 的示例")]),n._v(" "),e("p",[n._v("- 表示 私有 private")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/single.jpg",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("示例")])]),n._v(" "),e("ul",[e("li",[n._v("登录框")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class LoginForm {\n    constructor() {\n        this.state = 'hide'\n    }\n\n    show() {\n        if(this.state === 'show'){\n            alert('已经显示')\n            return\n        }\n        this.state = 'show'\n        console.log('登录框显示成功')\n    }\n    hide() {\n        if(this.state === 'hide'){\n            alert('已经隐藏')\n            return\n        }\n        this.state = 'hide'\n        console.log('登录框隐藏成功')\n    }\n}\n\nLoginForm.getInstance = (function(){\n    let instance \n    return function(){\n        if(!instance){\n            instance = new LoginForm()\n        }\n        return instance\n    }\n})()\n\nlet login1 = LoginForm.getInstance()\n\nlogin1.show()\n\nlet login2 = LoginForm.getInstance()\n\nlogin2.hide()\n\n//login1  login2 是同一个 对象   操作的 show hide 是同一个对象上的方法\n")])])]),e("ul",[e("li",[n._v("购物车")])]),n._v(" "),e("p",[e("strong",[n._v("场景")])]),n._v(" "),e("ul",[e("li",[n._v("jQuery 只有一个$")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\nif(window.jQuery != null){\n    return window.jQuery\n}else {\n    //初始化\n}\n\n")])])]),e("ul",[e("li",[n._v("模拟登录框")]),n._v(" "),e("li",[n._v("购物车(和登录框类似)")]),n._v(" "),e("li",[n._v("vuex 和 redux 中的 store")])]),n._v(" "),e("p",[e("strong",[n._v("JS使用单例模式")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class SingleObject {\n    login()\n    {\n        console.log('login...')\n    }\n}\n\nSingleObject.getInstance = (function(){\n    let instance \n    return function(){\n        if(!instance) {\n            instance = new SingleObject()\n        }\n        return instance\n    }\n})()\n\n//通过 静态方法获得的对象是一个单例,都是同一个单例,\n//但是通过 new ClassName 则可以得到一个新的不同的单例\n\n\n")])])]),e("p",[e("strong",[n._v("设计原则验证")])]),n._v(" "),e("ul",[e("li",[n._v("符合单一职责原则,只实例化唯一的对象")]),n._v(" "),e("li",[n._v("没法特别好的体现开放封闭原则, 但是绝对不违反开放封闭原则")])]),n._v(" "),e("h4",{attrs:{id:"适配器模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[n._v("#")]),n._v(" 适配器模式")]),n._v(" "),e("p",[e("strong",[n._v("摘要")])]),n._v(" "),e("ul",[e("li",[n._v("旧接口格式和使用者不兼容")]),n._v(" "),e("li",[n._v("中间加一个适配转换接口")])]),n._v(" "),e("p",[n._v("有点像去香港,你需要到一个转换器,才能用那边的电给你在大陆带过去的手机充电")]),n._v(" "),e("p",[e("strong",[n._v("UML类图")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/adator.jpg",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("代码")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class Adaptee {\n    specificRequest(){\n        return '德国标准插头'\n    }\n}\n\nclass Target {\n    constructor(){\n        this.adaptee = new Adaptee()\n    }\n\n    request(){\n        let info = this.adaptee.specificRequest()\n\n        return `${info} - 转换器 - 中国标准插头`\n    }\n}\n\n// client\nlet target = new Target()\nlet res = target.request()\nconsole.log(res)\n\n")])])]),e("p",[e("strong",[n._v("场景")])]),n._v(" "),e("ul",[e("li",[n._v("封装旧接口")]),n._v(" "),e("li",[n._v("vue computed")])]),n._v(" "),e("h4",{attrs:{id:"装饰器模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#装饰器模式"}},[n._v("#")]),n._v(" 装饰器模式")]),n._v(" "),e("p",[e("strong",[n._v("介绍")])]),n._v(" "),e("ul",[e("li",[n._v("为对象添加新功能")]),n._v(" "),e("li",[n._v("不改变其原有的结构和功能")])]),n._v(" "),e("p",[n._v("手机壳 相当于一个装饰器， 可以让手机增加保护的功能，不容易摔坏，手机本来的功能不受影响")]),n._v(" "),e("p",[e("strong",[n._v("UML类图")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/decorator.png",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("代码演示")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class Circle {\n    draw() {\n        console.log('画一个圆形');\n    }\n}\n\nclass Decorator {\n    constructor(circle) {\n        this.circle = circle\n    }\n    draw(){\n        this.circle.draw()\n        this.setRedBorder(circle)\n    }\n    setRedBorder(circle){\n        console.log('设置红色边框');\n    }\n}\n\n// 测试代码\nlet circle = new Circle()\ncircle.draw()\n\nlet dec = new Decorator(circle)\n\ndec.draw()\n")])])]),e("p",[e("strong",[n._v("场景")])]),n._v(" "),e("ul",[e("li",[n._v("es7 装饰器")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 装饰类\n\n@testDec\nclass Demo {\n    //...\n}\n\n// target 指的是 Demo 这个类\nfunction testDec(target){\n    target.isDec = true\n}\n\nconsole.log(Demo.isDec)   // true\n\n// 原理\n@decorator\nclass A {}\n\n// 等于\nclass A {}\nA = decorator(A) || A\n\n\n//传参装饰器\n\nfunction testAgr(isDesc) {\n    return function(target){\n        target.isDec = isDesc\n    }\n}\n\n@testAgr(true)\nclass Demo {\n    \n}\n\n\n// 装饰器 mixins\n\nfunction mixins(...list){\n    return function(target){\n        Object.assign(target.prototype, ...list)\n    }\n}\n\nconst Foo = {\n    foo() {\n        console.log('foo');\n    }\n}\n\n@mixins(Foo)\nclass MyClass{\n\n}\n\nlet obj = new MyClass()\nobj.Foo()\n\n\n// 装饰方法\nfunction readonly(target, name, descriptor) {\n    descriptor.writable = false\n    return descriptor\n}\n\n\nclass Person {\n    constructor(){\n        this.first = 'A'\n        this.last = 'B'\n    }\n\n    @readonly\n    name() {\n        return `${this.first} ${this.last}`\n    }\n}\n\nlet p = new Person()\nconsole.log(p.name)  // A B\n// p.name = 100     //报错, name 只读\n\n\n\nfunction log(target, name, descriptor) {\n    let oldValue = descriptor.value\n    descriptor.value = function(){\n        console.log(`call ${name} width `,arguments);\n        return oldValue.apply(this, arguments)\n    }\n    return descriptor\n}\n\n\nclass Math {\n    @log\n    add (a, b) {\n        return  a + b\n    }\n}\n\nlet math = new Math()\nconst result = math.add(2, 4)\n\n\n")])])]),e("ul",[e("li",[e("p",[n._v("core-decorators\n第三方开源库      提供常用的装饰器")]),n._v(" "),e("p",[n._v("https://github.com/jayphelps/core-decorators")])])]),n._v(" "),e("p",[e("strong",[n._v("设计原则验证")])]),n._v(" "),e("ul",[e("li",[n._v("将现有对象和装饰器进行分享, 两者独立存在")]),n._v(" "),e("li",[n._v("符合开放封闭原则")])]),n._v(" "),e("h4",{attrs:{id:"代理模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[n._v("#")]),n._v(" 代理模式")]),n._v(" "),e("p",[e("strong",[n._v("介绍")])]),n._v(" "),e("ul",[e("li",[n._v("使用者无权访问目标对象")]),n._v(" "),e("li",[n._v("中间加代理,通过代理做授权和控制")])]),n._v(" "),e("p",[e("strong",[n._v("示例")])]),n._v(" "),e("ul",[e("li",[n._v("科学上网, 访问 github.com")]),n._v(" "),e("li",[n._v("明星经纪人")])]),n._v(" "),e("p",[e("strong",[n._v("UML类图")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/prox.png",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("代码")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class ReadImg {\n    constructor(fileName){\n        this.fileName = fileName\n        this.loadFromDisk()\n    }\n\n    display() {\n        console.log('display' +  this.fileName);\n    }\n\n    loadFromDisk(){\n        console.log('loading...'+this.fileName)\n    }\n}\n\nclass ProxImg {\n    constructor(fileName) {\n        this.realImg = new ReadImg(fileName)\n    }\n\n    display(){\n        this.realImg.display()\n    }\n}\n\n//测试\nlet proxyImg = new ProxImg('1.png')\nproxyImg.display()\n\n")])])]),e("p",[e("strong",[n._v("场景")])]),n._v(" "),e("ul",[e("li",[e("p",[n._v("网页事件代理")])]),n._v(" "),e("li",[e("p",[n._v("jQuery $.proxy")])]),n._v(" "),e("li",[e("p",[n._v("ES6 Proxy")])]),n._v(" "),e("li",[e("p",[n._v("明星 经纪人")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//明星\nlet star = {\n    name: 'yycu', \n    age: 25,\n    phone: 138000138000\n}\n\n//经纪人\nlet agent = new Proxy(star, {\n    get: function(target, key) {\n        if(key === 'phone') {\n            //经纪人电话\n            return '10086'\n        }\n\n        if(key === 'price'){\n            //明星不报价, 经纪人报\n            return 100000\n        }\n\n        return target[key]\n    },\n    set: function(target, key, val) {\n        if(key === 'customPrice'){\n            if(val< 1000) {\n                throw new Error('价格太低')\n            } else {\n                target[key] = val\n                return true\n            }\n        }\n    }\n})\n\n// 测试\nconsole.log(agent.name) //yycu\nconsole.log(agent.age)  // 25\nconsole.log(agent.phone) // 10086\nconsole.log(agent.price)  //100000\nagent.customPrice = 9\nconsole.log(agent.customPrice);\n\n")])])]),e("p",[e("strong",[n._v("设计原则验证")])]),n._v(" "),e("ul",[e("li",[n._v("代理类和目标类分离, 隔离目标类和使用者")]),n._v(" "),e("li",[n._v("符合开放封闭原则")])]),n._v(" "),e("h4",{attrs:{id:"外观模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外观模式"}},[n._v("#")]),n._v(" 外观模式")]),n._v(" "),e("p",[e("strong",[n._v("介绍")])]),n._v(" "),e("ul",[e("li",[n._v("为子系统中的一组接口提供了一个高层接口")]),n._v(" "),e("li",[n._v("使用者使用这个高层接口")])]),n._v(" "),e("p",[n._v("图示")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/outlook.png",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("示例")])]),n._v(" "),e("ul",[e("li",[n._v("去医院看病, 接待员去挂号, 门诊,还钱,取药")])]),n._v(" "),e("p",[e("strong",[n._v("uml类图")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/outlookclass.png",alt:""}})]),n._v(" "),e("p",[e("strong",[n._v("代码")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function bindEvent(elem, type, selector, fn) {\n    if(fn == null) {\n        fn = selector\n        selector = null\n    }\n}\n\n//调用\nbindEvent(elem, 'click', '#div', fn)\nbindEvent(elem, 'click', fn)\n\n")])])]),e("p",[e("strong",[n._v("设计原则验证")])]),n._v(" "),e("ul",[e("li",[n._v("不符合单一职责原则和开放封闭原则, 因此谨慎使用,不可以滥用")])]),n._v(" "),e("h4",{attrs:{id:"观察者模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[n._v("#")]),n._v(" 观察者模式")]),n._v(" "),e("p",[e("strong",[n._v("介绍")])]),n._v(" "),e("ul",[e("li",[n._v("发布 订阅")]),n._v(" "),e("li",[n._v("一对多  (一对一也可以)")])]),n._v(" "),e("p",[e("strong",[n._v("UML类图")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/observer.png",alt:""}})]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//主题,保存状态, 状态变化之后触发所有观察者对象\n\nclass Subject {\n    constructor(){\n        this.state = 0\n        this.observers = []\n    }\n\n    getState() {\n        return this.state\n    }\n\n    setState(state) {\n        this.state = state\n        this.notifyAllObservers()\n    }\n\n    notifyAllObservers() {\n        this.observers.forEach(observer=>{\n            observer.update()\n        })\n    }\n\n    attach(observer) {\n        this.observers.push(observer)\n    }\n    \n}\n\n//观察者\n\nclass Observer {\n    constructor(name, subject) {\n        this.name = name\n        this.subject =  subject\n        this.subject.attach(this)\n    }\n\n    update() {\n        console.log(`${this.name} update, state: ${this.subject.getState()} `);\n    }\n}\n\n//测试\nlet s = new Subject()\n\nlet o1 = new Observer('o1', s)\nlet o2 = new Observer('o2', s)\nlet o3 = new Observer('o3', s)\n\ns.setState(1)\n\n")])])]),e("p",[e("strong",[n._v("场景")])]),n._v(" "),e("ul",[e("li",[n._v("网页事件绑定")]),n._v(" "),e("li",[n._v("Promise")]),n._v(" "),e("li",[n._v("JQuery callbacks")]),n._v(" "),e("li",[n._v("nodejs 自定义事件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 事件绑定\n<button id=\"btn1\">btn</button>\n\n<script>\n $('#btn1').click(function(){\n     console.log(1)\n })\n $('#btn1').click(function(){\n     console.log(2)\n })\n $('#btn1').click(function(){\n     console.log(3)\n })\n $('#btn1').click(function(){\n     console.log(4)\n })\n<\/script>\n\n\n")])])]),e("h2",{attrs:{id:"综合示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#综合示例"}},[n._v("#")]),n._v(" 综合示例")])])}),[],!1,null,null,null);t.default=a.exports}}]);