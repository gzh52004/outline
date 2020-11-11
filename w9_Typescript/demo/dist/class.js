"use strict";
/**
 * class类
 */
class Person {
    constructor(name, gender, age) {
        // 定义实例属性类型（默认为共有属性public）
        this.type = 'person';
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    say() {
        this.age;
    }
}
// 添加静态属性（ES6不支持静态属性，但支持静态方法）
Person.typeof = 'Person';
const p1 = new Person('laoxie', '男', 18);
console.log('p1=', p1);
//  console.log('p1.age=',p1.age); //报错 
// p1.gender;// 报错
class Student extends Person {
    constructor(name, gender, age) {
        super(name, gender, age);
        //   this.age; // 报错
        this.gender; //
    }
}
const s1 = new Student('laoxie', '男', 18);
console.log('s1', s1);
console.log('s1.age', s1.age);
