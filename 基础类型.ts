// 布尔类型

let isDone: boolean = false;


// 和JavaScript一样，TypeScript里的所有数字都是浮点数。
// 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;


// 字符串，单引号双引号均可

let username: string = "bob";


// 模版字符串

let sentence: string = `Hello, my name id ${username}`;


// 数组两种定义方式
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
// 第二种方式是使用数组泛型，Array<元素类型>：

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。

let x: [number, string];
x = [1, 'aaa'];

// 当访问一个越界的元素，会使用联合类型替代：

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString()); OK, 'string' 和 'number' 都有 toString
// x[6] = true; Error, 布尔不是(string | number)类型


// 枚举类型enum
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

enum Color {Red = 1, Green, Blue}

let c: Color = Color.Green;
console.log(c); // 1

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字

let colorName: string = Color[2];
console.log(colorName); // Green


// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量


// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

function warnUser(): void {
    alert("This is my warning message");
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：


// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题。


// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}


// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// 类型断言有两种形式。 其一是“尖括号”语法：
let smt: any = 'Hello';
let strLength: number = (<string>smt).length;

// 另一个为as语法：
let someValue: any = "this is a string";
let strLength2: number = (someValue as string).length;
