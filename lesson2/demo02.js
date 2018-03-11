
var str_a = "a"; 
var str_b = str_a;
str_b = "b";
console.log(str_a,str_b);//a b

var obj_a = {v:"a"}; 
var obj_b = obj_a;
obj_b.v = "b";
console.log(obj_a,obj_b);
   //Object {v: "b"} Object {v: "b"}
obj_b = {v:"c"};
console.log(obj_a,obj_b);
   ////Object {v: "b"} Object {v: "c"}