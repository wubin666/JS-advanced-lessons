/**
 * Created on 2018/4/24.
 */
//JavaScript语言继承方式
//JavaScript采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null
//JavaScript的继承是对象-对象的原型继承，为面向对象提供了动态继承的功能
//任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象

var a={};
a.__proto__;
//Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
a.__proto__===Object.prototype;
//true
var b=new Object();
b.__proto__===Object.prototype;
//true
b.__proto__.__proto__;
//null
Object.prototype.__proto__;
//null

var div=document.createElement('div');
div.__proto__;
//HTMLDivElement {Symbol(Symbol.toStringTag): "HTMLDivElement", constructor: function}

var obj1={x:1}
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj3.y=3;

console.log(obj1,obj2,obj3);
//Object {x: 1} Object {y: 2} Object {y: 3}
obj2.x;//1
obj3.x;//1
obj3.__proto__.x=5;
obj3.x;//5
obj2.x;//5
obj1.x;//5

var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

obj.z = 5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;
console.log(obj.z);//3
//删除原型上的属性
delete  obj.__proto__.z;//delete proObj.z;
console.log(obj.z);//undefined
//hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法,找不到的话去原型链上去找

//原型上有一个sayhi方法，实例化出的对象有name，age
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};
var p=new Person("Mike",23);

p.sayHi();//Hi,i'm  Mike 21 years old!
p.__proto__===Person.prototype;//true
//p的原型对象是Person的prototype
Person.__proto__===Object.prototype;//false
Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true
Person.__proto__.__proto__.__proto__;//null
p1.constructor;//function Person(name){this.name = name;this.age = 21;}
p1.hasOwnProperty('constructor');
//false

'constructor' in p1;
//true

//p1自身没有constructor属性，而是定义在原型上
p1.__proto__.hasOwnProperty('constructor');//true 

//类比于Array
var arr=new Array;
arr.__proto__===Array.prototype;
//true
arr.__proto__.__proto__===Object.prototype;
//true
arr.__proto__.__proto__.__proto__===null;
//true