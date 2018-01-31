// 最简单的解构莫过于数组的解构赋值了：
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var input = [1, 2];
var first = input[0], second = input[1];
// 解构作用于已声明的变量会更好：
var a = 1, b = 2;
_a = [b, a], a = _a[0], b = _a[1]; // 交换值
// 作用于函数参数
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
// 可以在数组里使用...语法创建剩余变量：
var _b = [1, 2, 3, 4], one = _b[0], another = _b.slice(1);
console.log(one, another); // 1 [2,3,4]
// 对象解构
var o = {
    d: "foo",
    e: 12,
    ff: "bar",
    g: 'aa'
};
var d = o.d, e = o.e;
console.log(d, e); // foo 12
// 你可以在对象里使用...语法创建剩余变量
var ff = o.ff, ano = __rest(o, ["ff"]);
console.log(ff, ano); // bar { d: 'foo', e: 12, g: 'aa' }
function fff(_a) {
    var a = _a.a, b = _a.b;
}
// 要小心使用解构。 从前面的例子可以看出，就算是最简单的解构表达式也是难以理解的。
// 尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。
// 解构表达式要尽量保持小而简单。 你自己也可以直接使用解构将会生成的赋值表达式。
// 展开
var wqe = [1, 2];
var secasdond = [3, 4];
var bothPlus = [0].concat(wqe, secasdond, [5]);
var _a;
