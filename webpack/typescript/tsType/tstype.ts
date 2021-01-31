let boolType: boolean = false // bool类型

let count: number = 1 // 数值类型

let string: string  = '22222' // string类型

// symbol类型
const sym = Symbol()
let obj = {
  [sym]: 'beautyTang'
}
console.log(obj[sym])

// Array类型
let list: number[] = [1,2,3]
console.log(list)

let array: Array<number> = [4,5,6] // 这个是Array的泛型

// 枚举类型
enum data { // Number类型
  North,
  South,
  West,
  East
}
console.log(data)

enum data1 { // 字符串类型
  North = "North",
  South = "South",
  West = "West",
  East = "East"
}
console.log(data1)

const enum data2 { // 常量类型
  North,
  South,
  West,
  East
}

enum data3 { // 异构类型{字符串和数字的合并都在一起}
  East,
  North = "North",
  South = "South",
  West = 9,
  Dob,
}

// Any类型
let anyThing: any = 666
anyThing = '2222'
anyThing = '我是你爸爸'

// Unknown类型
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK

// Tuple
let tuple:[string,number]
tuple = ['2222',111]

//Void
function warnUser(): void {
  console.log("This is my warning message");
}

//Undefined 类型
let u: undefined = undefined;

//Null类型
let n: null = null;