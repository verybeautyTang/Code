// 忽略undefined和null
function onlyString(test) {
    var stringTest = test;
    console.log(stringTest);
    var data = test;
    console.log(data);
}
onlyString(null);
function onlyNumber(numberTest) {
    var numData = numberTest;
    console.log(numData);
    var dataIgnorNumber = numberTest;
    console.log(dataIgnorNumber);
}
onlyNumber(undefined);
function nameTest() {
    var a = undefined;
    var b = a;
    console.log(b);
}
nameTest();
