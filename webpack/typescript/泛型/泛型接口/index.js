function test(name, message) {
    console.log(name, message);
    // return message
}
test('222', 666);
function demo(params) {
    console.log(params);
    return params;
}
var arg = demo;
arg(333);
