## typescript泛型

- 泛型是一种参数化类型，一般用来处理多个不同类型参数的方法。也就是通过传入通用的数据类型将多个方法合并成一个。
- 通过泛型可创建可重用的组件
- 泛型操作的数据类型根据传入的实参来确定
- 泛型可以用在方法接口和类中，分别称为泛型方法、泛型接口和泛型类。
- TS泛型同样使用"类型变量<T>"的写法，"<T>"是一种特殊的变量，只表示类型不表示值。

```typescript
/**
 * generics - variables
 */

// TODO: func variable generics
/* function echo_generics<T>(arg: T): T {
    console.log("arg's length: " + arg.length);
    return arg;
} */
// TODO: call func
// echo_generics<number>(123);
// echo_generics<string>("echo");
// TODO: func variable generics
/* function echo_var_generics<T>(arg: T[]): T[] {
    console.log("arg's length: " + arg.length);
    return arg;
} */
// TODO: call func
// console.log();
// console.log(echo_var_generics<number>([1, 2, 3]));
// console.log();
// console.log(echo_var_generics<string>(["echo", "length"]));
// console.log();
// TODO: func variable generics
function echo_array_generics<T>(arg: Array<T>): Array<T> {
    console.log("arg's length: " + arg.length);
    return arg;
}

// TODO: call func
console.log();
console.log(echo_array_generics<number>([1, 2, 3, 4, 5]));
console.log();
console.log(echo_array_generics<string>(["echo", "array", "length"]));
console.log();

// -----------------------------------------------
/**
 * generics - type
 */

// TODO: generics function type
function echo_type<T>(arg: T): T {
    return arg;
}

// TODO: define generics type
// let arrow_echo_type: <T>(arg: T) => T = echo_type;
// let arrow_echo_type: <U>(arg: U) => U = echo_type;
// TODO: call func
// console.log(arrow_echo_type("arrow_echo_type()"));
// console.log();
// console.log(arrow_echo_type("arrow_echo_type() uses type U"));
// console.log();
// TODO: define generics type
let liter_echo_type: { <T>(arg: T): T } = echo_type;
// TODO: call func
console.log();
console.log(liter_echo_type("liter_echo_type()"));
console.log();
// 泛型接口----------------------------------------------
/**
 * generics - interface
 */

// TODO: declare generics interface
/* interface IGenericsEcho {
    <T>(arg: T): T;
} */
interface IGenericsEcho<T> {
    (arg: T): T;
}

// TODO: define generics function
function fn_echo_generics<T>(arg: T): T {
    return arg;
}

// TODO: define generics variable
// let echo_gen: IGenericsEcho = fn_echo_generics;
let echo_gen_num: IGenericsEcho<number> = fn_echo_generics;
let echo_gen_str: IGenericsEcho<string> = fn_echo_generics;
// TODO: call func
console.log();
console.log(echo_gen_num(1234567890));
console.log();
console.log(echo_gen_str("Defines generics func by interface."));
console.log();
// 泛型方法----------------------------------------------
/**
 * generics - echo
 */

// TODO: func echo
/* function echo_num(arg: number): number {
    return arg;
}
function echo_str(arg: string): string {
    return arg;
} */
/* function echo_any(arg: any): any {
    return arg;
} */
// TODO: call func
// console.log();
// console.log("echo_num(): " + echo_num(123));
// console.log();
// console.log("echo_str(): " + echo_str("echo"));
// console.log();
// console.log("echo_any(): " + echo_any(123));
// console.log();
// console.log("echo_any(): " + echo_any("echo"));
// console.log();
// TODO: generics func echo
function echo<T>(arg: T): T {
    return arg;
}

// TODO: call generics func
console.log();
console.log("echo<number>(): " + echo<number>(123));
console.log("echo<string>(): " + echo<string>("echo"));
console.log();
console.log("echo(): " + echo(123));
console.log("echo(): " + echo("echo"));
console.log();

// 泛型类 ----------------------------------------------
/**
 * generics - class
 */

// TODO: declare generics class
class EchoGenerics<T> {
    // member variables
    private _m_arg: T;

    // constructor
    constructor(arg: T) {
        this._m_arg = arg;
    }

    // member methods
    public echo(): void {
        console.log(this._m_arg);
    }
}

// TODO: use generics class
console.log();
let _g_echo_str = new EchoGenerics<string>("Hello, Generics Class.");
_g_echo_str.echo();
console.log();
let _g_echo_num = new EchoGenerics<number>(1234567890);
_g_echo_num.echo();
console.log();
```