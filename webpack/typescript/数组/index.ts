// 解构赋值
let x: number;
let y: number;
let z: number;

let demo = [1,2,3,4,5];
[x, y, z] = demo
console.log(x, y, z)

//数据展开运算符
let twoNumber = [1,2]
let allNumber = [...twoNumber,3,4,5,6]
console.log(allNumber)

//数组遍历
let colors: string[] = ["red", "green", "blue"];
for (let i of colors) {
  console.log(i);
}
for (let i of allNumber) {
  console.log(i);
}
