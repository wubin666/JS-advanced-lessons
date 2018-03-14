/*
**created on 2018/3/14
*/
//包装对象
//基本数据类型都有对应的包装对象类型，可以将其包装成对象。
//基本数据类型包装不影响原始值
//引用数据类型包装影响原始值
var a = 123;
var b = new Number(a);

console.log(a == b);//true
console.log(a === b);//false

//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值
//5
//5  “abcde”

var arr=[1,2,3,4,5];
arr.length=1;
console.log(arr,arr.length);  //[1] 1

//对象转化为Boolean类型总是true

typeof NaN;
//"number"

console.log(parseFloat("123.345xx"));
console.log(window.parseFloat("123.345xx"));
console.log(Number.parseFloat("123.345xx"));//推荐使用

var a=2;
if(2==a){     //反写的好处：防止漏写一个等号不报错.易检错
    console.log("输出");
}