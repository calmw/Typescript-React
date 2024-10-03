## typescript方法

#### 函数基础

- 函数参数主要包括默认参数、可选参数和剩余参数几种类型
    - 默认参数，这点和js保持一致
    - 可选参数，如果想在TS函数中实现可选参数，只有在参数名后紧跟修饰符"?",才能表示该参数是一个可选参数
    - 剩余参数，TS语法支持使用剩余参数，把剩余参数集合到一个数组变量中，具体定义时需要在剩余参数前加上"..."。 
      修饰符，可选参数数量可以是0个或多个。
```typescript
/**
 * function parameters
 */

// TODO: ts function with rest parameters
function funcUser(
    firstName: string = "king",
    lastName?: string,
    ...restInfo: string[]): string {
    return "User Info: " + firstName + " " + lastName + " " + restInfo.join(" ");
}

// TODO: call function
console.log();
console.log(funcUser());
console.log();
console.log(funcUser("Tina", "Wang"));
console.log();
console.log(funcUser(undefined, undefined, "male", "26"));
console.log();
```

#### 匿名函数
```typescript
let myAdd = function (x: number, y: number) {
    return x + y;
}
console.log("myAdd(1,2) = ", myAdd(1, 2))
```
#### 箭头函数
```typescript
/**
 * arrow function && this
 */

// TODO: ts function with this keyword
/* let userinfo = {
    uname: "king",
    printInfo: function() {
        return function() {
            return { name: this.uname };
        }
    }
} */
let userinfo = {
    uname: "king",
    printInfo: function () {
        return () => {
            return {name: this.uname};
        }
    }
}

/* interface User {
    name: string;
}
interface Userinfo {
    uname: string;
    printInfo(this: Userinfo): () => User;
}
let userinfo: Userinfo = {
    uname: "king",
    printInfo: function(this: Userinfo) {
        return () => {
            console.log(typeof(this));
            return { name: this.uname };
        }
    }
} */
// TODO: call function
let ui = userinfo.printInfo();
console.log();
console.log("User name is " + ui().name);
console.log();
```