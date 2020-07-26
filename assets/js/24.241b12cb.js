(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{341:function(t,e,n){"use strict";n.r(e);var a=n(33),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),n("h2",{attrs:{id:"create-react-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[t._v("#")]),t._v(" create-react-app")]),t._v(" "),n("p",[t._v("可以全局安装, 也可以通过 npx 安装  (npx 下载 该包并使用该包, 确保每次都是最新版的)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("> npx create-react-app my-app        {/*创建了一个my-app项目\n")])])]),n("p",[t._v("创建完成后, 可以在要目录下 运行")]),t._v(" "),n("p",[n("code",[t._v("npm run start")]),t._v("  启动项目  start 命令可以省略 run")]),t._v(" "),n("h2",{attrs:{id:"文件目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件目录"}},[t._v("#")]),t._v(" 文件目录")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("|-- node_modules\n|-- public\n    |-- favico.ico      浏览器标签页的小图标\n    |-- index.html      模板\n    |-- manifest.json    \n|-- src   项目的所有源代码都在这个目录下\n    |-- App.js       组件\n    |-- index.js     整个程序的入口文件       除了这两个文件其它的可以删除了\n|-- .gitignore\n|-- package.json\n|-- yarn.lock 或 package-lock.json\n|-- README.md\n")])])]),n("h2",{attrs:{id:"react-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-组件"}},[t._v("#")]),t._v(" react 组件")]),t._v(" "),n("p",[t._v("组件就是页面的各个部分")]),t._v(" "),n("p",[t._v("如: 头部组件   搜索框组件,它又可以分为输入组件和按纽组件")]),t._v(" "),n("p",[t._v("组件显示的内容, 由组件里的 render 返回的内容决定 (函数组件,则由函数返回值决定)")]),t._v(" "),n("p",[n("strong",[t._v("jsx 组件 开头, 必须以大写字母开头")])]),t._v(" "),n("h2",{attrs:{id:"react-基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-基础"}},[t._v("#")]),t._v(" react 基础")]),t._v(" "),n("h4",{attrs:{id:"一个类组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一个类组件"}},[t._v("#")]),t._v(" 一个类组件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import React, { Component } from 'react'\n {/* import React, { Component, Fragment } from 'react'\n {/* render 就可以直接 用 Fragment 不用  React.Fragment\n\nimport \"./style.css\"\n\nexport default class TodoList extends Component {\n\n    constructor(props) {       {/*构造函数固定写法\n        super(props)\n        this.state = {        {/* 定义组件的状态\n            inputValue: '',\n            list: []\n        }\n         {/* 绑定this 如果是箭头函数就不用bind\n        this.handleInputChange = this.handleInputChange.bind(this)\n    }\n\n    render() {\n        return (\n            <React.Fragment>\n                <div className=\"sucess\">\n                    {/*  input显示的内容同 this.state.inputValue*/}\n                     {/* jsx 使用js 需要写在 {} 内 */}\n                    <input \n                        value={this.state.inputValue}\n                        onChange={this.handleInputChange}\n                     /> \n                     {/*绑定事件, 它和原生事件是有区别的,react是on + 首字母大写的事件名称, 原生是小写*/}\n                    <button>提交</button>\n                </div>\n                <ul> \n                    {    {/* key 值需要唯一的 */}\n                        this.state.list.map((item,index)=> {\n                            return (<li \n                            key={inonClickdex}\n                             {/* 如果不套个函数,就不能传参了, 没套直接 this.fn(arg) 是执行函数*/}\n                             {/* 即代码走到这,不是给事件绑定函数,而是在这里执行了函数*/}\n                             {/* 套个函数, 等于给绑定的是 套的那个函数, 在函数里执行真正需要的函数*/}\n                            onClick={()=> this.handleDelete(index)}\n                            >{item}</li>)\n                        })\n                    }\n                </ul>\n            </React.Fragment>\n        )\n    }\n     {/* 使用箭头函数, 绑定了this */}\n     {/* 也可使用bind 即在 constructor 构造函数里绑定 */}\n    handleInputChange = (e)=>{\n        e.target.value\n        this.setState({\n            inputValue: e.target.value    {/*只有通过setState 更新数据,视图才会更新 */}\n        })\n\n        // 新版的react 已经不提倡这样来用setState了, 而是要像下面这样用\n        const value = e.target.value  //在外面先存起来,是一个好的习惯,不然的可能报错\n        this.setState((prevState)=>{\n            return {\n                inputValue: value\n            }\n        })\n        // prevState 等价于 this.state\n        //箭头函数简写\n        this.setState((prevState)=>({\n            inputValue: value\n        }))\n    },\n        \n    handleDelete = (index)=>{\n         {/* immutable */}\n         {/* state 不允许我们做任务改变, 不然后期性能优化很麻烦*/}\n\n       const list = [...this.state.list]      {/* 复制一份 */}\n       list.splice(index, 1)                   {/* 在复制的上面改*/}\n       this.setState((prevState)=>{\n           const list = [...prevState.list]\n           list.splice(index, 1)         //把对数据的操作写在里面,更好看\n           return { list }\n       })\n    }\n    \n\n}\n")])])]),n("ul",[n("li",[t._v("return 返回的jsx 必须有且只有一个 根原素")]),t._v(" "),n("li",[t._v("<React.Fragment> 是一个虚拟的元素,不生成任何元素,类似于 vue的template")])]),t._v(" "),n("h4",{attrs:{id:"注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("{/* 注释 */}\n\n{/* 注释 注释注释注释 \n*/}\n\n{/*\n 注释 注释注释注释 \n*/}\n\n// 上面的注释, 都是对的\n \n // 单行注释只能像下面这样写\n\n {\n     //  注释      为什么只能这样写, 因为如果 } 在这里,也会被当做注释的内容, 那就永远少了个 }\n }\n")])])]),n("h4",{attrs:{id:"css-class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-class"}},[t._v("#")]),t._v(" css class")]),t._v(" "),n("ul",[n("li",[t._v("jsx 语法中需要使用到css的class , 要写成 className 来替代")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div className="sucess">\n')])])]),n("h4",{attrs:{id:"dangerouslysetinnerhtml-渲染html-而不转义它"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dangerouslysetinnerhtml-渲染html-而不转义它"}},[t._v("#")]),t._v(" dangerouslySetInnerHTML  渲染html, 而不转义它")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    <div\n        dangerouslySetInnerHTML={{__html: item}}\n        // 第一个{} 表示里面是js语法,  里面的 {__html: item}  是一个对象   item 是要渲染的html\n    >\n\n    </div>\n")])])]),n("h4",{attrs:{id:"label-for-属性-要用-htmlfor-替代"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#label-for-属性-要用-htmlfor-替代"}},[t._v("#")]),t._v(" label for 属性  要用 htmlFor 替代")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// react 不能这样写 <label for="inputArea">name</label><input id="inputArea">\n<label htmlFor="inputArea">name</label><input id="inputArea">     \n')])])]),n("h4",{attrs:{id:"父组件通过属性传数据给子组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父组件通过属性传数据给子组件"}},[t._v("#")]),t._v(" 父组件通过属性传数据给子组件")]),t._v(" "),n("p",[t._v("//父组件\n// 属性可以传,  方法也可以传")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<Son \n    content={数据,你想传给子组件的} \n    index={index}\n    handleClick={this.hanleClick}  \n    //如果不是箭头函数写的方法, 则这里需要bind {this.handClick.bind(this)}\n    ></Son>\n")])])]),n("p",[t._v("// 子组件  Son")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<div onClick ={ this.handleClick}>{this.props.content}</div>\n\nhandleClick = () => {\n    // 不允许 子组件 直接 修改父组件的数据\n    // 通过父组件 传递过来的方法 来删除父组件的数据\n    this.props.handleClick(this.props.index)\n}\n")])])]),n("h2",{attrs:{id:"属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("h4",{attrs:{id:"proptypes-与-defaultprops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proptypes-与-defaultprops"}},[t._v("#")]),t._v(" PropTypes 与 DefaultProps")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\n\n\nclass TodoItem extends Component {\n    constructor(props) {\n        super(props)\n    }\n\n    render() {\n        const { content } = this.props;\n\n        return (\n            <div onClick={this.handleClick}>\n                {content}\n            </div>\n        )\n    }\n\n    handleClick = () => {\n        const { deleteItem, index} = this.props;\n        deleteItem(index)\n    }\n    \n}\n\n\nTodoItem.propTypes = {            //这个propTypes p小写,它是要对这个组件,属性进行校验的意思\n    content: PropTypes.string ,  //这个PropTypes是我们上面import的那个PropTypes,要和上面一样\n    deleteItem:　PropTypes.func,\n    index: PropTypes.number,\n    test: PropTypes.string.isRequired, //字符串, 必传\n    text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //或者,是数字,或是字符串\n}\n\nTodoItem.defaultProps = {\n    test: 'Hello world',  // 设置默认值\n}\n\n\nexport default TodoItem\n\n")])])]),n("ul",[n("li",[t._v("需要先引入")]),t._v(" "),n("li",[t._v("再通过与组件同名的 TodoItem.propTypes 设置")]),t._v(" "),n("li",[t._v("TodoItem.defaultProps 设置默认值")])]),t._v(" "),n("h2",{attrs:{id:"props-state-render函数三者关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#props-state-render函数三者关系"}},[t._v("#")]),t._v(" props state render函数三者关系")]),t._v(" "),n("p",[t._v("当组件的state 或者 props 发生改变的时候, render函数就会重新执行")]),t._v(" "),n("p",[t._v("当父组件的render函数被运行时,它的子组件的render都将被重新运行")]),t._v(" "),n("h2",{attrs:{id:"虚拟dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[t._v("#")]),t._v(" 虚拟DOM")]),t._v(" "),n("p",[t._v("react 在数据与模版结合生成生成一个虚拟的DOM,")]),t._v(" "),n("p",[t._v("用虚拟DOM生成真实的DOM,显示在页面")]),t._v(" "),n("p",[t._v("虚拟DOM就是一个JS对象,用它来描述真实的DOM.")]),t._v(" "),n("p",[t._v("当数据state发生变化后,就会生成一个新的虚拟DOM")]),t._v(" "),n("p",[t._v("然后比较原始虚拟DOM 和 新的虚拟DOM的区别, 找到区别的地方")]),t._v(" "),n("p",[t._v("直接操作(有区别的)DOM, 改变(有区别的)DOM的内容")]),t._v(" "),n("p",[t._v("js创建虚拟DOM,即js对象,它性能消耗极低,  js操作DOM性能消耗才大.")]),t._v(" "),n("p",[t._v("把对DOM的操作减少到极少, 提升了性能")]),t._v(" "),n("p",[t._v("在render 看到div 标签不要以为是真是的DOM, 实际上它是一个jsx的语法\nrender 是 jsx -> js对象 -> 真实的DOM")]),t._v(" "),n("h2",{attrs:{id:"ref"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),n("p",[t._v("主要用来操作DOM")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<input\n    ref={(input)=> {this.input = input}}  // 这个函数的参数就可以这个dom, 名字随便起,\n                                          //再把它赋值到 实例this 上面\n/>\n// this.input 指向的是这个 dom\n\n然后就可以在方法里使用它\n\nhandleInputChange = ()=>{\n    const value = this.input.value\n}\n\n")])])]),n("ul",[n("li",[t._v("尽量不要用ref")]),t._v(" "),n("li",[t._v("动画,不可以避免才需要使用")]),t._v(" "),n("li",[t._v("数据更新后,需要获取DOM,请把获取DOM的操作放到setState的回调函数里执行,才能得到最新的")])]),t._v(" "),n("h2",{attrs:{id:"生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),n("p",[t._v("生命周期函数指在某一个时刻组件会自动调用执行的函数")]),t._v(" "),n("p",[n("img",{attrs:{src:"/images/reactlife.png",alt:""}})]),t._v(" "),n("p",[t._v("4-9")])])}),[],!1,null,null,null);e.default=s.exports}}]);