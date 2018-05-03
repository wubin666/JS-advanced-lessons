/**
 * Created on 2018/4/26.
 */
//变量的作用域传递
var a=1;
function f1(){
   var b=2;
   function f2(){
      console.log(a,b);
   }
   f2();
}
f1();//1 2
//但是this不进行作用域传递
//注意：不管哪种场景下调用，this指向的都是调用此函数的主体


//一般函数中的this
//通过this在函数内添加、删除、修改全局对象属性
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);
//20 新添加属性

function thisTest2(){
    var a=b=2;//等价于 var a=2;
    b=3;
}
thisTest2();
console.log(a);//报错

//对象方法中的this
//对象方法中的this指代调用此方法的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);
//Object {x: 1, y: 1, moveTo: function}


//构造函数中的this
var Person=function(name,age){
   this.name=name;
   this.age=age;
   this.showMe=function(){
       console.log(this.name,this.age);
   }
}
var p1=new Person("jack",50);
var p2=new Person("mack",20);
p1.showMe();
//jack 50
p2.showMe();//mack 20

function Person(age){
    this.age=age;
}
var p=new Person(23);
p.age;
//23

//间接调用中的this(call apply)
//JS中函数可以通过call和apply进行间接调用，动态的指定由谁来调用此函数
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
function test() {
    console.log(this.name,this.x);
};
objA.fun=test;
objA.fun();//AA 1
objA.fun.call(objB);//BB 5

//call和apply方法是定义在函数的原型上，不是本身
//Function.prototype.hasOwnProperty("call");//true


//this的缺陷和解决方法
//this不进行作用域传递、函数嵌套中的this存在缺陷

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到window
        }
        //内部嵌套函数
        function moveToY(){
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//Object {x: 0, y: 0, moveTo: function}

//方法一：使用变量（that或self）软绑定，使this指向正确
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//Object {x: 2, y: 2, moveTo: function}

//方法二：使用call/apply间接调用，使this指向正确
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.call(this);
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//Object {x: 2, y: 0, moveTo: function}


//方法三：使用Function.prototype.bind，使this指向正确
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);
//Object {x: 2, y: 2, moveTo: function}

//构造函数中的this同样存在函数嵌套缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);// 2 3

function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.call(this,x);

        moveY.apply(this,[y]);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);// 3 4

function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;
        function moveX(x) {
            that.x+=x;
        }
        function moveY(y) {
            that.y+=y;
        }
        moveX.bind(this,x)();
        moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//3 4