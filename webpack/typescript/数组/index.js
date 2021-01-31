var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 解构赋值
var x;
var y;
var z;
var demo = [1, 2, 3, 4, 5];
x = demo[0], y = demo[1], z = demo[2];
console.log(x, y, z);
//数据展开运算符
var twoNumber = [1, 2];
var allNumber = __spreadArrays(twoNumber, [3, 4, 5, 6]);
console.log(allNumber);
//数组遍历
var colors = ["red", "green", "blue"];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var i = colors_1[_i];
    console.log(i);
}
for (var _a = 0, allNumber_1 = allNumber; _a < allNumber_1.length; _a++) {
    var i = allNumber_1[_a];
    console.log(i);
}
