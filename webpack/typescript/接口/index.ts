// 对象的形状
interface tangle {
  weight:string
  height:string
}

let me: tangle ={
  weight: '90kg',
  height: '160cm'
}
console.log(me)

//可选、只读页面

interface onlyread {
  readonly name: string, // name只读属性用于限制只能在对象刚刚创建的时候修改其值
  age? :number // ?是可选属性，
}
let only: onlyread = {
  name:'hst'
}
// only.name = 'woo'
console.log(only)
// 只读数组
let ax :number[] = [1,2,3,4];
let noChange: ReadonlyArray<number> = ax;
console.log(ax);
console.log(noChange);
// 下面四个赋值行为都为出错
// noChange[0] = 12; // error!
// noChange.push(5); // error!
// noChange.length = 100; // error!
// ax = noChange; // error!



// 任意类型

interface anyWay {
  top: string,
  bottom: string,
  [left: string]: any // 任意类型
}

let demoList: anyWay = { // 输入left的情况[可以为string类型同事也可以是其它类型]
  top: '222',
  bottom: '3333',
  left:0
}

let demoNoList: anyWay = {
  top: '555',
  bottom: '5666',
}
console.dir(demoList)
console.dir(demoNoList)


