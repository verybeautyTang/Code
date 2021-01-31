// 没有确定断言的情况
var x;
test();
console.log(x * 2);
function test() {
    x = 20;
}
// 有确定断言的情况
var y;
testy();
console.log(y * 2);
function testy() {
    y = 20;
}
