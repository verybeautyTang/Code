// 普通的输出
// function  one(person: string) {
//   console.log(person);
//   return person
// }
// var user = 'beautyTang'
// document.body.innerHTML = one(user)

// 利用接口输出
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function two(person: Person) {
//   console.log(person.firstName + '你好哦' + person.lastName);
//   return person.firstName + '你好哦' + person.lastName
// }
// var p = {firstName:'beautyTang',lastName:'gugubang'}

// document.body.innerHTML = two(p)

// 利用类class
class names {
  fullName: string
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    console.log(firstName,lastName,middleName);
    this.fullName = firstName +' hhh ' + middleName + ' ss ' + lastName
  }
}
interface Person {
  firstName: string,
  middleName: string
  lastName: string
}
function  There (person: Person) {
  return person.firstName + person.middleName +' ' + person.lastName
}
var user = new names ('He','Shi','Yu')

document.body.innerHTML = There(user)

// 解构赋值
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
let [, thref, , fourth] = [1, 2, 3, 4];
console.log(thref);
console.log(fourth);