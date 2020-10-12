## day5-1 React

### markdown语法
* 标题
* 列表
* 代码
    ```js
        const a = 100;
        const getData = function(){
            return 100;
        }
    ```

### 三阶段学习方式
* 项目为主导
* 如何学
    1. 整理
        > 了解学了什么
        * 方式
            * xmind思维导图 
            * markdown
        * 类型
            * 知识点
            * 遇到的问题bug
    2. 练
        > 熟悉知识点，日入500行
    3. 查
        > 锻炼查文档的能力
        * 技术文档
            * 官网
            * github.com
            * npmjs.com
            * 百度/google
        * 需求文档
    4. 项目
        > 锻炼团队协作能力

### 知识点
* 前端三大框架
    * Angular: 第一个版本anglarjs
    * React
    * Vue
* React特点
    * 高性能Virtual DOM：一个结构类似于DOM节点的js对象
        ```js
            // DOM树结构
            document
                html
                    head
                    body
                        h1
                        ul
                            li

        // 虚拟DOM
        {
            type:'document',
            children:{
                type:'html',
                chilren:[{
                    type:'head',
                    children:[]
                },{
                    type:'body',
                    children:[

                    ]
                }]
            }
        }

        const h1 = document.querySelector('h1');
        h1.innerText = 'laoxie';
        h1.innerText = 'linjie';
        h1.innerText = 'laoxie';


        ```
* 版本
    * cjs: commonJS
    * umd: AMD/CMD/window
        ```js
            window.jQuery
            window.React
        ```
* react使用
    * 引入
        * react.js
        * react-dom.js
    * 方法
        * ReactDOM.render(vNode,target)
            * vNode： 虚拟节点
            * target： 挂载目标节点
        * React.createElement(type,props,children) 创建虚拟节点
    * 真实DOM和虚拟DOM
        * 虚拟DOM：结构类似于真实DOM的js对象，多个虚拟节点组合成虚拟DOM树
        * 真实DOM：
* JSX
    > 浏览器不识别JSX，需要使用babel进行编译
    * 规则
        * 因为 Javascript 代码与 JSX 代码并不兼容，凡是使用 JSX 的 script 标签都需要加上 type="text/babel"
        * 不能使用js关键字
            * class -> className,
            * for -> htmlFor
        * 属性使用驼峰
            * tabindex -> tabIndex
            * autofocus -> autoFocus
            * onkeydown -> onKeyDown
            * ......
        * 必须结束标签
            ```jsx
                <input type="text" />
                <img src="logo.png" />
            ```
        * style 必须为对象，css 的属性必须为驼峰写法
            ```jsx
                <div style={{backgroundColor:"#f60"}}
            ```
        * 在JSX中使用js必须写在花括号{}内
        * 注释：使用 js 语法注释（如{/*注释内容*/}，//注释内容）

* 组件
    * 为什么需要组件（模块化）
        * 复用
        * 更新迭代
        * 分工
    * 分析与提取：工作中拿到设计图不要急着写代码，要先分析页面，提取组件
    * 分类
        * 函数组件（无状态组件）
        > 默认没有this
        ```js
            function Home(){
                return (
                    <div></div>
                )
            }
        ```
        * 类组件（状态组件）
        > 默认只有construtor、render、生命周期函数中可以直接使用this，自定义的函数需要手动绑定
        ```js
            class Home extends React.Component{
                render(){
                    return (
                        <div></div>
                    )
                }
            }
        ```
* 渲染数据
    * 单向数据绑定：{}
    * 列表循环：
        * key
        * map
        * filter
    * state
        * 获取：this.state.xxx
        * 修改: this.setState()
            > 不要直接修改原数据，而是创建一个新的数据并覆盖它
    * 事件绑定
        * 事件名必须使用驼峰写法
        * 改变函数this指向
            * bind()
* 组件通讯
    * 状态提升：把数据提取到组件共同的父级
    * 父->子： props
        1. 父组件操作：给子组件定义属性并传递数据
        2. 子组件操作：
            * 函数组件：函数的第一个参数为props
            * 类组件：this.props
    * 子->父
        * 把父组件的方法通过props传递到子组件中执行
* event对象中的target与currentTarget的区别
    * target: 事件源对象（触发事件的元素）
    * currentTarget： 绑定事件的元素
* 表单元素
    * 受控组件：把表单元素的值与组件的状态state进行绑定
    * 非受控组件: 通过传统的节点进行操作表单元素