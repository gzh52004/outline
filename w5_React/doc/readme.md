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


## day5-2

### 面试题
* call,apply,bind的区别
    * 共同点
        * 都是函数的原型方法
        * 都能改变函数的this指向
    * 区别
        * call和apply会执行函数，bind不会执行函数（返回一个新的函数）
        * call可以有多个参数，apply执行有2个参数，且第二个参数为数组

    ```js
        const getData = function(a,b){
            console.log(this,a,b);
        }

        getData();// window,undefined,undefined

        getData.call(document,10,20,30,40);// 改变this指向到document，并执行getData函数
        getData.apply(document,[10])
        const getDatas = getData.bind(document,10,20);
        getDatas();// document,10,20
    ```

### 知识点
* MVVM中思维模式的改变： 节点操作 -> 数据驱动
* bind
* 组件通讯
    * 父->子： props
    * 子->父： props
    * 兄弟->兄弟：状态提升
    * 深层次组件通讯：
        * 逐层传递（不推荐）
        * Context
            1. 创建 Context
                > React.createContext(defaults)
            2. 父组件共享数据: 父组件往Context中存入数据并提供给它的子组件使用
                > MyContext.Provider，如父组件没有共享数据，子组件获取时得到初始化数据
            3. 子组件获取数据
                * Consumer
                    * 函数组件
                    * 类组件
                * contextType静态属性
                    * 类组件
* 手动配置基于webpack的React环境
    * webpack是一个基于配置的打包工具
    * gulp是一个基于任务的打包工具
    * webpack常用配置
        * entry
        * output
        * devServer
        * loader: module.rules
        * plugins
* npm script
* yarn
    * 安装：npm install xxx   yarn add xxx
    * npm view xxx versions

## day5-3

### 复习
* 组件通讯
    * 深层次组件通讯
        * 逐层传递（推荐）
        * Context
            1. 创建Context
                ```js
                    const MyContext = React.createContext(initData)
                ```
            2. 父组件共享数据
                ```js
                    <MyContext.Provider value={{}}>
                        // 子组件
                    </MyContext.Provider>
                ```
            3. 子组件接收数据
                * Consumer
                    > 使用于函数组件和类组件
                    ```js
                        <MyContext.Consumer>
                            {
                                (value)=>{
                                    return <div>

                                    </div>
                                }
                            }
                        </MyContext.Consumer>
                    ```
                * contextType
                    > 只适用于类组件，需要给类组件添加一个静态属性
                    ```js
                        class TodoForm extends React.Component{
                            // this.context
                        }

                        TodoForm.contextType = MyContext;
                    ```
    * webpack
        > 从0配置基于webpack的React环境
        * 工作原理： 从入口开始分析项目所有的依赖，并通过配置的加载器编译对应的文件，并打包成需要的文件
        * 常用配置
            * entry     入口
            * output    出口（编译时的输出配置）
            * devServer
                > webpack-dev-server
            * loader: module.rules
            * plugins

### 知识点
* 模块化开发（组件化开发）
* 生命周期函数
    * Initial: 初始化阶段
        * constructor
    * Mounting：挂载阶段
        * componentWillMount （不推荐，17.x版本后会改名为：UNSAFE_componentWillMount）
        * componentDidMount
    * Updating：更新阶段
        * componentWillUpdate（不推荐）
        * componentDidUpdate
    * Unmounting：卸载阶段
        * componentWillUnMount
    * 特殊生命周期函数
        * shouldComponentUpdate
        * componentWillReceiveProps （不推荐）
* React组件什么时候会刷新
    * state改变
    * props改变
    * 父组件刷新（即使它依赖的数据没有更新）
        > 一般要对这种情况进行性能优化
    * 强制刷新：this.foreUpdate()
        > 不推荐使用
* React.Component与React.PureComponent的区别
    > PureComponent内部做了shouldComponentUpdate的判断


### ReactRouter
> 万物皆组件
* 引入
    * react-router.js
    * react-router-dom.js
