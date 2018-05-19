d//ES6为字符串提供了遍历接口

for (let i of 'hello') {
    console.log(i)
}

/*
h
e
l
l
o
 */


//includes()方法
//startsWith()方法
//endsWith()方法
console.log('hello'.includes('h')); // true
console.log('hello'.includes('h', 1)); // false 从e开始搜索

//repeat()方法将源字符串重复n次

//padStart(), padEnd()长度补全
console.log('hhh'.padStart(5)); //  hhh
console.log('hhh'.padStart(5, 'a')); //aahhh
console.log('hhh'.padEnd(5, 'a')); //hhhaa
console.log('hhh'.padEnd(5)); //hhhaa


//模版字符串

//嵌入变量
let foo = 'abc';
let bar = 'def';
console.log(`One is ${foo}, Tow is ${bar}`);

//大括号内部以放入任意的javascript表达式，可以进行运算，以及引用对象属性

//标签模版

function tag(array, var1, var2) {
    console.log(array, var1, var2);
}
let a = 5;
let b = 4;
// 标签模版不是模版，而是函数调用的一种特殊形式
// 如果模版字符串中有参数就不是一种简单的调用了，而是会将模版字符串先处理成多个参数，再调用函数
tag`Hello ${a + b} world ${a * b}`; // [ 'Hello ', ' world ', '' ] 9 20
//第一个参数是一个数组，代表了模版字符串中没有变量替换的部分 [ 'Hello ', ' world ', '' ]
//其他参数都是各个变量被替换后的值

// String.raw()返回一个斜杠都被转义的字符串，对应于替换变量后的模版字符串
