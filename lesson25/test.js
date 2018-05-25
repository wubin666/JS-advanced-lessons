window.onload=function(){
    console.log("window.onload");
    var div1=document.getElementById("div1");
    div1.onclick=function(){
        console.log("div1.onclick");
    };
    div1.ondrag=function(){
        console.log("div1.ondrag");
    }
 }
 
 window.onload=function(e){
    console.log(e.target);
    console.log(this);
    var div1=document.getElementById("div1");
    div1.onclick=function(e){
        //console.log(e.clientX,e.clientY,e.ctrlKey);
        //console.log(e);
        //console.log(e.type,e.target);
        //console.log(e.target,this);


        console.log(e);
        //console.log(e.hasOwnProperty("target"));//false
        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        //console.log(e.__proto__.__proto__.__proto__.hasOwnProperty("target"));//true
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);
    };
    document.addEventListener("xx",function(){console.log("11")});
    document.dispatchEvent(new Event("xx"));
 }
 
 /*
 //dom0级事件响应处理
 window.onload=function(){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    function clickHandler(e){
        console.log(e.target);
    }
    div1.onclick=clickHandler;
    div1.onclick=function(){
        console.log("xx");
    };

    div2.onclick=clickHandler;
    div1.onclick=null;//取消事件响应
 }*/

//dom2级事件响应处理
/*window.onload=function(){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    function clickHandler(e){
        console.log(e.target);
    }
    div1.addEventListener=("click",clickHandler);
    //div1.removeEventListener("click",clickHandler)//取消事件监听
 }*/


/*function div2click(){
    console.log("xxx");
 }*/


//事件流，冒泡方式，捕获方式
window.onload=function(){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    function clickHandler(e){
        console.log(e.target);
    }
    div1.addEventListener=("click",clickHandler,true);
    div2.addEventListener=("click",clickHandler);
    document.addEventListener=("click",clickHandler);
    window.addEventListener=("click",clickHandler);
    //div1.removeEventListener("click",clickHandler)//取消事件监听
 }



