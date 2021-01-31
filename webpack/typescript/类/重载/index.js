var newProgram = /** @class */ (function () {
    function newProgram() {
    }
    newProgram.prototype.getProduct = function (id) {
        if (typeof id === 'number') {
            console.log(id);
        }
    };
    return newProgram;
}());
var product = new newProgram();
product.getProduct();
product.getProduct(666);
