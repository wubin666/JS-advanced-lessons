/*
**created on 2018/3/14
*/
console.log(NaN === NaN);//false
console.log(NaN == NaN);//false

//一切都是对象
//函数作为对象的属性时，该函数叫做此对象的方法。

var x = Number("xis021");//转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof NaN;//“number”

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
str.split("_");
//(5) ["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2);
//(2) ["abc", "def"]
str.concat("_opq");
//"abc_def_ghi_jkl_mn_opq"
str.substr(4,7);
//"def_ghi"
str.substring(4,7);
//"def"
//substr与substring的区别：substring(4,7)中的7是从头开始数
str.slice(2);
//"c_def_ghi_jkl_mn"
str.slice(2,5);
//"c_d"
str.slice(-2);//-2是倒着数
//"mn"
str.slice(2,-2);
//"c_def_ghi_jkl_"

str.bold();
//<b>abc_def_ghi_jkl_mn</b>"
str.link();
//"<a href="undefined">abc_def_ghi_jkl_mn</a>"
str.fontcolor("red");
//"<font color="red">abc_def_ghi_jkl_mn</font>"
str.fontsize(50);
//"<font size="50">abc_def_ghi_jkl_mn</font>"

