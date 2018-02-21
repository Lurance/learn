'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://juejin.im/post/5a6c1db1518825733a30efbf

// async/await 是一种允许我们像构建没有回调函数的普通函数一样构建promises的新语法（从 .net和c#借鉴而来）。
// 这个是一个极好的JavaScript的增加功能，在去年被加进了JavaScript ES7,它甚至可以用来简化几乎所有现存的js应用。

// 我们就将会使用这个虚拟的API Class。这个类通过返回promise对象来模拟网络的调用的过程
// 并且这些promise对象将会在被调用的200ms之后使用resolve函数将简单的数据作为参数传递出去。

var Api = function () {
    function Api() {
        _classCallCheck(this, Api);

        this.user = { id: 1, name: 'test' };
        this.friends = [this.user, this.user, this.user];
        this.photo = 'not a real photo';
    }

    _createClass(Api, [{
        key: 'getUser',
        value: function getUser() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    return resolve(_this.user);
                }, 300);
            });
        }
    }, {
        key: 'getFriends',
        value: function getFriends(userId) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    return resolve(_this2.friends.slice());
                }, 300);
            });
        }
    }, {
        key: 'getPhoto',
        value: function getPhoto(userId) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    return resolve(_this3.photo);
                }, 300);
            });
        }
    }, {
        key: 'throwError',
        value: function throwError() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    return reject(new Error('Intentional Error'));
                }, 400);
            });
        }
    }]);

    return Api;
}();

// 每个例子将会按顺序执行相同的三个操作：检索一个用户，检索他们的朋友，以及检索他们的照片。最后，我们将在控制台输出上述的三个结果。


// 第一个尝试-嵌套的promise回调函数

function callbackHell() {
    var api = new Api();
    var user = void 0,
        friends = void 0;
    var timeStart = new Date().getTime();
    api.getUser().then(function (returnedUser) {
        user = returnedUser;
        api.getFriends(user.id).then(function (returnedFriends) {
            friends = returnedFriends;
            api.getPhoto(user.id).then(function (photo) {
                var timeEnd = new Date().getTime();
                console.log('callbackHell', { user: user, friends: friends, photo: photo }, 'run time: ' + (timeEnd - timeStart));
            });
        });
    });
}

// 第二个尝试 - 链式promise

function promiseChain() {
    var api = new Api();
    var user = void 0,
        friends = void 0;
    var timeStart = new Date().getTime();
    api.getUser().then(function (returnedUser) {
        user = returnedUser;
        return api.getFriends(user.id);
    }).then(function (returnedFriends) {
        friends = returnedFriends;
        return api.getPhoto(user.id);
    }).then(function (photo) {
        var timeEnd = new Date().getTime();
        console.log('promiseChain', { user: user, friends: friends, photo: photo }, 'run time: ' + (timeEnd - timeStart));
    });
}

// promise的一个很好的特性就是他们能够通过在每个回调内部返回另外一个promise对象而进行链式操作。
// 这个方法可以将所有的回调视作为平级的。此外，我们还可以使用箭头函数来缩写回调的表达式。


// 第三个尝试 Async/Await

async function asyncAwaitIsYourNewBestFriend() {
    var api = new Api();
    var timeStart = new Date().getTime();
    var user = await api.getUser();
    var friends = await api.getFriends(user.id);
    var photo = await api.getPhoto(user.id);
    var timeEnd = new Date().getTime();
    console.log('asyncAwaitIsYourNewBestFriend', { user: user, friends: friends, photo: photo }, 'run time: ' + (timeEnd - timeStart));
}

// \在promise之前调用await暂停了函数流直到promise 处于resolved状态，然后将结果赋值给等号左边的变量。
// 这个方式能让我们编写一个就像是一个正常的同步命令一样的异步操作流程。

// 注意“async”关键词是在整个函数声明的开始声明的。我们必须要这么做，因为其实它将整个函数转化成为一个promise。我们将会在稍后研究它。


// Async/await让以前的十分复杂的操作变得特别简单， 假如我们想按顺序取回每个用户的朋友列表该怎么办？

// 第一个尝试 - 递归的promise循环

function promiseLoops() {
    var api = new Api();
    ap.getUser().then(function (user) {
        return api.getFriends(user.id);
    }).then(function (returnedFriends) {
        var getFriendsOfFriends = function getFriendsOfFriends(friends) {
            if (friends.length > 0) {
                var friend = friends.pop();
                return api.getFriends(friend.id).then(function (moreFriends) {
                    console.log('promiseLoops', moreFriends);
                    return getFriendsOfFriends(friends);
                });
            }
        };
        return getFriendsOfFriends(returnedFriends);
    });
}

// 第二次尝试- Async/Await的for循环

async function asyncAwaitLoops() {
    var api = new Api();
    var user = await api.getUser();
    var friends = await api.getFriends(user.id);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = friends[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var friend = _step.value;

            var moreFriends = await api.getFriends(friend.id);
            console.log('asyncAwaitLoops', moreFriends);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

// PARALLEL OPERATIONS（并行操作）
// 逐个获取每个朋友列表似乎有点慢，为什么不采取并行执行呢？我们可以使用async/await 来实现这个需求吗？

async function asyncAwaitLoopsParallel() {
    var api = new Api();
    var user = await api.getUser();
    var friends = await api.getFriends(user.id);
    var friendPromises = friends.map(function (friend) {
        return api.getFriends(friend.id);
    });
    var moreFriends = await Promise.all(friendPromises);
    console.log('asyncAwaitLoopsParallel', moreFriends);
}

// 为了并行的运行这些操作，要先生成成运行的promise数组，并把它作为一个参数传给Promise.all()。
// 它返回给我们一个唯一的promise对象可以让我们进行await， 这个promise对象一旦所有的操作都完成了就将会变成resolved状态。

asyncAwaitLoopsParallel();
//# sourceMappingURL=async_await_pro.js.map