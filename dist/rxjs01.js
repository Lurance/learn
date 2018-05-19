'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var DataSource = function () {
    function DataSource() {
        var _this = this;

        _classCallCheck(this, DataSource);

        var i = 0;
        this._id = setInterval(function () {
            return _this.emit(i++);
        }, 200);
    }

    _createClass(DataSource, [{
        key: 'emit',
        value: function emit(n) {
            var limit = 10;
            if (this.ondata) {
                this.ondata(n);
            }
            if (n === limit) {
                if (this.oncomplete) {
                    this.oncomplete();
                }
                this.destory();
            }
        }
    }, {
        key: 'destory',
        value: function destory() {
            clearInterval(this._id);
        }
    }]);

    return DataSource;
}();

// 被观察者：


function myObservable(observer) {
    var datasource = new DataSource();
    datasource.ondata = function (e) {
        return observer.next(e);
    };
    datasource.onerror = function (err) {
        return observer.error(err);
    };
    datasource.oncomplete = function () {
        return observer.complete();
    };
    return function () {
        datasource.destory();
    };
}

var unsub = myObservable({
    next: function next(x) {
        return console.log(x);
    },
    error: function error(err) {
        return console.error(err);
    },
    complete: function complete() {
        return console.log('Success');
    }
});

setTimeout(unsub, 1200);

//结果，打印0-4


//  Rx.Observable.create

var Rx = require('rxjs');

var observable1 = Rx.Observable.create(function (observer) {
    observer.next('Lurance');
    observer.next('He');
});
// 订阅这个 Observable
observable1.subscribe(function (value) {
    return console.log(value);
});
// Lurance
// He
//# sourceMappingURL=rxjs01.js.map