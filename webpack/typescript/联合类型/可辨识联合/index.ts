enum CarTransmission {
  Automatic = 200,
  Manual = 300
}
//1.可辨识
interface car {
  vtype:'car',
  money:'2222'
}
interface money {
  vtype: 'car',
  money: '2222'
}
interface cycle {
  vtype:'cycle'
  cost:'2345'
}
interface foot {
  vtype:'foot'
  pay:'220'
}
// 上面的三个接口中都有同一个属性vtype，所以我们把vtype成为可辨识的数据

//2.联合类型
type Vehicle = car | cycle | foot // 这三个接口因为有同一个可辨识的属性，可以声明未联合类型

//3.类型守卫
const data: Vehicle = {vtype:'car',money:'2222'}
demo(data)

function demo(car: Vehicle) {
  switch (car.vtype) {
    case 'car':
      console.log('i am a car')
      break;
    case 'cycle':
      console.log('i am a cycle')
      break;
    case 'foot':
      console.log('i am a foot')
      break;
  }
}