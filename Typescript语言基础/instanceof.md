#### instanceof关键字

- 该关键字可以判断对象的类型

```typescript
/**
 * types : instanceof
 */

// TODO: declare interface gender
interface IGender {
    getGender(): string;
}

// TODO: declare class male
class Male implements IGender {
    constructor(private p_name: string) {
    }

    getGender() {
        return `${this.p_name}'s gender is male.`;
    }
}

// TODO: declare class male
class Female implements IGender {
    constructor(private p_name: string) {
    }

    getGender() {
        return `${this.p_name}'s gender is female.`;
    }
}

// TODO: define method
function getGenderRandom(name: string): Male | Female {
    return Math.random() < 0.5 ?
        new Male(name) : new Female(name);
}

// TODO: usage
let g: IGender;
for (let n = 0; n < 10; n++) {
    g = getGenderRandom("king");
    if (g instanceof Male) {
        console.log(g.getGender());
    }
    if (g instanceof Female) {
        console.log(g.getGender());
    }
}
```