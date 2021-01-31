class pri {
  #name:string; // 私有字段
  constructor (name:string) {
    this.#name = name
    console.log(name)
  }
  genger () {
    console.log('我是成员方法')
  }
}

let paa = new pri('beautyHe');
paa.#name ;