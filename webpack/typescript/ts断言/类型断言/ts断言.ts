// 什么是断言？
// 断言是类似于类型转换，不进行特殊的数据结构与解析
// [只在编译时才有用]
//[<>尖括号语法]
let someValue: any = "this is a string"
let someLength: number = (<string>someValue).length

console.log(someLength)

let asValue: any = "this is a string"
let asLength: number = (someValue as string).length

console.log(asLength)
console.log(asValue);