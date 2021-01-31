var codding = "你好未来，你好世界";
var pig = /** @class */ (function () {
    function pig() {
    }
    Object.defineProperty(pig.prototype, "weight", {
        get: function () {
            console.log('最好的结局');
            return this.eat;
        },
        set: function (eatting) {
            if (codding && codding == "你好未来，你好世界") {
                this.eat = eatting;
            }
            else {
                console.log('你缺少通行证，想想吧~');
            }
        },
        enumerable: false,
        configurable: true
    });
    return pig;
}());
var p = new pig();
p.weight = '我每天要吃10kg饭菜';
if (p.weight) {
    console.log(p.weight);
}
