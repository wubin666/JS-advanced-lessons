/**
 * created on 2018/3/22
 */

//函数定义 声明方式
var str="return a<b?a:b";
var min=new Function("a","b",str);
min(2,3);
//2
var max=new Function("a","b","return a>b?a:b");
max(2,3);
//3
Function instanceof Function;
//true
typeof Function;
//"function"
function foo() {
     console.log("foo");
}
foo===window.foo;
//true

//对象方法调用
var obj = {
     name:"obj",
     x:23,
     test:function(){
        console.log(this.x,this);
     }
};
obj.test();
//23  Object {name: "obj", x: 23, test: function}


var x=45;
var test=function(){
   console.log("输出",this.x);
}
var obj={
   x:23
};
obj.test=test;
obj.test();//23
test();//45

var x=45;
var obj={
   x:23,
   test:function(){
      function foo(){
         console.log(this.x);
      }
      foo();
   }
};
obj.test();//45

//call与apply区别
//objA.foo.call(objB,x,y);
//objA.foo.apply(objB,[x,y]);

//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB
objA.foo.apply(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm:"+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);//i'm:ABC i can swim ___ 3 4
bird.fly.apply(me,[7,8]);//i'm:ABC i can fly ___ 7 8
var name=11;
bird.fly.apply(null,[7,8]);//i'm:11 i can fly ___ 7 8

arr=[1,2,3,4,5];
arr instanceof Array;//true
arr.x=6;
arr instanceof Array;//true
arr;//[1, 2, 3, 4, 5, x: 6]
Array.prototype.slice.call(arr);//[1,2,3,4,5]