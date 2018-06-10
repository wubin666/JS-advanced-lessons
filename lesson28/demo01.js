/**
 * Created on 2018/6/9
 */
//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);//1 2 3

//用解构赋值方式定义变量
//数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);//1 2 3

//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);//1 2 3

let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

//解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);
//undefined  undefined
//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);// 1 2

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);//1 2 4

//如果等号的右边不是数组，那么将会报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

//解构赋值中的默认值
var [foo3 = true] = [];//foo3 为 true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'

// 如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null

//
function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);//1

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false 

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//true

//对象的解构赋值
//解构赋值时，左侧为键值对时要注意键值对赋值时的对应关系。
//如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);
//aaa bbb
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };
console.log(foo2,bar2);
//ccc ddd
var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);
//undefined

//字符串，数字的解构赋值
const [a, b, c, d, e] = 'hello';
//相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

let {length : len} = 'hello';
console.log(len); // 5

let {toString: s1} = 123;
console.log(s1);//function toString() { [native code] }

//函数参数的解构赋值
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]

