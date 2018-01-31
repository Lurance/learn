// TypeScript的核心原则之一是对值所具有的结构进行类型检查。
// 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。
// 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

interface SquareConfig {
    color?: string;
    width: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
// 可选属性的好处之一是可以对可能存在的属性进行预定义，
// 好处之二是可以捕获引用了不存在的属性时的错误。 比如，我们故意将 createSquare里的color属性名拼错


// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:

interface Point {
    readonly x: number;
    readonly y: number;
}

// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

let ro: ReadonlyArray<number> = [1, 2, 3, 4];

// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。


// 字符串索引签名
// 如果 SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它

interface NewSquareConfig {
    color?: string;
    width?: number;

    [propName: string]: any
}


// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
};


// 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型
// 比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。

interface StringArray {
    [index: number]: string;
}

// 上面例子里，我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。

// 共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}

// 最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：(readonly)


// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}


// 混合类型
// 先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
// 一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}



