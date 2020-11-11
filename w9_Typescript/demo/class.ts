/**
 * class类
 */

 class Person {
    // 定义实例属性类型（默认为共有属性public）
    type:string='person';
    name:string;

    // 受保护（只能在当前类和子类中访问）
    protected gender:string;

    // 私有属性（ES6不支持私有属性，只能在当前类中使用，不能在实例中使用也不能在子类中使用）
    private readonly age:number;

    // 添加静态属性（ES6不支持静态属性，但支持静态方法）
    static typeof = 'Person'

    constructor(name:string,gender:string,age:number){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    say(){
       this.age;
    }
 }


 const p1 = new Person('laoxie','男',18);
 console.log('p1=',p1);
//  console.log('p1.age=',p1.age); //报错 
// p1.gender;// 报错

 class Student extends Person{
    constructor(name:string,gender:string,age:number){
        super(name,gender,age);

      //   this.age; // 报错

      this.gender;//
    }
 }

 const s1 = new Student('laoxie','男',18)
 console.log('s1',s1);
 console.log('s1.age',s1.age);