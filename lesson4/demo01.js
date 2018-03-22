/**
 * created on 2018/3/19
 */
function f(a){
    console.log(a);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
f(1,2,3);
// 1
2
3
function foo(){  
    console.log("this:",this);
}
foo();
// this: Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}

// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全
function foo(){
   "use strict"
    console.log(this);
}
foo();
// undefined
"use strict"
function isStrictMode(){
   if(this==undefined){
return true;
}
   else{return false;}
}
console.log(isStrictMode());//返回true或false
//return this == window?false:true;
//严格模式下返回undefined
delete foo;
//true
"use strict"
delete foo;
//报错

//switch语句
var i = 65;
switch(new Boolean(true)){ //对象类型，三等===
   case i>=60:
       alert('及格');
       break;
   case i<60:
       alert('不及格');
       break;
   default:
       alert('default');
}
//default
//case (new Boolean(i>=60))://返回default,不指向同一内存，不等