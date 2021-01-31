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
var names = /** @class */ (function () {
    function names(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        console.log(firstName, lastName, middleName);
        this.fullName = firstName + ' hhh ' + middleName + ' ss ' + lastName;
    }
    return names;
}());
function There(person) {
    return person.firstName + person.middleName + ' ' + person.lastName;
}
var user = new names('He', 'Shi', 'Yu');
document.body.innerHTML = There(user);
// 解构赋值
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
var _a = [1, 2, 3, 4], thref = _a[1], fourth = _a[3];
console.log(thref);
console.log(fourth);
