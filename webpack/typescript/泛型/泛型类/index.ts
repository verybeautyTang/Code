class fanxing<T> {
  hello:T;
  add:(a:T,b:T) => T
}
let myClass = new fanxing<number>()
myClass.hello = 22
console.log(myClass.hello)
myClass.add = function (x,y) {
  console.log(x+y)
  return x+y
}
myClass.add(1,2)