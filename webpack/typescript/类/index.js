var genger = /** @class */ (function () {
    // 构造函数---执行初始化操作
    function genger(message) {
        this.getter = message;
        console.log(message);
    }
    // 静态方法
    genger.staticF = function () {
        console.log('我是静态方法');
        return "我是静态方法";
    };
    // 成员方法
    genger.prototype.gett = function () {
        console.log('gett');
        return "贺诗雨" + this.getter;
    };
    // 静态属性
    genger.data = 'www';
    return genger;
}());
var data = new genger('beautyTang');
genger.staticF();
data.gett();
console.log(data.getter);
