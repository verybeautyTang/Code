function someThing(name:string, id:number) {
  return name + id
}
// 函数类型
let IdGenerator: (chars: string, nums: number) => string

function createUserId (name:string, id: number) {
  return name + id
}
IdGenerator = createUserId

// 可选参数和默认参数
// 可选参数
function kexuan(name: string, id: number, age?: number): string {
  return name + id;
}

// 默认参数
function moren(
  name: string = "semlinker",
  id: number,
  age?: number
): string {
  return name + id;
}
//重载
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 剩余函数
function  test(array, ...item) {
  item.forEach(ele => {
    array.push(ele)
  });
}
let a = []
test(a,1,2,3,4,5)