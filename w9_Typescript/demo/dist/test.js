"use strict";
/**
 * Typescript
    * 指定数据类型
    * 类型推论
        > 根据赋值的数据推断变量类型
 */
let num = 100;
//  num = '100'; // Type '"100"' is not assignable to type 'number'
console.log(num);
// 类型推论
let username = 'laoxie';
//  username = 100;
// 联合类型
let price = 998;
price = '1998';
let index = 0;
let price2 = 998;
let goods1 = {
    id: 1,
    name: 'Huawei Mate40 Pro',
    price: 5998,
    imgurl: 'img/mate40.png',
    marketPrice: 6998,
};
let goods2 = {
    id: 2,
    name: 'Huawei Mate40 Pro',
    price: 5998,
    imgurl: 'img/mate40.png',
};
// goods2.price = 4998
// 数组类型校验
let arr1 = [10, 20, 30];
let arr2 = ['a', 'b', 'c'];
let arr3 = [10, 20, 30];
let goodslist = [{
        id: 1,
        name: 'goods1',
        price: 998,
        imgurl: 'img/goods1.png'
    }, {
        id: 2,
        name: 'goods2',
        price: 1998,
        imgurl: 'img/goods2.png'
    }];
// 元组
let arr = [10, 20, 'h5'];
/**
 * 函数类型校验
    * 参数类型
    * 返回值类型
    * 可选参数
    * 参数默认值
 */
// 声明式
function getData1(url, page, size = 10) {
    return 100;
}
getData1('/api/user', 1, 10);
getData1('/api/user');
// 赋值式
const getData2 = function (url, page, size) {
    // ajax
};
const getData3 = function (url, page, size) {
    return {
        total: 100,
        data: ['test'],
        msg: 'success'
    };
};
getData3('/list', 1, 5);
// 泛型编程
// 定义时不确定数据类型（所以需要给数据类型设置一个变量），在使用时才确定数据类型的编程方式
function add(a, b) {
    return a;
}
add(10); //30
add('n'); //nb
