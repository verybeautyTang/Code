
const add =  (x:number,y:number,z?:number):number => {
  if (typeof z ==='number') {
    return x + y + z
  } else {
    return x + y
  }
}
// add已经有了类型，要把add2定义为add，必须类型一致
// 变量赋值给函数，变量会拥有一个类型，是因为ts的类型推断
const add2: (x: number, y: number, z?: number) =>number = add 

interface ty {
  (x: number, y: number, z?: number): number
}
const add3:ty = add