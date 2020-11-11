/**
 * Typescript
    * 指定数据类型
    * 类型推论
        > 根据赋值的数据推断变量类型
 */

 let num:number = 100;
//  num = '100'; // Type '"100"' is not assignable to type 'number'
 console.log(num)

// 类型推论
 let username = 'laoxie';
//  username = 100;

// 联合类型

let price:number|string = 998;
price = '1998';

// 类型别名
type ns = number|string
let index:ns = 0;
let price2:ns = 998;


/**
 * 对象类型检查：接口Interface
    * 可选属性
    * 只读属性
    * 任意属性
 */ 

interface IGoods{
    id:number
    name:string
    readonly price:number 
    imgurl:string
    marketPrice?:number
    // [propName: string]: any // 任意类型，实际开发中不常用
    // getPrice():void
}
let goods1:IGoods = {
    id:1,
    name:'Huawei Mate40 Pro',
    price:5998,
    imgurl:'img/mate40.png',
    marketPrice:6998,
    // getPrice:function(){
    //     return 100
    // }
}
let goods2:IGoods = {
    id:2,
    name:'Huawei Mate40 Pro',
    price:5998,
    imgurl:'img/mate40.png',
    // kc:10,
    // salePrice:'abc',
    // getPrice(){

    // }
}

// goods2.price = 4998

// 数组类型校验
let arr1:number[] = [10,20,30];
let arr2:string[] = ['a','b','c'];
let arr3:Array<number> = [10,20,30];

interface IGoodslist{
    id:number
    name:string
    readonly price:number 
    imgurl:string
}
let goodslist:Array<IGoodslist> = [{
    id:1,
    name:'goods1',
    price:998,
    imgurl:'img/goods1.png'
},{
    id:2,
    name:'goods2',
    price:1998,
    imgurl:'img/goods2.png'
}];

// 元组
let arr:[number,number,string] = [10,20,'h5']


/**
 * 函数类型校验
    * 参数类型
    * 返回值类型
    * 可选参数
    * 参数默认值
 */

 // 声明式
function getData1(url:string,page?:number,size:number=10):number{
    return 100;
}
getData1('/api/user',1,10)
getData1('/api/user')

// 赋值式
const getData2:(url:string,page:number,size:number)=>void = function(url:string,page:number,size:number):void{
    // ajax
}

// 利用对象接口方式执行类型
interface IFn{
    (url:string,page:number,size:number):void
}
interface IData{
    total:number
    data:string[],
    msg:string
}
const getData3:IFn = function(url:string,page:number,size:number):IData{
    
    return {
        total:100,
        data:['test'],
        msg:'success'
    }
}

getData3('/list',1,5);


// 泛型编程
// 定义时不确定数据类型（所以需要给数据类型设置一个变量），在使用时才确定数据类型的编程方式
function add<T>(a:T,b?:T):T{
    return a;
}
add(10);//30
add('n');//nb