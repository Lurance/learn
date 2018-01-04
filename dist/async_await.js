'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 编写一个async/await函数

var fetch = require('node-fetch');

async function getZhihuColumn(id) {
    var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
    var response = await fetch(url);
    var column = await response.json();
    console.log(column.name + 1);
}

getZhihuColumn('feweekly');

// await必须和async搭配使用

// 非async/await写法示例

function getZhihuColumn2(id) {
    var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (column) {
        return console.log(column.name + 2);
    });
}

getZhihuColumn2('feweekly');

// 将async函数用在promisechain中
// 所有的async函数都会返回一个Promise

async function getZhihuColumn3(id) {
    var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
    var response = await fetch(url);
    return await response.json();
}

getZhihuColumn3('feweekly').then(function (column) {
    return console.log(column.name + 3);
});

// 将任意类型的函数转化成async风格

// 函数表达式

var getZhihuColumn4 = async function getZhihuColumn4(id) {
    var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
    var response = await fetch(url);
    return await response.json();
};

getZhihuColumn4('feweekly').then(function (column) {
    return console.log(column.name + 4);
});

// 简化扁平结构
(async function () {
    var url = 'https://zhuanlan.zhihu.com/api/columns/feweekly';
    var response = await fetch(url);
    var column = await response.json();
    console.log(column.name + 5);
})();

// 类方法

var ApiClient = function () {
    function ApiClient() {
        _classCallCheck(this, ApiClient);
    }

    _createClass(ApiClient, [{
        key: 'getZhihuColumn6',
        value: async function getZhihuColumn6(id) {
            var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
            var response = await fetch(url);
            return await response.json();
        }
    }]);

    return ApiClient;
}();

var client = new ApiClient();
client.getZhihuColumn6('feweekly').then(function (column) {
    return console.log(column.name + 6);
});

// 处理async中的错误

async function getZhihuColumn7(id) {
    var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
    var response = await fetch(url);
    if (response.status !== 200) {
        throw new Error('Error!');
    }
    return await response.json();
}

// 通过try-cache捕获异常

var showColumnInfo = async function showColumnInfo(id) {
    try {
        var column = await getZhihuColumn7(id);
        console.log(column.name + 7);
    } catch (err) {
        console.log('Error1!');
    }
};

showColumnInfo('1212');

// async/await串行并行

//串行

var sleep = function sleep() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
    return new Promise(function (resolve) {
        setTimeout(resolve, timeout);
    });
};

async function getZhihuColumn8(id) {
    await sleep(2000);
    var url = 'https://zhuanlan.zhihu.com/api/columns/' + id;
    var response = await fetch(url);
    return await response.json();
}

var showColumnInfo2 = async function showColumnInfo2() {
    var feweekly = await getZhihuColumn8('feweekly');
    var toolingtips = await getZhihuColumn8('toolingtips');

    console.log(feweekly.name + 'X');
    console.log(toolingtips.name + 'X');
};

showColumnInfo2();

// 并行

var showColumnInfo3 = async function showColumnInfo3() {
    var feweeklyPromise = getZhihuColumn8('feweekly');
    var toolingtipsPromise = getZhihuColumn8('toolingtips');

    var feweekly = await feweeklyPromise;
    var toolingtips = await toolingtipsPromise;

    console.log(feweekly.name + 'XX');
    console.log(toolingtips.name + 'XX');
};

// Promise.all()并行

var showColumnInfo4 = async function showColumnInfo4() {
    var _ref = await Promise.all([getZhihuColumn8('feweekly'), getZhihuColumn8('toolingtips')]),
        _ref2 = _slicedToArray(_ref, 2),
        feweekly = _ref2[0],
        toolingtips = _ref2[1];

    console.log(feweekly.name + 'XXX');
    console.log(toolingtips.name + 'XXX');
};
//# sourceMappingURL=async_await.js.map