console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object



var a = {name:"Mike",age:20};
console.log(a instanceof Object);//true

var b = [12,{},"ab"];
console.log(b instanceof Array);//true

var arr= function(){
};
var arr1= new arr();
console.log(arr1 instanceof arr);//true