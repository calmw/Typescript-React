#### TS 高级类型

- ![11728182515_.pic_hd.jpg](images/11728182515_.pic_hd.jpg)
- ![21728182517_.pic_hd.jpg](images/21728182517_.pic_hd.jpg)
- ![31728182518_.pic_hd.jpg](images/31728182518_.pic_hd.jpg)
- ![41728182520_.pic_hd.jpg](images/41728182520_.pic_hd.jpg)
- ![51728182521_.pic_hd.jpg](images/51728182521_.pic_hd.jpg)
- ![61728182523_.pic_hd.jpg](images/61728182523_.pic_hd.jpg)
- ![71728182525_.pic_hd.jpg](images/71728182525_.pic_hd.jpg)
- ![81728182526_.pic_hd.jpg](images/81728182526_.pic_hd.jpg)

#### 交叉类型

```typescript
/**
 * intersection types
 */

// TODO: declare user interface
interface IUser {
    name: string,
    gender: string,
    age: number
}

// TODO: declare grade interface
interface IGrade {
    grade: number,
    class: number
}

// TODO: declare family interface
interface IFamily {
    mother: string,
    father: string,
    telphone: number
}

// TODO: define intersection type
type stuinfo = IUser & IGrade & IFamily;

// TODO: define Student class
class Student {
    stu: stuinfo;

    constructor(stu: stuinfo) {
        this.stu = stu;
    }

    print(): void {
        console.log("Student's info:");
        console.log(this.stu);
    }

    printName(): void {
        console.log("Student's name is '" + this.stu.name + "'");
    }
}

// TODO: use intersection type
const si: stuinfo = {
    name: "cici",
    gender: "girl",
    age: 8,
    grade: 3,
    class: 7,
    mother: "tina",
    father: "king",
    telphone: 8888888
}
// TODO: define class(Student) instance
let s = new Student(si);
console.log();
s.print();
console.log();
s.printName();
console.log();
```

#### 联合类型

- 使用联合类型可以实现Any类型的功能
- 使用联合类型比使用Any类型更加严谨，在某些场景下可以避免无法预测的错误。
- 联合类型的实参必须在定义的类型范围内，否则编译不通过
- 如果一个对象是联合类型的，那么只能访问此联合类型的所有类型中所共有的成员

```typescript
// 使用联合类型定义支持多类型的变量--------------------------------------------------------
/**
 * union types : variable
 */

// TODO: function print any
function printAny(un: any) {
    console.log("un is " + un + ".");
    console.log("un's type is [" + typeof un + "].");
}

// TODO: function print union
function printUnion(un: string | number) {
    console.log("un is " + un + ".");
    console.log("un's type is [" + typeof un + "].");
}

// TODO: define variables
let un: string | number;
un = "Union Types";
printAny(un);
printUnion(un);
un = 1;
printAny(un);
printUnion(un);
let b_un = true;
printAny(b_un);
// printUnion(b_un);

// 对象联合类型 --------------------------------
/**
 * union types : interface && class
 */

// TODO: declare interface
interface ITypeA {
    funcA(): void;

    funcZ(): void;
}

interface ITypeB {
    funcB(): void;

    funcZ(): void;
}

// TODO: implement interface
class ClzTypeA implements ITypeA {
    funcA(): void {
        console.log("funcA is running");
    };

    funcZ(): void {
        console.log("ClzTypeA: funcZ is running");
    };
}

class ClzTypeB implements ITypeB {
    funcB(): void {
        console.log("funcB is running");
    };

    funcZ(): void {
        console.log("ClzTypeB: funcZ is running");
    };
}

// TODO: get Type
function getTypeAB(type: number): ClzTypeA | ClzTypeB {
    if (type === 1) {
        return new ClzTypeA();
    }
    if (type === 2) {
        return new ClzTypeB();
    }
    // TODO: throw err
    throw new Error(`Excepted ClzTypeA or ClzTypeB, got ${type}`);
}

// TODO: define variable by ClzTypeA|ClzTypeB
console.log();
let typeA = getTypeAB(1);
typeA.funcZ();   // okay
// typeA.funcA();   // err
// TODO: define variable by ClzTypeA|ClzTypeB
console.log();
let typeB = getTypeAB(2);
typeB.funcZ();   // okay
// typeB.funcB();   // err
console.log();
```

#### 