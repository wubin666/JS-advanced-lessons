/*
**created on 2018/3/15
*/
//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();
var n1 = 12345.6789;
console.log(n1.toFixed(2));
//12345.68   把 Number 四舍五入为指定小数位数的数字 
console.log(n1.toPrecision(2));
//1.2e+4     可在对象的值超出指定位数时将其转换为指数计数法
console.log(n1.toString());
//12345.6789 可把一个 Number 对象转换为一个字符串，并返回结果
console.log(n1.toExponential(2));
//1.23e+4    可把对象的值转换成指数计数法

console.log(NaN == NaN); //false
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true


console.log(Math.floor(3.8));//3   向下取整
console.log(Math.floor(-3.8));//-4  
console.log(Math.ceil(3.2));//4    向上取整
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3   四舍五入
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

var str="abcdef";
console.log(str.slice(2));     //cdef 
console.log(str.slice(2,5));   //cde 返回字符串，下标从2开始，到5之前（不含5）
console.log(str.slice(2,-2));  //cd 下标从2开始，到-2结束之前（不含-2）
console.log(str.slice(-2));    //ef   从倒数第一到倒数第二倒数时，最后一个下标为-1
console.log(str.slice(-1));    //f    倒数第一个字符

var arr="abcdef";
console.log(arr.split("c"));    //返回数组 ["ab", "def"] 
console.log(arr.split("c",1));  //["ab"]
console.log(arr.split("c",2));  //["ab", "def"]
console.log(arr.split("c",3));  //["ab", "def"]
console.log(arr.split("c",0));  //[]

var str2="abcdef";
console.log(str2.charAt(2));   //c   返回下标为2的字符
console.log(str2.charCodeAt(0)); //97 返回一个整数，该整数表示String对象中指定索引处的字符的Unicode编码

var str3="abcdefabcdef";
console.log(str3.indexOf("d",4));  //9 返回一个下标值，“d”是要索引的字符，“4”指从4开始往后查找

//字符串变换
var str16="aaa".concat("bbb");  //aaabbb  连接字符串
var str17="    abc def     \r\n  ".trim();  //abc def   
//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18="abcDEF".toLowerCase();  //abcdef  将字符串中的字符都转化为小写字母
var str19="abcDEF".toUpperCase();  //ABCDEF  转化成大写字母
