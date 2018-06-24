/**
 * Created on 2018/6/24.
 */
//ES6新增数据类型和数据结构
///新增数据类型(Symbol)
//ES6引入了一种新的原始数据类型Symbol,表示独一无二的值，通过Symbol函数生成
//Symbol变量属于基本数据类型(不是对象),Symbol前不能使用new命令
//Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要用于区分变量

let s=Symbol();
typeof s;  //"symbol"
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);  //Symbol(foo)
console.log(s2);  //Symbol(bar)

//Symbol的特点
//Symbol函数的参数只是表示Symbol值的描述，相同参数的Symbol函数的返回值是不相等的
//symbol变量不能与其他值进行运算，但可转换成字符串类型

var s1=Symbol("foo");
var s2=Symbol("foo");
s1===s2;  //false
s1==s2;   //false

var s1=Symbol();
var s2=Symbol();
s1===s2;  //false
s1==s2;   //false

var sym=Symbol('my symbol');
//'your symbol is '+String(sym);  //报错

var sym=Symbol('my symbol');
String(sym);      //'Symbol(my symbol)'
sym.toString();   //'Symbol(my symbol)'
'your symbol is '+String(sym);  //"your symbol is Symbol(my symbol)"

//作为属性名的Symbol
//由于每一个Symbol的值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名,
//就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，
//能防止某一个键被不小心改写或覆盖，作为对象属性的具体形式如下

var mySymbol=Symbol();
var a={};                              //创建一个对象a
a[mySymbol]='Hello!';   //第一种写法    //mySymbol是对象a的属性名，属性值为'Hello!'

var a={                 //第二种写法
	[mySymbol]:'Hello!'
};

var a={};               
Object.defineProperty(a,mySymbol,{value:'Hello!'}); //第三种写法
//以上写法都得到同样结果
a[mySymbol];   //"Hello!"

//作为属性名的Symbol (注意访问属性的方式)
//-访问对象属性时，Symbol需使用[],而不是点操作符

var mySymbol=Symbol();
var a={};
a.mySymbol='Hello!';
console.log(a[mySymbol]);     //undefined
console.log(a['mySymbol']);   //Hello!
//由此例可知，属性名mySymbol放在[]里时，要用""引起来

//使用Symbol值定义属性时，Symbol值需放在方括号之中
let s=Symbol();
let obj={
	[s]:function(arg){ console.log(arg); }
};
obj[s](123);   //123

//作为属性名的Symbol的遍历属性
//Symbol作为属性名，该属性不会出现在for...in、 for...of循环中
//也不会被Object.keys()、Object.getOwnPropertyNames()返回，但它也不是私有属性
//使用Object.getOwnPropertySymbols方法，可以获取指定对象的所有Symbol属性名

var obj={};
var foo=Symbol("foo");
Object.defineProperty(obj,foo,{ value:"foo bar", });  //给对象添加属性
for(var i in obj){   //用for...in遍历对象obj中的属性
	console.log(i);  //无输出
}
console.log(Object.getOwnPropertyNames(obj));    //[]
console.log(Object.getOwnPropertySymbols(obj));  //[Symbol(foo)]

//与Symbol变量复用相关的静态方法
//-Symbol.for()接收一个字符串作为参数，搜索有没有以该参数作为名称的Symbol值。
//如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
//-Symbol.keyFor()方法返回一个已登记的Symbol类型值的Key,字符串类型

var s1=Symbol.for('foo');
var s2=Symbol.for('foo');
console.log(s1===s2);   //true
//s1,搜索有没有以"foo"作为名称的Symbol值，
//没有，新建并返回一个以该字符串为名称的Symbol值: Symbol(foo)
//s2,搜索有没有以"foo"作为名称的Symbol值，
//有，返回这个Symbol值，即返回s1
//所以 s1===s2 true

console.log(Symbol.for("bar")===Symbol.for("bar"));   //true

console.log(Symbol("bar")===Symbol("bar"));   //false

console.log(Symbol.for("bar")===Symbol("bar"));   //false

//新增数据结构
let s1=new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);
//Set(6) {1, 2, 3, 4, 5, 6}

var s2=new Set();
[2,3,5,4,5,2,2].map( x=>s2.add(x) );
for(let i of s2){
	console.log(i);   //2 3 5 4
}

//set的原型属性和方法
//例一
var set=new Set([1,2,3,4,4]);
console.log([...set]);
//(4) [1, 2, 3, 4]

//例二
var items=new Set([1,2,3,4,5,5,5,5]);
console.log(items.size);  
//5

//去除数组中的重复成员
[...new Set([1,2,3,3])];
//(3) [1, 2, 3]

//区分基本类型和引用（对象）类型，两个对象总是不相等的：
var set=new Set();
set.add({});  //向set中添加了一个成员 {}， 即空对象
console.log(set.size);  //1
set.add({});  //向set中添加了一个成员 {}， 即空对象
console.log(set.size);  //2

var s=new Set();
s.add(1).add(2).add(2);  //向s中添加1，添加2,但不会重复添加2
s.size;  //2
s.has(1);  true
s.has(2);  true
s.has(3);  false
s.delete(2);  //true
s.has(2);  false

//Array.from方法可以将Set结构转为数组。
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);

var items = new Set([1, 2, 3, 4, 5]);
console.log(items);
//Set(5) {1, 2, 3, 4, 5}

var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
console.log(array);
//(5) [1, 2, 3, 4, 5]  

// ...也可以将Set转化成数组
var items = new Set([1, 2, 3, 4, 5]);
console.log([...items]);
//(5) [1, 2, 3, 4, 5]

//如果不加[]就是散列的元素
var items = new Set([1, 2, 3, 4, 5]);
console.log(...items);
//1 2 3 4 5

//关于Set的遍历方法
var set=new Set(['red','green','blue']);
console.log(typeof set.keys());     //object
console.log(typeof set.values());   //object
console.log(typeof set.entries());  //object

//Map转为对象
//如果所有Map的键都是字符串，它可以转为对象。
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
let myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

//对象转为Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
objToStrMap({yes: true, no: false});
// [ [ 'yes', true ], [ 'no', false ] ]