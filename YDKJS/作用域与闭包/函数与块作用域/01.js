// 作用域由一系列“气泡”组成，这些“气泡”的每一个就像一个容器或篮子，标识符（变量，函数）就在它里面被声明。这些气泡整齐地互相嵌套在一起，而且这种嵌套是在编写时定义的。

// JavaScript 拥有基于函数的作用域。也就是，你声明的每一个函数都为自己创建了一个气泡。

// 考虑一个函数的传统方式是，你声明一个函数，并在它内部添加代码。但是相反的想法也同样强大和有用：拿你所编写的代码的任意一部分，在它周围包装一个函数声明，这实质上“隐藏”了这段代码


// 将变量和函数“隐藏”在一个作用域内部的另一个好处是，避免两个同名但用处不同的标识符之间发生无意的冲突。冲突经常导致值被意外地覆盖。

function foo() {
    function bar(a) {
        i = 3; // 在外围的for循环的作用域中改变`i`
        console.log( a + i );
    }

    for (var i=0; i<10; i++) {
        bar( i * 2 ); // 噢，无限循环！
    }
}

foo();

// bar(..) 内部的赋值 i = 3 意外地覆盖了在 foo(..) 的for循环中声明的 i。在这个例子中，这将导致一个无限循环，因为 i 被设定为固定的值 3，而它将永远 < 10。



// 函数表达式 IIFE

var a = 2;

(function foo(){ // <-- 插入这个

    var a = 3;
    console.log( a ); // 3

})(); // <-- 和这个

console.log( a ); // 2

// 区分声明与表达式的最简单的方法是，这个语句中（不仅仅是一行，而是一个独立的语句）“function”一词的位置。如果“function”是这个语句中的第一个东西，那么它就是一个函数声明。否则，它就是一个函数表达式。
// (function foo(){ .. }) 作为一个表达式意味着标识符 foo 仅能在 .. 代表的作用域中被找到，而 不是在外部作用域中。将名称 foo 隐藏在它自己内部意味着它不会没必要地污染外围作用域。


// 从 ES3 开始，try/catch 结构在 catch 子句上拥有块儿作用域。


// var的作用域提升：
// 当在块作用域使用 var 时，我们在何处声明变量是无关紧要的，因为它们将总是属于外围作用域。

// let 关键字将变量声明附着在它所在的任何块儿（通常是一个 { .. }）的作用域中。换句话说，let 为它的变量声明隐含地劫持了任意块儿的作用域。





// 在 JavaScript 中函数是最常见的作用域单位。在另一个函数内部声明的变量和函数，实质上对任何外围“作用域”都是“隐藏的”，这是优秀软件的一个有意的设计原则。
//
// 但是函数绝不是唯一的作用域单位。块儿作用域指的是这样一种想法：变量和函数可以属于任意代码块儿（一般来说，就是任意的 { .. }），而不是仅属于外围的函数。
