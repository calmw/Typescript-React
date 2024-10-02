#### 介绍
- 当一个变量声明后未被初始化，此时变量会被赋予undefined，当需要释放一个对象时，可以将该对象赋予null

```typescript
/**
 * Void、Undefined & Null Type
 */

// TODO: function return void
function funcVoid(): void {
    console.log("Function return void.");
}

// TODO: get void value
let f = funcVoid();
console.log("f: " + f);
// TODO: declare undefined variable
let u;
// TODO:  return void == undefined ?
if (f == u) {
    console.log("true");
} else {
    console.log("false");
}
// TODO: declare an object
let o: any = {
    user: "king",
    age: 26
}
console.log("o.user: " + o.user);
console.log("o.age: " + o.age);
// TODO: let variable null
o = null;
console.log("o: " + o);
// console.log("user: " + o.user);
```