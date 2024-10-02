## 接口

- TS接口在设计上类似于java语言的接口，提供了限制与规范代码的功能。接口不用关心具体实现细节，只需定义好相关的方法和属性，  
  具体实现是放在类中实现的。

## 接口类型

- 按照接口实现类别可分为属性类型接口、函数类型接口、可索引类型接口、类类型接口和混合类型接口

#### 属性类型接口

- 可选属性，具体操作是在定义属性的时候在属性名结尾加上？
- 不可更改属性，在属性名前加上readonly，只读属性只能在创建接口对象时初始化一次，之后就不能进行修改和赋值了。

```typescript
/**
 * Userinfo by interface
 */

// TODO: Declare an interface
interface IUserinfo {
  name: string,
  age?: number,
  readonly gender: boolean
}

// TODO: Define a function to print userinfo
function funcIUserinfo(ui: IUserinfo) {
  if (ui.gender) {
    console.log(ui.name + " is a boy, " + "and he's is " + ui.age + ".");
  } else {
    console.log(ui.name + " is a girl, " + "and she's is " + ui.age + ".");
  }
}

// TODO: declare an IUserinfo's const
const ui_king: IUserinfo = {
  name: "king",
  age: 26,
  gender: true
}
// TODO: call funcUserinfo
console.log();
console.log("IUserinfo: king");
funcIUserinfo(ui_king);
console.log();
// TODO: declare an IUserinfo's const
const ui_tina: IUserinfo = {
  name: "tina",
  gender: false
}
// TODO: call funcUserinfo
console.log();
console.log("IUserinfo: tina");
funcIUserinfo(ui_tina);
console.log();
// ui_tina.gender = true;
// funcIUserinfo(ui_tina);
```

#### 函数类型接口

- 为了使用接口表示函数类型，需要先给接口定义一个调用签名。函数类型接口类似于一个只有参数列表和返回值类型的。  
  函数定义，其中参数列表中的每个参数都需要名称和类型

```typescript
/**
 * function interface
 */

// TODO: Declare an interface
interface IArithmetic {
  (x: number, y: number, s: string): number;
}

// TODO: define an interface function
let funcArithmetic: IArithmetic;
funcArithmetic = function (x: number, y: number, s: string): number {
  let r: number;
  switch (s) {
    case "add":
      r = x + y;
      break;
    case "minus":
      r = x - y;
      break;
    case "times":
      r = x * y;
      break;
    case "divide":
      r = x / y;
      break;
    default:
      r = 0;
      break;
  }
  return r;
}
// TODO: call funcArithmetic and test
console.log("6 + 3 = " + funcArithmetic(6, 3, "add"));
console.log("6 - 3 = " + funcArithmetic(6, 3, "minus"));
console.log("6 * 3 = " + funcArithmetic(6, 3, "times"));
console.log("6 / 3 = " + funcArithmetic(6, 3, "divide"));
```

#### 可索引类型接口

- 用来描述那些"能够通过索引得到"的类型

```typescript
/**
 * index interface
 */

// TODO: Declare an interface
interface INumIndexArray {
    [index: number]: string;
}
// TODO: define a string array by interface
let myNumArr: INumIndexArray;
myNumArr = ["king", "tina", "cici"];
// // TODO: foreach string array
for(let i in myNumArr) {
    console.log(myNumArr[i]);
}
// TODO: Declare an interface
interface IStrNumIndexArray {
    [index: string]: string|number;
}
// TODO: define a string array by interface
let myStrNumArr: IStrNumIndexArray;
myStrNumArr = {"width":"32px", "height":"32px", "length":8};
// TODO: print string array
console.log("Image Size:");
console.log("width is " + myStrNumArr["width"]);
console.log("height is " + myStrNumArr["height"]);
console.log("length is " + myStrNumArr["length"]);
```

#### 类类型接口

```typescript
/**
 * class interface
 */

// TODO: Declare an interface
interface ITimeDate {
    curTime: Date;
    setTime(cur: Date): void;
    getTime(): Date;
}
// TODO: class implements to interface
class CTime implements ITimeDate {
    curTime: Date;
    // TODO: constructor
    constructor(cur: Date) {
        this.curTime = cur;
    }
    // TODO: setTime method
    setTime(cur: Date): void {
        this.curTime = cur;
    };
    // TODO: getTime method
    getTime(): Date {
        let curTime: Date;
        if(this.curTime) {
            curTime = this.curTime;
        } else {
            curTime = new Date();
        }
        // TODO: return new date
        return curTime;
    };
}
// TODO: CTime class usage - init & get time
let ct: CTime = new CTime(new Date());
console.log("Now is " + ct.getTime());
// TODO: CTime class usage - set new time
let newTime: Date = new Date('2021/12/31 00:00:00');
ct.setTime(newTime);
console.log("New time is " + ct.getTime());
```

#### 混合类型接口

```typescript
/**
 * mixed interface
 */

// TODO: Declare a mixed interface
interface ICounter {
  // function interface
  (s: string): void;

  // property interface
  current: number;
  interval: number;

  // class interface
  count(): void;

  setInterval(i: number): void;

  reset(): void;
}

// TODO: define a mixed interface function
function getCounter(): ICounter {
  // TODO: manual constructor
  let counter = <ICounter>function (s: string): void {
    console.log(s);
  }
  // TODO: init counter's properties
  counter.current = 0;
  counter.interval = 1;
  // TODO: define counter's count method
  counter.count = function () {
    counter.current += counter.interval;
    console.log("Now current count is " + c.current + ".");
  }
  // TODO: define counter's setting interval method
  counter.setInterval = function (i: number) {
    counter.interval = i;
    console.log("Now interval changes to " + counter.interval + ".");
  }
  // TODO: define counter's resetting method
  counter.reset = function () {
    console.log("Now current count resets to 0.");
    counter.current = 0;
  }
  // TODO: return counter object
  return counter;
}

// TODO: init ICounter object & usage
let c = getCounter();
c("Counter TypeScript App:");
c.count();
c.setInterval(5);
c.count();
c.reset();
c.setInterval(1);
c.count();
```