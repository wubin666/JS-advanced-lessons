/**
 * Created on 2018/4/29
 */
//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x);
//5

var superObj = {
    show:function(){
        console.log(this.x,this.y);
    }
};
var subObj_First = Object.create(superObj);
subObj_First.x = 5;
subObj_First.y = 6;
subObj_First.show();
//5 6 

var superObj = {
    x:2,
    y:3,
    show:function(){
        console.log(this.x,this.y);
    }
};
var subObj_First = Object.create(superObj);
subObj_First.show();
// 2 3

function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

console.log(s1.name,s1.age,s1.id);//Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);//Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);//99

//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//Object {showName: function, constructor: function}

//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//function Student(name,age,id){
Person.call(this,name,age);
this.id = id;
}

//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
console.log(Person.prototype.constructor);
console.log(Student.prototype.constructor); 
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//function Person(name,age){
    this.name = name;
    this.age = age;
}
//function Person(name,age){
    this.name = name;
    this.age = age;
}
//function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}

//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){   //定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method

var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();
//1 This is a method in Base.prototype
//2 This is a method in instance1

//静态方法与原型方法的区别
//静态方法是构造器函数对象（类）的属性，原型方法是实例化对象（对象）的原型的属性

//constructor属性
//对象实例从原型中继承了constructor，所以可以通过constructor得到实例的构造函数
// 确定对象的构造函数名、创建相似对象、constructor可用于指定构造函数


//1.确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);
//Foo

//2.创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);
//Constr {name: "Mike"}
//true

//公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
a.getId();
//123
//123 456