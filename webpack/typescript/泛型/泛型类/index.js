var fanxing = /** @class */ (function () {
    function fanxing() {
    }
    return fanxing;
}());
var myClass = new fanxing();
myClass.hello = 22;
console.log(myClass.hello);
myClass.add = function (x, y) {
    console.log(x + y);
    return x + y;
};
myClass.add(1, 2);
