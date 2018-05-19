// 函数式编程是一种编程范式

// 它属于 "结构化编程" 的一种，主要思想是把运算过程尽量写成一系列嵌套的函数调用

// 传统的过程式编程如下：

let a = 5 + 6;
let b = 1 * 3;
let c = a - b;

// 函数式编程如下：

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a,b) => a - b;
sub(add(5,6), mul(1,3));


// 函数式编程基础条件：函数为一等公民 (First Class)
// 所谓 "一等公民"（first class），指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为其它函数的返回值。

// 例如作为返回值：

const a1 = (a) => (b) => a+ b;

const add5 = a1(5);

console.log(add5(10)); // 15


// Pure Function (纯函数) 的特点：
// 给定相同的输入参数，总是返回相同的结果
// 没有产生任何副作用
// 没有依赖外部变量的值
// 所谓 "副作用")（side effect），是指函数内做了与本身运算无关的事，比如修改某个全局变量的值，或发送 HTTP 请求，甚至函数体内执行 console.log 都算是副作用。
// 函数式编程强调函数不能有副作用，也就是函数要保持纯粹，只执行相关运算并返回值，没有其他额外的行为
// 前端中常见的产生副作用的场景：
// 发送 HTTP 请求
// 函数内调用 logger 函数，如 console.log、console.dir 等
// 修改外部变量的值
// 函数内执行 DOM 操作

// 观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
//
// 我们可以使用日常生活中，期刊订阅的例子来形象地解释一下上面的概念。期刊订阅包含两个主要的角色：期刊出版方和订阅者，他们之间的关系如下：
//
// 期刊出版方 - 负责期刊的出版和发行工作
// 订阅者 - 只需执行订阅操作，新版的期刊发布后，就会主动收到通知，如果取消订阅，以后就不会再收到通知
// 在观察者模式中也有两个主要角色：Subject (主题) 和 Observer (观察者) 。它们分别对应例子中的期刊出版方和订阅者。接下来我们来看张图，从而加深对上面概念的理解。


// 简易的Subject（主题与Observer（观察者）：

class Subject {

    constructor() {
        this.observerCollection = [];
    }

    registerObserver(observer) {
        this.observerCollection.push(observer)
    }

    unregisterObserver(observer) {
        let index = this.observerCollection.indexOf(observer);
        if (index >= 0 ){
            this.observerCollection.splice(index, 1)
        }
    }

    notifyObservers() {
        this.observerCollection.forEach(observer => observer.notify())
    }
}

class Observer {

    constructor(name) {
        this.name = name
    }

    notify() {
        console.log(`${this.name} has been notified`)
    }
}

// 使用示例：

let subject = new Subject();

let observer1 = new Observer('aaaa');
let observer2 = new Observer('bbbb');

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers();
// aaaa has been notified
// bbbb has been notified

subject.unregisterObserver(observer1);
subject.notifyObservers();
// bbbb has been notified



// ECMAScript 迭代器

// 一个迭代器对象 ，知道如何每次访问集合中的一项， 并记录它的当前在序列中所在的位置。
// 在 JavaScript 中迭代器是一个对象，它提供了一个 next() 方法，返回序列中的下一项。这个方法返回包含 done 和 value 两个属性的对象。
// 对象的取值如下：
//
// 在最后一个元素前：{ done: false, value: elementValue }
// 在最后一个元素后：{ done: true, value: undefined }

// ES5 迭代器示例：

function makeIterator(array) {
    var nextIndex = 0

    return {
        next: function () {
            return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {done: true}
        }
    }
}

// 一旦初始化, next() 方法可以用来依次访问可迭代对象中的元素：

var it = makeIterator(['aa', 'bb', 'cc', 'dd']);
console.log(it.next().value); // aa
console.log(it.next().value); // bb
console.log(it.next().value); // cc


// 在 ES 6 中我们可以通过 Symbol.iterator 来创建可迭代对象的内部迭代器，具体示例如下：

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

// ES 6 中可迭代的对象：
//
// Arrays
// Strings
// Maps
// Sets
// DOM data structures (work in progress)