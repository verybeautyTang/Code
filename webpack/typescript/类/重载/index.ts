class newProgram {
  getProduct ():void;
  getProduct (id?: number):void;
  getProduct(id?: number) {
    if (typeof id === 'number') {
      console.log(id)
    }
  }
}
const product = new newProgram();
product.getProduct()
product.getProduct(666)