## 专业术语
* hard code 硬编码

## 面试题
* Vue父子组件生命周期执行顺序
    1. 父组件beforeCreated
    2. 父组件的created
    3. 父组件的beforeMount
    4. 子组件beforeCreated
    5. 子组件的created
    6. 子组件的beforeMount
    7. 子组件mounted
    8. 父组件mounted
* React父子组件生命周期执行顺序
    1. 父组件constructor
    2. 父组件componentWillMount
    3. 父组件render
    4. 子组件constructor
    5. 子组件componentWillMount
    6. 子组件render
    7. 子组件componentDidmount
    8. 父组件componentDidMount

* 双向数据绑定原理
    > 定义：数据层的改变会引起视图层的变化，视图层的变化会引起数据层的改变
    * 分层
        * model     数据层
        * view      视图层
        * ViewModel 框架
    * 实现
        * Vue: v-model
            > v-model的替代方案：`v-bind:value` + `v-on:input`
        * React: 
            * 单向绑定：{}
            * 事件：change
    * 原理
        * Model -> View: 
            * 监听数据改变：getter/setter
        * View -> Model: 事件
* 数据流
    > 与组件层级相关
    * 单向数据流：父组件数据修改后会自动传入子组件
        > 谁的数据谁修改：把父组件的方法传入子组件执行
    * 双向数据流
        > angularJS（angular的第一个版本）
        * 父组件数据修改后会自动传入子组件
        * 子组件可以修改父组件传入的数据，修改后父组件会自动更新
* jquery链式调用的原理
    ```js
        $('div').attr('id','box').html('box').css('color','#f00')
        $('div').attr('id');// box
        $('div').html();// box
        $('div').css('color');// #f00
    ```
* 请求/响应拦截
```js
    const xhr = XMLHttpRequest()
    xhr.onreadystatechange = function(){
        // 利用xhr.readyState实现请求/响应拦截
    }
    xhr.open()
    xhr.send()
```
* session
    > http是一个无状态请求
    * 会话原理：
        1. 第一次请求：后端通过`Set-Cookie`响应头设置cookie(sessionid，浏览器会自动根据这个响应头设置cookie)，
        2. 第二个请求：请求发送时自动携带sessionid，这样后端就能识别两次请求为同一用户
    * 手机验证码
    * 图像验证码

### 优化

#### 性能优化
* 合并压缩
* 服务器压缩
* 按需加载
    * UI 框架按需加载
    * 路由懒加载
* 图片优化
    * base64 编码
* 事件委托
* 虚拟 DOM
* SSR
* 缓存Cache
    * ajax数据缓存
        ```js
            created(){
                if(!this.$store.state.done){
                    //ajax()
                }
            }
        ```
    * 浏览器文件缓存
#### 用户体验优化

#### 搜索引擎优化SEO
* 布局（内容，关键字）
* 语义化（html标签，属性，命名）
* SSR

#### 节流与防抖
* 节流：只生效第一次，忽略后面所有操作 
    * 案例：滚动加载更多
* 防抖：只生效最后一次，忽略前端所有操作
    * 案例：搜索建议


### 面试题
* socket心跳包
    * http与socket的区别
        * http为短连接
        * socket为长连接
    
* event loop
    * 单线程
    * 同步
    * 异步
```js
console.log(1);
setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    });
});
new Promise((resolve, reject) => {
    console.log(4);
    resolve(5);
}).then((data) => {
    console.log(data);
});
setTimeout(() => {
    console.log(6);
});
console.log(7);

console.log(1)
setTimeout(()=>{
    console.log(666)
},5000)
for(var i=0;i<100000;i++){
    // 10s
}
console.log(2);
```

* 闭包
    * 应用场景
```js
    function show(){
        var a = 10;
        return function(b){
            return a+b;
        }
    }

    const res = show();
    res()

    (()=>{
        var a = 100;

        btn.onclick = function(){
            console.log(a);
        }
    })()

    // 模块化
    // utils.js
    const baseUrl = 'xxxx'
    function getData(){

    }

    export default {
        getData
    }

    // 高阶组件
    connect(mapStateToProps)()

    function connect(a,b){

        return function(){
            return function InnerComponent(){

            }
        }
    }
```

* 正向代理： 代理客户端
* 反向代理： 代理服务器