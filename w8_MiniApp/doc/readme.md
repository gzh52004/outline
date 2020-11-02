## 小程序

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