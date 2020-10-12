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
* JSX
    * 规则