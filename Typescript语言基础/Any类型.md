#### Any

- Any类型指任意类型，当在编程阶段还无法确定某个变量的类型时，可以将其定义为Any类型
- Any类型允许在编译时可选择的包含或移除类型检查。
```typescript
/**
 * Any Type
 */

// TODO: Declare Any Type and init number first
let anyone: any = 1;
console.log("anyone: " + anyone);
// TODO: change to digital number
anyone = 1.123456789;
console.log("anyone toFixed(6): " + anyone.toFixed(6));
console.log("anyone toFixed(): " + anyone.toFixed());
// TODO: Change to string now
anyone = "Hello, anyone!";
console.log("anyone toUpperCase(): " + anyone.toUpperCase());
console.log("anyone toLowerCase(): " + anyone.toLowerCase());
// TODO: Change to bool again
anyone = true;
if (anyone) {
    console.log("anyone is true");
} else {
    console.log("anyone is not true");
}
```