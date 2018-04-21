/**
 * Created on 2018/4/21
 */
var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//function toString() { [native code] }
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1  y 2  z 3
//通过for...in遍历所有原型链上的属性，遍历不到toString

//JS对象属性（数据属性）的特性
//属性的值（[[value]]），对应属性的值
//可写特性([[writable]])，确定属性是否可写性
//可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
//可枚举特性（[[enumerable]]），属性是否可枚举
//设置属性的可枚举属性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:true,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;
console.log(person.name);//undefined

//给对象添加属性
//1.直接添加，属性特性默认都为true
var obj = {
    x:1,
    y:2
};
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1  y 2  z 3

//2.通过Object.defineProperty方法添加的属性
//除了手动修改，其所有特性默认都是false
var obj = {
    x:1,
    y:2
};
obj.z = 3;
Object.defineProperty(obj,"w",{value:456,configurable:true});
//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}

//3.通过Object.defineProperty来添加和改变的get/set的属性特性
//添加访问器
//读取属性特性（[[get]]），在读取属性时调用的函数，默认是undefined
//写入属性特性（[[Set]]），在写入属性时调用的函数，默认是undefined

var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){
        return this._name;
    }
    ////只定义了get 特性，因此只能读不能写
});
console.log(obj1.name);//Lucy
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//Lucy

//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi

//属性特性描述符
var obj={x:1};
Object.defineProperty(obj,"y",{
    value:2,writable:false
});
var xDes=Object.getOwnPropertyDescriptor(obj,"x");
var yDes=Object.getOwnPropertyDescriptor(obj,"y");
console.log(xDes,yDes);
//Object {value: 1, writable: true, enumerable: true, configurable: true} 
//Object {value: 2, writable: false, enumerable: false, configurable: false}

// 属性特性相关方法的使用
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
var obj2=Object.create({x:1});
obj2.y=2;
console.log(Object.keys(obj2));
console.log(Object.defineProperty(obj2,"z",{value:3}));
console.log(Object.getOwnPropertyDescriptor(obj2,"z"));
console.log(Object.getOwnPropertyNames(obj2));
//["y"]
//Object {y: 2, z: 3}
//Object {value: 3, writable: false, enumerable: false, configurable: false}
//["y", "z"]
for(var k in obj2){
    console.log(k,obj2[k]);
}//y 2  x 1
Object.prototype.hasOwnProperty(obj2);//false

var obj={x:1,y:2};
Object.seal(obj);
//Object {x: 1, y: 2}
Object.isSealed(obj);
//true
Object.isFrozen(obj);
//false
Object.isExtensible(obj);
//false 







