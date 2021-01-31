var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var abst = /** @class */ (function () {
    function abst(name) {
        this.name = name;
    }
    return abst;
}());
var abou = /** @class */ (function (_super) {
    __extends(abou, _super);
    function abou(name, title) {
        var _this = _super.call(this, name) || this;
        _this.titleA = title;
        return _this;
    }
    abou.prototype.say = function (_title) {
        console.log(this.name + " say " + _title + ",\u6211\u6700\u559C\u6B22\u7684\u56FE\u4E66\u662F" + this.titleA);
    };
    return abou;
}(abst));
var abb = new abou('wyx', '黑猫警长');
abb.say('我喜欢你哦');
