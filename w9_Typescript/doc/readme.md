# Typescript(TS)
> 在编译阶段检查代码问题，并输出错误，虽然有错误，但编译器仍然成功变成到js代码

```js
    // 数据类型
    let num = 100; // Number

    num = 'laoxie'; // String

    num.toFixed(2) ; // num.toFixed is not a function
```

## 语法
* 基本类型
    * 类型注解和类型检查
        > 要求定义变量时指定类型
    * 类型推论
        > 变量类型会根据赋值的数据而确定
        ```js
            let num = 10;// 等效于：let num:number = 10
            let qty;     // 等效于：let qty:any = undefined
        ```
* 对象： **接口**
* 数组：
    * `类型[]`
    * 泛型：`Array<类型>`
    * 接口
* 元组
* 函数
    * 声明式
        * 参数类型
        * 返回值类型
    * 赋值式
        * 给函数定义类型
        * 给变量定义类型
        * 参数类型
        * 返回值类型
* 泛型编程
    > 在定义函数、接口或类时不指定类型，使用时才指定类型的编程方式