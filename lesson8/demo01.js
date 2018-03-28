/**
 * Created on 2018/3/28
 */
/*
- JS中每个函数都是作为对象来维护和运行的，即函数对象（既有属性也有方法）
- 可以将函数（函数对象）赋值给一个变量，或将函数作为参数进行传递
- 函数对象对应的类型是Function（类似于数组对象对应于Array、日期对象对应于Date）
- 如果变量是函数（函数对象）时，typeof此对象，返回function，而非object 
- 内置的函数对象（Array、Function、Date等），内置的非函数对象（Math、JSON）*/

console.log(typeof new Function());//function
console.log(typeof new Array());//object
console.log(typeof new Date());//object

console.log(typeof Function);//function
console.log(typeof Array);//function
console.log(typeof Date);//function
console.log(typeof Error);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true


function foo(x,y,z){}
console.log(foo.length);形参个数
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);
test();//output: test is called from ,call from the top level
function testOuter() {
    test();
}
testOuter();//call from the function testOuter

/*没有调用的情况下test.caller为： null

test is called from the toppest level
test is called from the function:
function testOuter() {
 test();

}*/

//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。

//原型
var o={}; o.__proto__===Object.prototype; //true
var a=[];
 a.__proto__===Array.prototype;  //true
Object.__proto__===Function.prototype;    //true

function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();
console.log(li.sex);
Man.prototype.isStrong = true;
console.log(li.isStrong);
/*
Hi,i'm Leo
M
true
*/

//函数对象方法之 bind 硬绑定
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();
		foo();
    }
};
obj.test();//23  45

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
    }
};
obj.test();//45

//在绑定功能中，this对象解析为传入的对象。
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
                var fee = foo.bind(this); 
                fee();
    }
};
obj.test();//23

//高阶函数，实现函数复用
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
console.log(foo(1,1,f1,f3));//1
console.log(foo(1,1,f3,f2));//2
console.log(foo(1,1,f1,f2));//4