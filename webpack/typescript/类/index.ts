class genger {
  // 静态属性
  static data: string  = 'www';
  // 成员属性
  getter: string ;
  // 构造函数---执行初始化操作
  constructor(message:string) {
    this.getter = message
    console.log(message);
  }
  // 静态方法
  static staticF () {
    console.log('我是静态方法')
    return "我是静态方法"
  }
  // 成员方法
  gett () {
    console.log('gett')
    return "贺诗雨"+ this.getter
  }
}
const data = new genger('beautyTang')
genger.staticF() // 静态方法这样调用？
data.gett()
console.log(data.getter)