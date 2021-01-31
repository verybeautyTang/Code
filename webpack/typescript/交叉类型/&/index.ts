interface X {
  c:string,
  b:number
}

interface Y {
  c:number,
  e:string
}
type XY = X & Y
type YX = Y & X

let p: XY
let q: YX

p = {c:'111',d:'222',e:'333'}
// c的类型变成了never。
// 这是因为混入后成员 c 的类型为 string & number，即成员 c 的类型既可以是 string 类型又可以是 number 类型。
// 很明显这种类型是不存在的，所以混入后成员 c 的类型为 never

q