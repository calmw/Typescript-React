#### typescript类型推论

- 通过typeof()方法可以判断变量类型

#### ts类型兼容性

- 类型兼容性适用于对象，也适用于接口和类
- 如果类型x要兼容类型y,那么类型y至少要具有与类型x相同的属性
- 直白点说就是这种赋值必须有相同属性，并且只能是属性多的赋值给属性少的

```typescript
// 对象 ----------------------------------------------------------------
/**
 * Type - compatibility
 */

// TODO: define variables
let x = {
    name: "king"
}
let xy = {
    name: "king",
    age: 26
}
// TODO: test type compatibility
// console.log();
// console.log(x);
// console.log();
// x = xy; // x is compatible to xy
// console.log(x);
// console.log();
// console.log();
// console.log(xy);
// console.log();
// xy = x;
// console.log(xy);
// console.log();
// 接口 --------------------------------
/**
 * Rule - compatibility
 */

// TODO: declare an interface
interface INamed {
    name: string;
}

// TODO: create an instance
let n: INamed;
// TODO: declare an obgject
let m = {
    name: "king",
    age: 26
}
// TODO: let n is compatible m
console.log(m);
n = m;
console.log(n);

// 类类型 --------------------------------
/**
 * Rule - compatibility
 */

// TODO: declare an interface
interface INamed {
    name: string;
}

// TODO: define a class
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    print(): void {
        console.log("property name: " + this.name);
    }
}

// TODO: create an instance
console.log();
let p = new Person("king"); // It's ok, because of structural typing
p.print();
console.log();
let nn: INamed;
nn = new Person("cici");
// nn.print();
console.log();
```