"use strict";

// 函数式编程是一种编程范式

// 它属于 "结构化编程" 的一种，主要思想是把运算过程尽量写成一系列嵌套的函数调用

// 传统的过程式编程如下：

var a = 5 + 6;
var b = 1 * 3;
var c = a - b;

// 函数式编程如下：

var add = function add(a, b) {
  return a + b;
};
var mul = function mul(a, b) {
  return a * b;
};
var sub = function sub(a, b) {
  return a - b;
};
sub(add(5, 6), mul(1, 3));

// 函数式编程基础条件：函数为一等公民 (First Class)
// 所谓 "一等公民"（first class），指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为其它函数的返回值。

// 例如作为返回值：

var a1 = function a1(a) {
  return function (b) {
    return a + b;
  };
};

var add5 = a1(5);

console.log(add5(10)); // 15
//# sourceMappingURL=rxjs_函数式编程.js.map