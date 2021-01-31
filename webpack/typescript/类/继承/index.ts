class Animal {
  name:string ;
  constructor(_name:string ) {
    this.name = _name
    console.log(this.name)
  }
  move(distance:number = 0) {
    console.log(`${this.name} move ${distance}m`);
  }
}

class dog extends Animal {
  age:number;
  constructor(name:string, _age:number) {
    super(name) // 调用父级的构造函数
    this.age = _age
    console.log('this.age',this.age)
  }
  move(distance =5) {
    super.move(distance)
  }
}
const dogging = new dog('bobby',2);
dogging.move()
