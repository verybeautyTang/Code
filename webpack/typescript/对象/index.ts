// 对象解构赋值
let obj = {
  nickName:'heshiyu',
  age:'22'
};

let { nickName, age} = obj;
console.log(nickName)
console.log(age)

// 展开运算符

let person = {name:'beautyTang',age:'22'}
let allPerson ={...person,six:'boy'}
console.log(allPerson)