let sss = '2222' //类型推断，默认把类型设置为赋值的类型

let unionTest:number | string // 联合类型

// 返回一个指定类型的数据结构
// 方法1：as
function ass(item: string | number):number {
  const str = item as string
  if (str.length) {
    return str.length
  } else {
    const number = item as number
    return number.toString().length
  }
}
// 方法2：typeof
function typeOff(item: string | number):number {
  if(typeof item === 'string') {
    return item.length
  } else {
    return item.toString().length
  }
}