var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 对象解构赋值
var obj = {
    nickName: 'heshiyu',
    age: '22'
};
var nickName = obj.nickName, age = obj.age;
console.log(nickName);
console.log(age);
// 展开运算符
var person = { name: 'beautyTang', age: '22' };
var allPerson = __assign(__assign({}, person), { six: 'boy' });
console.log(allPerson);