* 使用
    * 路由模式
        * HashRouter
        * BrowserRouter
    * 路由渲染
        * Switch
        * Route
            * path
            * component
            * render
            * exact
        * Redirect
            * from
            * to
            * exact
    * 路由跳转
        * Link
            * to
            * replace
        * NavLink
            * to
            * replace
            * activeStyle
            * activeClassName


## day5-4

### 复习
* 生命周期函数
    > 只有类组件才具有生命周期函数
    * 初始化阶段
    * 挂载阶段
        * componentDidMount
    * 更新阶段
        > 组件什么情况下会刷新：
            * state改变
            * props改变
            * 父组件刷新
            * 强制刷新（直接执行render方法）
        * componetDidUpdate
            > 一般用于监听值的修改
            * 在该生命周期函数中使用this.setData()时要注意避免死循环（需要添加条件判断）
    * 销毁阶段
        * componetWillUnmount
            > 一般用于清除定时器，取消ajax请求等操作
    * 特殊生命周期函数
        * shouldComponentUpdate(nextProps,nextState)
    * 性能优化
        * PureComponent优化方案
        * shouldComponentUpdate优化方法
* ReactRouter
    > 一切皆组件
    * 路由类型
        * HashRouter
            > 原理：hashchange事件
        * BrowserRouter
    * 渲染组件
        * Route
        * Redirect
        * Switch
    * 导航
        * 声明式导航
            * Link   react-router.js
            * NavLink   react-router-dom.js
        
    
### 知识点
* 编程式导航: 利用js来实现页面跳转
    * 跳转方式
        * history.push()
        * history.replace()
    * 如何获取history,location,match
        * Route渲染
            > 当前组件是通过Route渲染的，则history会通过props传入组件
        * withRouter高阶组件


    ```js
        // vue
        this.$router.push()
        this.$router.replace()

        
    ```
* 高阶组件HOC（High Order Component）
    * 高阶组件是一个**纯函数**
        > 纯函数: 不修改传入的参数，固定的输入有固定的输出
    * 高阶组件的参数为组件，返回值为新组件
    * 高阶组件是一种设计模式，类似于装饰器模式

    ```js
        function sum(a,b){
            return a+b;
        }

        sum(1,2);//3
        sum(1,2);//3

        function randomNumber(min,max){
            return parseInt(Math.random()*(max-min+1))+min
        }
        randomNumber(10,20);//15
        randomNumber(10,20);//15

    ```
    * 应用场景
        * 属性代理：
            * 引用：提取公共部分，向下传输 props
        * 反向继承
            * 应用：用户访问权限控制（页面需要用户登录后才可访问）

    * ES7装饰器：@
        > 需要`@babel/plugin-proposal-decorators`插件的支持

## day5-5

### 复习
* 高阶组件
    * withRouter
    * 一个纯函数
    * 返回一个组件
    * 是一个包装函数（装饰器模式）
    * 定义方式
        * 属性代理
        * 反向继承
            * super
    * ES装饰器: @
* ant-design
### 知识点
* 路由传参
    * 动态路由
    * state
        > state在页面刷新后消失
    * search
        > 只支持字符串写法：`search:'?id=xxx'`
* 接收参数
    * 动态路由：`props.match.params.xxx`
    * state: `props.location.state.xxx`
    * search: `props.location.search`
        > 需要手动提取参数值

* webpack路由别名
    * resolve.alias
    ```js
        {
            resolve:{
                alias:{
                    '@':path.resolve('./src')
                }
            }
        }
    ```


## day 6-1

### 知识点
* 加密解密
    * 分类
        * 单向加密
            * md5
            * sha1
            * sha256
            * sha512
        * 双向密码
            * 对称加密: 加密解密公用一把钥匙
                >
            * 非对称加密：
                * 两把钥匙
                    * 公钥： 公钥加密 -> 私钥解密（加密）
                    * 私钥： 私钥加密 -> 公钥解密（签名）
        * http/https
            * ssl
            * 端口：