/**
 * created on 2018/3/29
 */
//预解析
console.log(a,b);//undefined  undefined
var b = 23;
console.log(a,b);//undefined  23
var a = b;
console.log(a,b);//23  23


console.log(obj1,obj2);//undefined  undefined
var obj1 = {x:23};
console.log(obj1,obj2);//Object {x: 23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//Object {x: 23} Object {x: 23} 
obj2.x =25;
console.log(obj1,obj2);//Object {x: 25} Object {x: 25} //指向同一块内存，值一起改变


foo();
var foo = function(){
    console.log("foo");
};//报错
//等价于
var foo;
foo();
foo = function(){
    console.log("foo");
};
//当function前有运算符的话，认定为表达式，不提升.

console.log(foo);

var foo=function(){

   console.log("foo");

};
foo();
//undefined foo


AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
//AA_1
//AA_2
//等价于
function AA(){
    console.log("AA_1");
}
var AA;//解析器不会进行二次声明，相当于无效的

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();


//词法作用域 与调用形式无关 详细内容参见作用域部分
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//Jack

var name = "Jack";
function echo() {
    console.log(name,age);
}
function foo() {
    var name = "Bill";
    var age="23";
    echo();
}
foo();
//报错，访问不到age

//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();
console.log(y);//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值