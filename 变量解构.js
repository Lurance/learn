let [a, b, c] = [1, 2, 3];

console.log(a, b, c);

// 解构不成功输出undefined

let [d, e] = [1];

console.log(d, e); // 1 undefined

let [f, g, ...h] = [1];

console.log(f, g, h); //1 undefined []

//对象解构赋值，变量需要与属性名同名

const ob = {
    num1: 1,
    num2: 2
};

let {num1, num2} = ob;

console.log(num1, num2);

//理解解构赋值，数组都有一个length属性，数组也是一种对象。对象解构赋值是属性匹配

let {length: len} = 'Hello'; // 5

console.log(len);

//解构用于数组赋值

let array = [1, 2, 3];

array = [...array, 4];

console.log(array);

// 解构用于交换变量值

let var1 = 1;
let var2 = 2;
[var2, var1] = [var1, var2];
console.log(var1, var2);

