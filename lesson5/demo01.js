/**
 * created on 2018/3/21
 */

var x="1";
x+=1;
console.log(x);
//11
typeof x;
//"string"
x/=1;
console.log(x);
//1
typeof x;
//"number"

//存在二义性的代码，与预期的结果不一致
var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);//true
console.log(obj1.y===obj2.y);//false
console.log(obj1.z===obj2.z);//false
console.log(obj1.x==obj2.x);//true
console.log(obj1.y==obj2.y);//false
console.log(obj1.z==obj2.z);//false
//var obj2={x:2,y:[1],z:new Boolean(false)};  产生二异性
var obj2={x:2,y:[1],z:Boolean(new Boolean(false))};
console.log(obj1.z==obj2.z);//false

//逻辑与、或的基本理解
console.log(2<1&&4<5);//false
console.log(true&&(!2));//false
console.log(false&&("2"==2));//false
console.log(false&&false);//false
console.log(2<1||4<5);//true
console.log(true||(!2));//true
console.log(false||("2"==2));//true
console.log(false||false);//false

//短路原则
//对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则直接返回原始左操作数
//对于||，转换后的左操作数若为true，则直接返回原始左操作数，若为false则直接返回原始右操作数
var score=90;
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");//良

var sum =function(a,b,c){
    b=b||4;
    c=c||5;
    return a+b+c;
}
console.log(sum(1,2,3));
//1+2+3  6
console.log(sum(1,2));//1+2+5    8
console.log(sum(1));//1+4+5     10
console.log(sum(1,0,0));//1+4+5 10
//if(b!=false){b=b||4;}