
function test<T,U>(name:T,message:U) {
  console.log(name, message)
  return message
}
test<string,number>('222',666)

type fun = <T>(arg: T) => T

interface interfaceAll {
  <T>(name: T): T;
}
function demo(params) {
  console.log(params);
  return params
}
let arg:interfaceAll = demo
arg<number>(333) 