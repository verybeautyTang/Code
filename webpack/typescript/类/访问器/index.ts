let codding:string ="你好未来，你好世界"
class pig {
  private eat:string;
  get weight(): string {
    console.log('最好的结局');
    return this.eat;
  }
  set weight(eatting : string) {
    if (codding && codding =="你好未来，你好世界") {
      this.eat = eatting
    }
    else {
      console.log('你缺少通行证，想想吧~')
    }
  }
}
let p = new pig()
p.weight= '我每天要吃10kg饭菜'
if(p.weight) {
  console.log(p.weight)
}