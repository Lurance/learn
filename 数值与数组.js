//Number对象
//Number.isFinite() Number.isNaN()
//检查一个数值是否为有限，检查一个数值是否为NaN

//Number.parseInt() Number.parseFloat()

console.log(Number.parseInt('12.3')); //12
//第二个参数为基数
console.log(Number.parseInt('12.3', 16)); //18

// Number.isInteger()
//判断是否为整数，鱿鱼Js内部，整数和浮点数是同样的存储方式，所以3和3.0是同一个值

console.log(Number.isInteger(3)); //true
console.log(Number.isInteger(3.0)); //true
console.log(Number.isInteger(3.14)); //false


//Math对象
//Math.trunc()
//去除一个数的小数部分，可接受字符串，回自动转换

console.log(Math.trunc(3.14)); //3
console.log(Math.trunc('3.14')); //3

//注意转换方式不一样

console.log(Math.trunc('3.14asdasd')); //NaN
console.log(parseInt('3.14asdasd')); //3

//Math.sign()
//用来判断一个数到底是正数，负数还是零

console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign('asdasdas')); // NaN


//数组扩展
//Array.from()可以将类似数组的对象，或者可遍历的对象转换为数组
//只要是不输了lterator接口的数据结构，都可以将其转换为数组

console.log(Array.from({
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
})); // ['a', 'b', 'c']

console.log(Array.from('hello')); //['h','e','l','l','o']

//第二个参数对每个元素进行处理，类似于map

console.log(Array.from({
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}, x => x + '1')); // ['a1', 'b1', 'c1']

//类似数组的对象，本质上必须要有length属性，所以任何具有length属性的对象，都可以被转换

console.log(Array.from({length: 2})); //[undefined, undefined]


//Array.of()将一组值转换为数组

console.log(Array.of(1,2,3));// [1,2,3]

//copyWithin()方法，数组内部值的拷贝
//接受三个参数

let a = [1,2,3,4,5];
a.copyWithin(0, 2, 4);
console.log(a); //[3,4,3,4,5]

//find(), findIndex()方法
//找值和找位置

let b =[1,2,3,4,5];
console.log(b.find(n => n > 3)); // 4
console.log(b.findIndex(n => n > 3)); // 3

//fill()方法填充数组
console.log(b.fill(7)); // [7,7,7,7,7]
console.log(new Array(5).fill(7)); // [7,7,7,7,7]

// keys()， entries()，values()方法返回一个遍历器对象，可以用for ... of进行遍历
// keys()是对键名的遍历
let c = [3,4,1,24,5,2];
for (let index of c.keys()) {
    console.log(index);
}// 0 1 2 3 4 5

//values()是对键值的遍历

//entries()是对键值对的遍历
for (let [index, elem] of c.entries()) {
    console.log(index, elem);
}
// 0 3
// 1 4
// 2 1
// 3 24
// 4 5
// 5 2

//includes()方法判断数组中是否包含给定的值
console.log(c.includes(24)); //true
console.log(c.includes('a')); //false
console.log(c.includes(24, 4)); //false