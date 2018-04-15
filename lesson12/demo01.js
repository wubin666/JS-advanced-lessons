/**
 * Created on 2018/4/12.
 */
//闭包
//引入案例
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
console.log(f3);//1
console.log(f3);//1

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
console.log(f3());//1
console.log(f3());//2

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1)); //6
console.log(inc(2)); //8
var inc2 = createInc(5);
console.log(inc(1)); //9
console.log(inc2(2));//7

//若一个函数离开了它被创建时的作用域，它还是会与这个作用域的变量相关联
//闭包是一个函数外加上该函数创建时所建立的作用域

//以函数对象形式返回
var tmp = 100;//词法作用域形成的闭包不包含此行的变量tmp
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2);
fee(10);//16
fee(10);//17
fee(10);//18

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1 c中的n已经reset为0
console.log(d.count());//2 d中的n没有reset

function fn() {
    var max = 10;//若屏蔽此行，则输出为100
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15

//闭包的实际应用
//因为闭包，所以a常驻内存，始终存在
//闭包，2秒之后执行，由于闭包所以objID此时还存在
function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);
//myDiv Closure is Create

//闭包使用的注意事项
//由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包
//使用闭包时要注意不经意的变量共享问题，可以通过立即执行表达式来解决
