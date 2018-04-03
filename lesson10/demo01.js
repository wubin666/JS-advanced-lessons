/**
 * created on 2018/4/3
 */
//作用域就是变量与函数的可访问范围
//在bar中访问a时为500（覆盖性）
//在bar中访问c时为200（链式关系）
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();//500 20 200 600
//变量d只能在bar作用域中被访问到，变量c只能在fn和bar作用域中被访问

//JS采用的是词法作用域（静态性），这种静态结构决定了一个变量的作用域
//词法作用域不会被函数从哪里调用等因素影响，与调用形式无关（体现了静态性）
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack

var scope = "global";
function checkScope(){
    var scope = "local";
    return function(){
         return scope;
    };
}
//通过new Function创建的函数对象不一定遵从静态词法作用域
console.log(checkScope()());//local
var scope = "global";
function checkScope(){
    var scope = "local";
    return new Function("return scope;");
}
console.log(checkScope()());//global

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};
//使用IIFE限制变量的作用域
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//userId =  123