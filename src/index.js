 // 第2节 新的声明方式
// var a = "WaHaHa";
// console.log(a);

// 如何理解var声明全局变量
// 用匿名函数对它进行包裹，然后再匿名函数中调用这个a变量，看是否可以调用。
// let a = "WoAiWaHaHa";
// window.onload = function () {
//     console.log(a)
// }

// 区块的方式测试var是全局声明
// var a = 2;
// {
//     let a = 3;
//     // console.log(a);
// }
// console.log(a);

    // 测试let局部声明
 // 只在区块里面声明，看控制台显示什么。
// var a = 2;
// {
//     let a = 3;
// }
// console.log(a);

    // 用var声明的循环
// for (let i=0;i<10;i++){
//     console.log('循环体中：'+i);
// }
// console.log('循环体外：'+i);

// 用const申明常量
// let a = 0;
// let b = 1;
// let c = 2;

// 数组结构结构的方式
// let [a,b,c,d] = [1,2,3,4];
// console.log(d);

// 解构的默认值  undefined相当于什么都没有，b是默认值。
// let [a,b="lj"] = ['梁娟',undefined];
// console.log(a+b);   // 控制台显示“梁娟lj”

// undefined和null的区别
// let [a,b="lj"]=['梁娟',null];
// console.log(a+b); //控制台显示“梁娟null”

// 2.2 对象的解构赋值
// let {foo,bar} = {bar:'梁娟',foo:'lj'};
// console.log(foo+bar); //控制台打印出了“lj梁娟“

// 圆括号的使用
// let foo;
// ({foo}={foo:'lj'});
// console.log(foo);
// const a = "Lj";
// var a = "梁娟";
// console.log(a);

// 二、变量的解构赋值
// 数组的解构
// 之前为变量赋值
// undefined 和 null的区别
// 对象的解构
// let foo;
// ({foo}={foo:'lj'});
//  console.log(foo);

// 字符串的解构
// const [a,b,c,d,e]='liang';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 扩展运算符
// 对象扩展运算符
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// 声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，发现arr1的值也改变了
// let arr1=['www','taiji','com'];
// // let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('lj');
// console.log(arr2);
// console.log(arr1);

// rest ...
// function taiji(second,a,...arg){
//     console.log(arg.length);
//
// }
// taiji(0,1,2,3,4,5,6,7);

// 5.字符串模板
//ES5字符串拼接的例子
// let lj='梁娟';
// let blog = '非常高兴你能看到这篇文章，我是你的老师'+lj+'。这节课我们学习字符串模版。';
// document.write(blog);
// ES6写法
// let lj='梁娟';
// let blog = `非常高兴你能看到这篇文章，我是你的老师${lj},这节课我们学习字符串模版。`;
// document.write(blog);

// 字符串模板对运算的支持
// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);

//字符串查找
// ES5的写法
// let lj='梁娟';
// let blog = '非常高兴你能看到这篇文章，我是你的老师梁娟。这节课我们学习字符串模版。';
// document.write(blog.indexOf(lj)>0);
// ES6直接用includes就可以判断，不再返回索引值。
// document.write(blog.includes(lj));
// // 判断开头是否存在
// document.write(blog.startsWith(lj));
// 判断结尾是否存在：
// document.write(blog.endsWith(lj));
//  这是网页中输出了20（是指lj所在字符串的下表标位置），我们还要自己判断。
// import {name} from './temp';
// console.log(name);

 //6.数字操作
 // 二进制 Binary
 // let binary = 0B010101;
 // console.log(binary);
 // 八进制
 // const octal = 0o666;
 // console.log(octal);//输出八进制

 // 如何判断是否是数字
 // let a = 11/4;
 // console.log(Number.isFinite(a));
 // console.log(Number.isFinite('lj'));
 // console.log(Number.isFinite(NaN));
 // console.log(Number.isFinite(undefined));

 // ES5 判读NaN
 // console.log("******************************")
 // console.log(isNaN(NaN)); //NaN非数字的一种表示
 // console.log(isNaN(undefined));
 // console.log(isNaN('taiji'));//解读：‘taiji’不是数字，对吗？ 输出：true
 // console.log(isNaN(123));//解读：123不是数字，对吗？ 输出：false
 // console.log(isNaN({}));
 // console.log(isNaN(100+'2a'));
 // console.log("#############################")
 // console.log(Number.isNaN(NaN));
 // console.log(Number.isNaN(undefined));
 // console.log(Number.isNaN('taiji'));
 // console.log(Number.isNaN(123));
 // console.log(Number.isNaN({}));
 // console.log(Number.isNaN(100+'2a'));

 // console.log(Number.isNaN(parseInt("abc")));
 //Number.isInteger 判断是否为整数
 // let a= 918.1
 // console.log(Number.isInteger(a));
 // console.log(Number.parseInt(a));
 // console.log(Number.parseFloat(a));

 // 整数取值范围操作
 // let lj = Math.pow(2,53)-1;
 // console.log(lj);
 // 最大安全整数
 // console.log(Number.MAX_SAFE_INTEGER);
 // // 最小安全整数
 // console.log(Number.MIN_SAFE_INTEGER);
 // console.log(9007199254740991333)
 // 安全整数判断isSafeInteger( )
 // console.log(Number.isSafeInteger(lj));

 // ES6新增的数组知识
 // let json ={
 //     '0':'lj',
 //     '1':'梁娟',
 //     '2':'太极员工',
 //     length:3
 // //    length必须写
 // }
 // console.log(json);
 // //把json数组转换成array  Array.from方法
 // let arr = Array.from(json);
 // console.log(arr);

 // Array.of方法
 // let arr = Array.of(3,4,5,6);
 // console.log(arr);

 //find() 实例方法（查找）
 // let arr=[1,2,3,4,5,6,7,8,9];
 // console.log(arr.find(function(value,index,arr){     //(value,index,arr)return哪个亮哪个
 //     // return value >5;   //用value亮value
 //     return index>7;       //用index亮index
 //
 // }))

 // fill填充
 // let arr=['lj','梁娟','太极公司','你好'];
 // arr.fill('web',1,4);
 // console.log(arr);
 // fill左闭右开

 //数组循环
 //数组循环
 // let arr=['lj','梁娟','太极公司'];
 // for (let item of arr){
 //    console.log(item);
 // }

 // for…of数组索引
 // //数组循环
 // let arr=['lj','梁娟','太极公司'];
 // for (let index of arr.keys()){
 //    console.log(index);
 // }
 // 同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环
 let arr=['lj','梁娟','太极公司'];
 for(let [index,val] of arr.entries()){
     console.log(index+':'+val);
 }
