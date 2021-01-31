// 通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。
// 没有确定断言的情况
let x: number
test()

console.log(x * 2)

function  test() {
  x = 20
}
// 有确定断言的情况
let y!: number
testy()

console.log(y * 2)

function testy() {
  y = 20
}