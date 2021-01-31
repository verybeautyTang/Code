var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _name;
var pri = /** @class */ (function () {
    function pri(name) {
        _name.set(this, void 0); // 私有字段
        __classPrivateFieldSet(this, _name, name);
        console.log(name);
    }
    pri.prototype.genger = function () {
        console.log('我是成员方法');
    };
    return pri;
}());
_name = new WeakMap();
var paa = new pri('beautyHe');
paa.;
