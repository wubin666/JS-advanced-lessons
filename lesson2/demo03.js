var a1 = 100;
var b1 = 100;
console.log(a1 == b1);//true
console.log(a1 === b1);//true

var a1 = [1,2];
var b1 = [1,2];
console.log(a1 == b1);//false
console.log(a1 === b1);//false

var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);//false
console.log(a2 === b2);//false

var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);//true
console.log(a3 === b3);//true