interface xxx {
  item: string;
  content: string
}
// typeof
const typing: xxx = {
  item:'beautyTang',
  content:'you are so beautiful'
}

console.log(typeof typing) // 返回object
type Icon = typeof typing
function icon(icon: Icon) {
  console.log(icon)
  console.log(typeof icon)
  return icon
}

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray;


console.log(typeof toArray)


//keyof
type k1  = keyof xxx
type k2 = keyof xxx[]
type k3 = keyof{[x:string]:xxx}

let kk :k1
console.log(k1:1111 );