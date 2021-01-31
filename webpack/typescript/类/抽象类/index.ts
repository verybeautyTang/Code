abstract class abst {
  constructor(public name: string) {
  }
  abstract say (_title: string) :void
}
class abou extends abst {
  titleA:string;
  constructor(name:string,title:string) {
    super(name)
    this.titleA = title
  }
  say(_title:string):void {
    console.log(`${this.name} say ${_title},我最喜欢的图书是${this.titleA}`);
  }
}

const abb = new abou('wyx','黑猫警长');
abb.say('我喜欢你哦')