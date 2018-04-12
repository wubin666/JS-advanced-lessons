/**
 * Created on 2018/4/11.
 */
//js中的IIFE模式
//IIFE为立即执行的函数表达式，作用：建立函数作用域，解决ES5作用域缺陷所带来的问题，如：变量污染、变量共享等问题

//两种写法：使用小括号的写法；与运算符结合的写法

//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
//the max is 3

(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()
//111
//222

//JS中没有块作用域，容易造成js文件内或文件间的同名变量互相污染
//我们往往会通过IIFE引入一个新的作用域来限制变量的作用域，来避免变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

//一长串代码后，假如看不见上述代码了
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;//重复定义，变量污染
    }
}());

function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//10
//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//3

//函数作为参数(高阶函数的一种）、静态词法作用域、IIFE
var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn);//15

