/**
 * class类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, gender, age) {
        this.type = 'person';
    }
    return Person;
}());
var p1 = new Person('laoxie');
console.log('p1=', p1);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, gender, age) {
        return _super.call(this, name, gender, age) || this;
    }
    return Student;
}(Person));
var s1 = new Student('laoxie', '男', 18);
