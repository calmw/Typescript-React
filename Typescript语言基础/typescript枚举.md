## typescript枚举

- TS的枚举支持数字类型和字符串类型的枚举。
- 可以通过枚举定义常量
- 通过枚举可以定义一些带有名字的常量，用来清洗的表达设计意图或创建一组有所区别的用例
- 枚举中成员的值，第一个元素可以用默认值，或者直接赋值。其他成员可以从上一个成员得到值或者被直接赋值或者根据表达式被赋值

```typescript
// 字符串枚举--------------------------------------------------------------
/**
 * Enum - string
 */

// TODO: define enum
enum Choices {
    Agree = "Agree It",
    Disagree = "Say NO",
    GiveUp = "Give Up"
}

// TODO: use enum
console.log();
console.log("Do you support this idea : Agree, Disageree or Giveup?");
console.log("Tom's selection is '" + Choices.Agree + "'.");
console.log("Mary's selection is '" + Choices.Disagree + "'.");
console.log("Jack's selection is '" + Choices.GiveUp + "'.");
console.log();

// 数字枚举--------------------------------
/**
 * Enum - number
 */

// TODO: define enum
enum Direction0 {
    Up,
    Down,
    Left,
    Right
}

enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

// TODO: use enum
console.log();
console.log("Direction0.Up = " + Direction0.Up);
console.log("Direction0.Down = " + Direction0.Down);
console.log("Direction0.Left = " + Direction0.Left);
console.log("Direction0.Right = " + Direction0.Right);
console.log();
console.log("Direction1.Up = " + Direction1.Up);
console.log("Direction1.Down = " + Direction1.Down);
console.log("Direction1.Left = " + Direction1.Left);
console.log("Direction1.Right = " + Direction1.Right);
console.log();

// 常量 ----------------------------------------------------------------
/**
 * Enum - constant
 */

// TODO: define enum
enum FileAccess {
    None,
    Readonly = 1 << 1,
    Writable = 1 << 2,
    ReadWrite = Readonly | Writable,
    All
}

// TODO: use enum
console.log();
console.log("FileAccess.None = " + FileAccess.None);
console.log("FileAccess.Readonly = " + FileAccess.Readonly);
console.log("FileAccess.Writable = " + FileAccess.Writable);
console.log("FileAccess.ReadWrite = " + FileAccess.ReadWrite);
console.log("FileAccess.All = " + FileAccess.All);
console.log();
```