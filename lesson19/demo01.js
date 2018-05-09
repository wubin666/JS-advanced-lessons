/**
 * Created on 2018/5/8
 */
//迭代
var returnValue = arr2.every(function (a) {
    //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
        //console.log(a);//打开此行，查看是否会输出8，为什么？
        return a%2===0;
    });
    console.log(returnValue);//false
    
    var returnValue = arr2.every(function (a) {
    //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
        console.log(a);//打开此行，不会输出8
        return a%2===0;
    });
    console.log(returnValue);//2 5 false
    
    function printArgs(prev,cur,i) {
        console.log("prev",prev,",cur:",cur,",i:",i);
        return prev+cur;
    }
    var arr4 = ["a","b","c","d"];
    console.log(arr4.reduce(printArgs));
    console.log(arr4.reduce(printArgs,"x"));
    console.log(arr4.reduceRight(printArgs));
    console.log(arr4.reduceRight(printArgs,"x"));
    //prev a ,cur: b ,i: 1
    
    //prev ab ,cur: c ,i: 2
    
    //prev abc ,cur: d ,i: 3
    
    //abcd
    
    //prev x ,cur: a ,i: 0
    //prev xa ,cur: b ,i: 1
    //prev xab ,cur: c ,i: 2
    //prev xabc ,cur: d ,i: 3
    //xabcd
    
    //prev d ,cur: c ,i: 2
    //prev dc ,cur: b ,i: 1
    //prev dcb ,cur: a ,i: 0
    
    //dcba
    //prev x ,cur: d ,i: 3
    //prev xd ,cur: c ,i: 2
    
    //prev xdc ,cur: b ,i: 1
    //prev xdcb ,cur: a ,i: 0
    //xdcba
    
    //判断7月7号是周几
    //Date 日期
    var today=new Date();
    
    today.setMonth(6);
    
    console.log(today);
    
    
    //Sat Jul 07 2018 14:46:40 GMT+0800 (中国标准时间)
    today.getDay();//
    6
    
    var d = new Date("1978-11-25");
    console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
    console.log(d.getTimezoneOffset());
    //1978 10 6 25 8
    //-480
    
    d.setDate(11);
    console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
    d.setFullYear(1999,5,3);
    console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
    //1978 10 6 11 8
    //1999 5 4 3 8
    
    console.log(Date.parse("2010-01-01 11:12:23.111"));
    console.log(new Date("2010-01-01 11:12:23.111"));
    console.log(new Date().toISOString());
    //1262315543111
    //Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
    //2018-05-07T06:57:40.173Z
    
    //从1970年1月1日00:00:00开始计算
    console.log(new Date("1970-01-01").getTime());
    console.log(new Date("1970-01-02").getTime());
    console.log(new Date("1960-01-02").getTime());
    console.log(new Date("1970-01-02") > new Date("1970-01-01"));
    console.log(new Date("1970-01-02") - new Date("1970-01-01"));
    console.log(new Date((new Date("1970-01-01").getTime())+86400000));
    //0
    
    //86400000
    //-315532800000
    //true
    //86400000
    //Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)
    
    // 输出50天后是几月几号，星期几
    var today=new Date();
    today.getTime();
    //1525676629024
    today+3600*24
    //"Mon May 07 2018 15:03:49 GMT+0800 (中国标准时间)86400"
    var newDate=new Date(today+3600*24);
    newDate;
    //Mon May 07 2018 15:03:49 GMT+0800 (中国标准时间)
    var newDate=new Date(today.getTime()+2000*3600*24);
    newDate;
    //Wed May 09 2018 15:03:49 GMT+0800 (中国标准时间)
    var today=new Date();
    var newDate=new Date(today.getTime()+1000*3600*24*50);
    console.log(newDate);
    //Tue Jun 26 2018 15:07:39 GMT+0800 (中国标准时间)
    
    //正则表达式
    //什么是正则表达式
    //正则表达式是对字符串和特殊字符操作的一种逻辑公式，是对字符串执行模式匹配的工具
    //正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本
    //JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成
    
    //正则对象的创建方式一 通过字面量直接创建
    var reg1 = /[bcf]at/gi;
    
    //正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
    var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
    var reg3 = new RegExp("[bcf]at","gi");
    
    console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
    console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
    console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]
    
    var str="a fAt bat ,a faT cat";
    
    var reg2=new RegExp(/[bcf]at/,"gi");
    
    str.replace(reg2,"xx");
    //"a xx xx ,a xx xx"
    