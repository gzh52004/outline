# 小程序

## day8-1

### 介绍

### 准备工作
* 注册
* 资料填写
* 软件下载
* 软件介绍

### 开发类型
* 原生开发
* 框架开发

### 文件类型
* 根据扩展名分类
    * .json 配置文件   
        * 全局配置文件     app.json
        * 页面及别文件     index.json,logs.json....
        * 项目配置文件     project.config.json     
        * 网站地图         sitemap.json 
    * .js   逻辑文件              
    * .wxss 样式文件
        * rpx         
    * .wxml 布局文件
        *  内置组件       
    * .wxs  模块化脚本文件      
* 根据作用范围分类
    * 全局文件
    * 页面级别文件

* wxml常用语法
    * 数据绑定
        * 单向绑定：{{}}
            > 属性与标签中都需要使用双花括号
        * 双向绑定
            * 单向+事件
            * model:value
                > 目前只支持data的下的第一层数据

    * 列表循环: wx:for
        * key:只需要写入具有唯一性的属性名
        ```js
            // list = [{id:1,text:'x'},{id:2,text:'xx'},{id:3,text:'xxx'}]
            <view wx:for="{{list}}" key="id"></view>
        ```
        * 修改item/index默认名称
            * wx:for-item
            * wx:for-index
    * 事件绑定
        * bindtap
        * bind:tap
        * 传参
            * 自定义属性传参
* 路由
    * 页面类型
        * tabbar页面
        * 非tabbar页面
    * 声明式导航
        * <navigator>
            * url
            * open-type
    * 编程式导航
        * wx.switchTab      跳转tabbar页面，并关闭其他所有非 tabBar 页面
        * wx.navigateTo     保留当前页面，并跳转到非tabBar页面
        * wx.navigateBack   关闭当前页面，返回上一页面
        * wx.reLaunch       关闭所有页面，打开到应用内的某个页面(tabbar页面和非tabbar页面)
        * wx.redirectTo     关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面

    * 页面栈（浏览记录）
        > ['/home']

## day8-2

### 复习
* 文件类型
    * json配置文件
        * app.json              全局配置
        * project.config.json   项目配置
        * sitemap.json          
        * 页面配置文件
    * wxml结构文件
        * 内置组件
        * 自定义组件
    * wxss样式文件
        * rpx
        * 支持选择器
    * js逻辑文件
        * app.js                全局文件
            > App(options)
        * [page].js               页面级别文件
            > Page(options)
            * data  页面初始化数据
                * this.setData()
* 数据绑定
    * 单向绑定：{{}}
    * 双向绑定：
        * 单向+事件
        * model:value
* 事件绑定
    > 所有的手势都来自于touch事件（touchstart,touchmove,touchend）
    * bind      冒泡
    * catch     阻止传播
        * tap   手势
    * 捕获事件:capture-*
        > capture-bind:tap, capture-catch:tap
    * 事件对象：event
        * 给事件处理函数传参：自定义属性（data-*）
            > event.currentTarget.dataset
* 列表渲染：
    * wx:for
        * item
        * index
    * wx:key
        * 属性名
        * *this
    * wx:for-item   修改item名称
    * wx:for-index  修改索引名称
* 条件渲染
    * wx:if
    * wx:else
    * wx:elif
    * hidden
        > hidden与wx:if的区别就像vue中v-show与v-if的区别

    ```js
        <view wx:if="{{show}}">true</view>
        <view wx:else>flase</view>

        <view hidden="{{show}}">true</view>
    ```

* tabBar页面与非tabBar页面
* 路由（页面跳转）
    * 声明式导航
    * 编程式导航
        wx.xxx

### 知识点
* ui框架
    * weui-miniprogram
    * vant-weapp
* 在小程序中使用npm模块
    > 虽然在小程序中能使用第三方模块，但第三方模块会导致打包后的文件过大，所以谨慎使用
    1. 安装模块（一定需要有package.json文件）
    2. 构建npm
        > 在项目根目录生成`miniprogram_npm`目录
* 在小程序发起ajax
    * wx.request()
    * 二次封装
* 滚动加载（懒加载）

## day8-3

### 知识点
* 内置组件
* 特殊组件
    * <block>
    * <wxs>
    * <template>
    * <import>
    * <include>

* 模块化
    * js模块化
        * ESModule
        * commonJS
    * wxs模块化
        > 遵循commonJS规范的模块
* wxml模板
    1. 利用template组件定义模板内容，并设置name属性
    ```html
        <template name="datalist"></template>
    ```
    2. 在需要的页面利用`<import>或<include>`引入模板文件
    ```html
        // 引入所有template
        <import src="../template/template.wxml" />
    ```
    3. 在需要的位置使用模板内容
    ```html
        <template is="datalist" data="" />
    ```




## day8-4

### 知识点
* 自定义组件
    > Component(options)
    ```js
        // app.js
        App(); //注册一个应用

        // 页面page.js
        Page(); // 注册一个页面

        // 组件定义
        Component()
    ```
* 组件的使用
    > 在json文件中的`usingComponents`字段定义组件名称与路径（app.json定位的组件为全局组件，否则为局部组件）
    * 局部组件
    * 全局组件
* 自定义TabBar
    1. 在根目录下创建`custom-tab-bar`目录
    2. 在目录中定义`index`组件
        * index.json
        * index.js
        * index.wxml
        * index.wxss
    > 注意：只有在tabBar页面才会显示自定义tabBar，可以在页面中通过`getTabBar()`获取tabBar实例

* 上线流程
    1. 开发与测试（自测）
        > 微信开发这工具中测试
    2. 真机测试
        > 扫码测试
    3. 测试团队测试
        > 体验版
    4. 提交审核
        > 1-7个工作日知道结果
    5. 发布
        > 审核通过，可发布上线

## day8-5

### 知识点
* 小程序跨平台框架
    > 跨平台框架编写了每个平台对应的编译器，并统一接口、组件等api，实现一套代码分别编译到不同的平台
* uni-app
    > 是一个使用 Vue.js 开发所有前端应用的框架
    * 文件结构
        * 全局
            * js        App.vue中的script
            * json      pages.json中的globalStyle
            * wxss      App.vue中的style
        * 页面
            * js        [page].vue中的script
            * json      pages.json中的pages
            * wxss      [page].vue中的style
            * wxml      [page].vue中的template

* wepy

* taro
    * 文件结构
        * 全局
            * app.js        app.jsx
            * app.json      app.config.js
            * app.wxss      app.scss
        * 页面
            * index.js      index.jsx
            * index.json    index.config.js
            * index.wxss    index.scss
            * index.wxml    index.jsx


```
    process.env.NODE_ENV
    const content = '<div style="color:#f00"><button></button></div>'
    {content} => &lt;div>&gt;
    <div dangerouslySetInnerHTML={{__html:content}}></div>
```

* mobx
    * 在react中使用mobx可以利用一个桥接工具：mobx-react
        1. Provider利用Context技术共享store
        2. 利用高阶组件定义传入组件的props
            * inject('store') 用于定义传入组件的props
            * observer 用于监听数据修改，在数据修改时刷新组件