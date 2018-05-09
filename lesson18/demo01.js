/**
 * Created on 2018/5/7.
 */
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//function (){arr22[i] = i;}
arr22;
//[undefined × 5, 5]

var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);
//[] []

//数组元素的增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始
//删除a[2]前的数组a ["hello", 3.14, "world"]
//删除a[2]后的数组a ["hello", 3.14, undefined × 1]
//XX

var arr=[1,2,3];
var p=arr.pop();
console.log(p);//3

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);
//[undefined × 2, 3, undefined]

var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);//101
console.log(a);
//[undefined × 1, "Hi", undefined × 98, 0, -1.23: true]

var arr = [];
arr[-1.23] = "xx";
arr[-1.23];
//"xx"
arr.hasOwnProperty("-1.23");
//true

function f(){
    console.log(arguments);
}
f(1,2,3,"x");
//(4) [1, 2, 3, "x", callee: function, Symbol(Symbol.iterator): function]


var a1 = [,"abc"];
console.log(a1.length);//2
var a2 = [,,];
console.log(a2.length);//2

var a3 = [,,];
console.log(a3.length);//2
console.log(["a","b"].length);//2
console.log(["a","b",].length);//2
console.log(["a","b",,].length);//3

// 多维数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
}
for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);
//[Array(5), Array(5), Array(5), Array(5), Array(5)]
console.log(product);
//8

var a=Array.of(7);

var a1=Array.of(1,2,3);

console.log(a,a1);
//[7]  (3)[1,2,3]

function f(){
    console.log(Array.isArray(arguments));
    //arguments.pop();//报错，arguments.pop is not a function
}
f(1,2,3,"x");//false

function f(){
    console.log(arguments);
    Array.prototype.pop.call(arguments);
    console.log(arguments);
}
f(1,2,3,"x");
//(4) [1, 2, 3, "x", callee: function, Symbol(Symbol.iterator): function]
//(3) [1, 2, 3, callee: function, Symbol(Symbol.iterator): function]

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);
//(2) ["b", "c"] (3) ["a", "x", "d"]

var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);
//["apple", "banana", "orange", "pear"]
//有缺陷
//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果不是预计结果，(4) [-1, -20, 50, 7]
//解决
//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//按照第二个字母进行排序
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);
//["banana", "pear", "apple", "orange"]

//连接
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);
//(4) ["banana", "apple", "pear", "orange"] (2) ["banana", "apple"] (2) ["pear", "orange"]

var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3

//数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);
//2 "不大于3"
//5 "大于3"
//8 "大于3"
//(3) [2, 5, 8]

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);
    return a%2===0;
});
console.log(returnValue);
//true

// Array.prototype.map(callback,thisValue?)//Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);
//(5) [1, 9, 25, 49, 81] (5) [1, 3, 5, 7, 9]