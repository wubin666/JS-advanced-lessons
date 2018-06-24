/**
 * Created on 2018/6/23
 */
//ES6对函数的扩展
//-箭头函数语法简单地描述为：参数=>函数体 或 (参数)=>{函数体}
//-优点：可减少冗余的代码(如function关键字等)节省空间，避免this指向错误
//-如果箭头函数没有参数或需要多个参数时，就使用一个圆括号代表参数部分
//ES5的写法
var max=function(a,b){
	return a>b?a:b;
};
max(2,3);  //3

//ES6的写法
var max=(a,b)=> a>b?a:b;
max(2,6);  //6

//箭头函数需注意的几个点
//-函数内this是与函数定义时所在的对象绑定，而不是使用时所在的对象(避免this缺陷)
//-大括号被解释为代码块，所以如果箭头函数直接返回一个对象，需在对象外面加上括号

var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		//内部嵌套函数
		var moveToX= ()=> this.x=x;  //this.x是与函数定义时所在的对象绑定，即point
		var moveToY= ()=> this.y=y;  //所以 this.x是x:0的x
		moveToX();
		moveToY();
	}
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 2, moveTo: ƒ}

var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		//内部嵌套函数
		var moveToX= ()=> this.x;  //this.x指的是对象point的x：0的x
		var moveToY= ()=> this.y;
		moveToX();
		moveToY();
	}
};
point.moveTo(2,2);
console.log(point);
//{x: 0, y: 0, moveTo: ƒ}

//ES6对函数参数默认值的扩展
//-ES5中不能直接为函数的参数指定默认值，需通过||来实现
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//本应为1+0+0，但此处为1+4+5

//ES6允许为函数的参数设置默认值
//-直接写在参数定义的后面，比ES5更加直观
//-不会出现在ES5中实参转换为布尔类型的问题
var sum=function(a,b=4,c=5){
	return a+b+c;
}
console.log(sum(1));  //10  //只传了一个参数，所以默认4,5
console.log(sum(1,0,0));  //1

function foo(x=5){
	let x=1;      //报错 因为参数x有默认值5，所以默认声明的参数，所以不能再用let或const重复声明
	const x=2;    //报错
}
foo();

function f(x=1,y){
	return [x,y];
}
f();  //[1, undefined]

function f(x=1,y){
	return [x,y];
}
f(2);  //[2, undefined]

//ES6中的Rest与Spread
//...rest(剩余运算符)
function f(...y){
    console.log(y);
}
f("a","b","c");//输出 ["a","b","c"]

//...spread(扩展操作符)
function a(x,y){
    console.log(x,y);
}
var arr=[1,2];
a.apply({},arr);
a.call({},arr[0],arr[1]);
a.call({},...arr);//等效于上面一个
//1 2  
//1 2
//1 2