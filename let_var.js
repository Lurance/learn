// let所声明的变量，只在let命令所在的代码块内有效

{
    let a =  10;
    var b = 1;
}

// console.log(a); Error!
console.log(b);

// let声明的变量仅具有块级作用域

for (let m = 0; m < 10; m++) {}
// console.log(m); Error!

for (var n = 0; n < 10; n++) {}
console.log(n); // 10

// let声明的变量不会像var发生变量提升问题

// console.log(foo); Error
console.log(bar); // undefined

let foo = 2;
var bar = 3;

//let先声明后使用
//关于暂时性死区TDZ问题

//let变量不允许重复声明

