// 什么是断言？
// 断言是类似于类型转换，不进行特殊的数据结构与解析
// [只在编译时才有用]
//[<>尖括号语法]
var someValue = "this is a string";
var someLength = someValue.length;
console.log(someLength);
var asValue = "this is a string";
var asLength = someValue.length;
console.log(asLength);
console.log(asValue);
