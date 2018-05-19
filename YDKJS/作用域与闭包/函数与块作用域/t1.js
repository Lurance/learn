function f() {
    var a = 3
}

console.log(a)

// ReferenceError: a is not defined



// 函数作用域示例
// 我们可以拿来一段代码并在它周围包装一个函数，而这实质上对外部作用域“隐藏”了这个函数内部作用域包含的任何变量或函数声明。