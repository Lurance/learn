// Observable - Creation Operato
// RxJS 中提供了很多操作符，用于创建 Observable 对象，常用的操作符如下：
//
// create
// of
// from
// fromEvent
// fromPromise
// empty
// never
// throw
// interval
// timer

const Rx = require('rxjs');

let source1 = Rx.Observable.of('lurance', 'he');

source1
    .subscribe(value => console.log(value));

// lurance
// he


let ary = [1, 2, 3, 4];
let source2 = Rx.Observable.from(ary);
source2
    .subscribe(value => console.log(value));

// 1
// 2
// 3
// 4


// fromEvent

// Rx.Observable.fromEvent(document.querySelector('button'), 'click');


// fromPromise

let source3 = Rx.Observable.fromPromise(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello RxJS!');
    }, 3000)
}));

source3
    .subscribe(value => console.log(value));

// Hello RxJS!


// empty 操作符返回一个空的 Observable 对象，如果我们订阅该对象，它会立即返回 complete 信息
// never 操作符会返回一个无穷的 Observable，当我们订阅它后，什么事情都不会发生，它是一个一直存在却什么都不做的 Observable 对象。
// throw 操作操作符，只做一件事就是抛出异常。

let source4 = Rx.Observable.throw('Oop!');

source4
    .subscribe(
        value => {
        },
        err => console.error(err),
        () => console.log('Throw Complete') // 不会执行
    );
// Oops!


// interval 操作符支持一个数值类型的参数，用于表示定时的间隔。

let source5 = Rx.Observable.interval(500);

const subscription5 = source5
    .subscribe(value => console.log(value));
// 每隔 0.5s，会输出一个递增的值，初始值从 0 开始


// timer 操作符支持两个参数，第一个参数用于设定发送第一个值需等待的时间，第二个参数表示第一次发送后，发送其它值的间隔时间。此外，timer 操作符也可以只传递一个参数

let source6 = Rx.Observable.timer(1000, 2000);
source6
    .subscribe(value => console.log(`source6: ${value}`));

let source7 = Rx.Observable.timer(1000);
source7
    .subscribe(
        value => console.log(`source7: ${value}`),
        err => {},
        ()  => console.log('source7 Complete'),
    );

// 0
// complete!


// 有些时候对于一些 Observable 对象 (如通过 interval、timer 操作符创建的对象)，当我们不需要的时候，要释放相关的资源，以避免资源浪费。针对这种情况，我们可以调用 Subscription 对象的 unsubscribe 方法来释放资源

setTimeout(() => {
    subscription5.unsubscribe()
}, 2000);


// Pull 和 Push 是数据生产者和数据的消费者两种不同的交流方式。

// Pull
// 在 "拉" 体系中，数据的消费者决定何时从数据生产者那里获取数据，而生产者自身并不会意识到什么时候数据将会被发送给消费者。
// 每一个 JavaScript 函数都是一个 "拉" 体系，函数是数据的生产者，调用函数的代码通过 ''拉出" 一个单一的返回值来消费该数据。

// Push
// 在 "推" 体系中，数据的生产者决定何时发送数据给消费者，消费者不会在接收数据之前意识到它将要接收这个数据。
// Promise(承诺) 是当今 JS 中最常见的 "推" 体系，一个Promise (数据的生产者)发送一个 resolved value (成功状态的值)来执行一个回调(数据消费者)，但是不同于函数的地方的是：Promise 决定着何时数据才被推送至这个回调函数。
// RxJS 引入了 Observables (可观察对象)，一个全新的 "推" 体系。一个可观察对象是一个产生多值的生产者，当产生新数据的时候，会主动 "推送给" Observer (观察者)。


