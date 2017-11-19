// JavaScript 中的对象是无序属性的集合，其属性可以包含基本值，对象或者函数，听起来更像是键值对的集合，事实上也比较类似

// JavaScript 是怎么实现继承?
// 我们知道，在 JavaScript 中可以使用构造函数语法（通过 new 调用的函数通常被称为构造函数）来创建一个新的对象

// function person(name) {
//     this.name = name;
// }
//
// let person = new person('Mike');

// JavaScript 的设计者 Brendan Eich 决定为构造函数设置一个属性。
// 这个属性指向一个对象，所有实例对象需要共享的属性和方法，都放在这个对象里面，那些不需要共享的属性和方法，就放在构造函数里面。
// 实例对象一旦创建，将自动引用这个对象的属性和方法。也就是说，实例对象的属性和方法，分成两种，一种是本地的，不共享的，另一种是引用的，共享的。这个对象就是原型（prototype）对象，简称为原型。

// 我们通过函数声明或函数表达式创建的函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，这个对象就是调用构造函数而创建的对象实例的原型。
// 原型可以包含所有实例共享的属性和方法，也就是说只要是原型有的属性和方法，通过调用构造函数而生成的对象实例都会拥有这些属性和方法。看下面的代码：

function Person(name) {
    this.name = name;
}

Person.prototype.age = '20';

Person.prototype.sayName = function() {
    console.log(this.name);
};

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';

let person1 = new Person('Jack');
let person2 = new Person('Mike');

person1.sayName(); // Jack
person2.sayName(); // Mike
console.log(person1.age); // 29
console.log(person2.age); // 29

// 这段代码中我们声明了一个 Person 函数，并在这个函数的原型上添加了 age 属性和 sayName 方法，然后生成了两个对象实例 person1 和 person2，这两个实例分别拥有自己的属性 name 和原型的属性 age 以及方法 sayName。
// 所有的实例对象共享原型对象的属性和方法，那么看起来，原型对象就像是类，我们就可以用原型来实现继承了。

// 设置 phone 属性为不可写

Object.defineProperty(person1, 'phone', {
    writable: false,
    value: '100'
});

// 新增一个访问器属性 address
Object.defineProperty(person1, 'address', {
    set: function(value) {
        console.log('set');
        address = value;
    },
    get: function() {
        return address;
    }
});

person1.address = 'asd'; // 控制台打出set
console.log(person1.address); // asd

// 我们可以通过 isPrototypeOf() 方法判断某个原型和对象实例是否存在关系，或者，我们也可以使用 ES5 新增的方法 Object.getPrototypeOf() 获取一个对象实例 __proto__ 属性的值。

console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Object.getPrototypeOf(person1));
// Person {
// age: 29,
//     sayName: [Function],
//     name: 'Nicholas',
//     job: 'Software Engineer' }


// 通过 hasOwnProperty 方法能判断对象实例中是否存在某个属性（不能判断对象原型中是否存在该属性）。

console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('age')); // false , age是其原型的属性


// in 操作符

// 在单独使用时，in 操作符会在通过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原型中。

console.log('age' in person1); // true

// 在使用 for-in 循环时，返回的是所有能够通过对象访问的、可枚举的（enumerated）属性，其中既包括存在于实例中的属性， 也包括存在于原型中的属性。

for (let item in person1) {
    console.log(item);
    // name
    // age
    // sayName
    // job
}

// Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
console.log(Object.getOwnPropertyNames(person1)); // [ 'name', 'phone', 'address' ]

