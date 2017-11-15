// ES6允许位函数设置默认值

function log(x, y = 'Hello') {
    console.log(x, y)
}

log('zxc'); // zxc Hello


// rest参数获取多余参数

function ad(...values) {
    console.log(values); // 剩余参数放入数组 [ 1, 2, 3, 4 ]
    let sum = 0;
    for (let val of values) {
        sum += val;
    }
    return sum;
}

console.log(ad(1,2,3,4)); // 10


// 扩展运算符...
// 将数组转换为用逗号分隔的参数序列

console.log(ad(...[1,2,3,4])); // 10

// 范例：求数组中最大数
const a = [2,44,37,87];
console.log(Math.max(...a)); // 87

// 范例：合并数组
const b = [1,2,3,4,5];
console.log(...a, ...b); // 2 44 37 87 1 2 3 4 5


// 函数name属性返回函数名
console.log(ad.name); // ad
