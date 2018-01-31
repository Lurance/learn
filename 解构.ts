// 最简单的解构莫过于数组的解构赋值了：

let input: number[] = [1, 2];
let [first, second] = input;


// 解构作用于已声明的变量会更好：

let a =1, b = 2;
[a,b]=[b,a]; // 交换值


// 作用于函数参数

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1,2]);


// 可以在数组里使用...语法创建剩余变量：

let [one, ...another] = [1,2,3,4];
console.log(one, another); // 1 [2,3,4]


// 对象解构

let o = {
    d: "foo",
    e: 12,
    ff: "bar",
    g: 'aa'
};
let {d,e} = o;
console.log(d, e); // foo 12

// 你可以在对象里使用...语法创建剩余变量

let {ff, ...ano} = o;
console.log(ff, ano); // bar { d: 'foo', e: 12, g: 'aa' }


// 解构也能用于函数声明。
type C = {a: string, b?: number}
function fff({a,b}: C): void {

}

// 要小心使用解构。 从前面的例子可以看出，就算是最简单的解构表达式也是难以理解的。
// 尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。
// 解构表达式要尽量保持小而简单。 你自己也可以直接使用解构将会生成的赋值表达式。


// 展开

let wqe = [1, 2];
let secasdond = [3, 4];
let bothPlus = [0, ...wqe, ...secasdond, 5];



