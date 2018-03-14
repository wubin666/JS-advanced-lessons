/*
**created on 2018/3/11
*/
// 基本（原始）数据类型与引用（对象）类型的区别 内存分配方式不同
// 内存的分配方式影响变量的生命周期
// 函数局部变量中的值类型变量与引用类型变量
function f(){
    var n=10;
    var m=true;
    var str = "Hello World";
    // str:"Hello World"存在栈中
    var obj={ value: "Hello World" };
    //obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj(访问地址)访问
}
//a和b分配在栈区。
var a=23;
var b=34;



//基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
var str_a = "a"; 
var str_b = str_a;
str_b = "b";// str_b的值为"b",而str_a的值仍然是"a"
console.log(str_a,str_b);  //a b

var obj_a = {v:"a"}; // obj_a存的是引用，引用堆内存中存的对象:{v:"a"};
var obj_b = obj_a;// obj_b存的也是引用,引用了堆内存的值{v:"a"}；是引用赋值
obj_b.v = "b";// 通过obj_b访问(修改)堆内存的变量,这时候堆内存中对象值为:{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值，
// 所以这时候打印都是{v:"b"}
console.log(obj_a,obj_b);
   //Object {v: "b"} Object {v: "b"}
obj_b = {v:"c"}; // 注意：因为改的是整个对象，这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象，
// 所以这里打印的obj_a依旧是{v:"b"},而obj_b是{v:"c"}(两者在内存中引用的是不同对象了)。
console.log(obj_a,obj_b);
   //Object {v: "b"} Object {v: "c"}

//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
var obj_c = {x1:2,y1:3};//obj_c.x1在堆区
var obj_d = {x2:2,y2:3};

var a =123;
function f1(x){
	x = 345;
}
foo1(a);
console.log(a);//123

//
var a ={y:123};
function f2(x){
	x.y = 345;
}
foo2(a);
console.log(a.y);//345

//
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);//345

//
var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);//123