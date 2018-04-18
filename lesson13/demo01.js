/**
 * Created on 2018/4/18
 */
//JS对象
var obj={
    name:"wubin",
    age:20,
    show:function(){
        console.log("我是"+this.name+"今年"+this.age+"岁了.");
    }
};
obj.show();//我是wubin今年20岁了.

console.log(typeof Math);//object
console.log(typeof JSON);//object
console.log(typeof Array);//function												
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
//函数也是对象

var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

//构造函数是函数也是对象

console.log(String instanceof Function);//true
console.log(String instanceof Object);//true

console.log(new Function() instanceof Function);//true
console.log((new(new Function())) instanceof Function);//false 是对象不是函数
console.log((new(new Function())) instanceof Object);//true

console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true 
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

//访问器属性，访问属性的方法，访问和设置时不加括号
var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
//get x()优先级高
var o = {
    x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//undefined
o.x = 2;
console.log(o.x,o._x);//2 2

var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;//2
console.log(o.x);//1

//访问器属性
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);
//请设置正常年龄
//23

var arr=[1,2,3];
arr.__proto__;
//[constructor: function, toString: function, toLocaleString: function, join: function, pop: function…]
arr.__proto__===Array.prototype;
//true
({}).__proto__===Array.prototype;
//false

//创建JS对象的方式
//1.通过对象字面量的方式直接创建对象
//2.通过Object的create静态方法创建对象
//3.通过构造函数的方式创建对象
var o={
   x:12
};
o.__proto__ === Object.prototype;//true

var o2=Object.create(o); 
o2.__proto__ === o;  //true

var Person=function(name){
   this.name=name;
}
var p=new Person("abc");
p.__proto__ === Person.prototype;//true
Person.__proto__ ===Function.prototype;//true

var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);

var obj={
   x1:12,
   x2:13,
   x3:14
}
for(var i=1;i<4;i++){
    conaole.log(obj["x"+i]);
}
//12 13 14
