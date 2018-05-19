// RxJS 是基于观察者模式和迭代器模式以函数式编程思维来实现的。RxJS 中含有两个基本概念：Observables 与 Observer。
// Observables 作为被观察者，是一个值或事件的流集合；而 Observer 则作为观察者，根据 Observables 进行处理

// Observables 与 Observer 之间的订阅发布关系(观察者模式) 如下：
//
// 订阅：Observer 通过 Observable 提供的 subscribe() 方法订阅 Observable。
// 发布：Observable 通过回调 next 方法向 Observer 发布事件。

// Observable（被观察者）
// 是一个函数，它接受一个 Observer 作为参数然后返回另一个函数。
// 接受一个 Observer 对象 (包含 next、error、complete 方法的对象) 作为参数
// 返回一个 unsubscribe 函数，用于取消订阅;
// 作为生产者与观察者之间的桥梁，并返回一种方法来解除生产者与观察者之间的联系，其中观察者用于处理时间序列上数据流。接下来我们来看一下 Observable 的基础实现

// 基础实现

// 数据源：
class DataSource {
    constructor() {
        let i = 0;
        this._id = setInterval(() => this.emit(i++), 200)
    }

    emit(n) {
        const limit = 10;
        if (this.ondata) {
            this.ondata(n)
        }
        if (n === limit) {
            if (this.oncomplete) {
                this.oncomplete()
            }
            this.destory();
        }
    }

    destory() {
        clearInterval(this._id)
    }
}

// 被观察者：
function myObservable(observer) {
    let datasource = new DataSource();
    datasource.ondata = (e) => observer.next(e);
    datasource.onerror = (err) => observer.error(err);
    datasource.oncomplete = () => observer.complete();
    return () => {
        datasource.destory();
    }
}

const unsub = myObservable({
    next: (x) => console.log(x),
    error: (err) => console.error(err),
    complete: () => console.log('Success')
});

setTimeout(unsub, 1200);

//结果，打印0-4


//  Rx.Observable.create

const Rx = require('rxjs');

let observable1 = Rx.Observable
    .create((observer) => {
        observer.next('Lurance');
        observer.next('He');
    });
// 订阅这个 Observable
observable1
    .subscribe(value => console.log(value));
// Lurance
// He



