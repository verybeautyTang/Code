// interface 与 type的区别与共同点？
//1、共同点：都可以作为对象的形状以及函数的签名
interface demo1 {
  name: string,
  title: string 
}
interface noDemo1 {
  (x: number, y: number): void;
}

type demo = {
  name:string,
  title: string
}
type noDemo = (x: number, y: number) => void

// 区别1：其它类型，作为type，可以用于一些其它类型，比如原始类型、联合类型以及元组类型

type Name = string ; // 原始类型

type pramitcX = {x: number} 
type pramitcY = {y: number}

type allPramit = pramitcX | pramitcY // 联合类型

type Data = [number, string]; // 元组

// 区别2：ExtendL://接口和类型别名都能够被扩展，但语法有所不同。
        //此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。

        // interface to interface
        interface x {
          name:string
        }
        interface y extends x {
          age:number
        }

        // type to type
        type q = {newIdea: string}
        type z = q & { six:string }

        //interface to type
        interface p extends x {
          tool: string
        }

        // type to interface
        type r = x & {hell: string}
// 区别3：Implements：
          //类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型

          interface what {
            name:string,
            id:number
          }
          class item  implements what {
            name:'nihao'
            id:1
          }

          type long = {
            roke: string,
            your:string
          }
          class hair implements long {
            roke:'yours'
            your:'roke'
          }

          type shuju = {name:string} | {content:string}
          //报错信息
          //A class can only implement an object type or intersection of object types with statically known members.
          // class yaya implements shuju { 
          //   name:'222'
          //   content:'222'
          // }

//区别4：Declaration merging与类型别名不同，接口可以定义多次，会被自动合并为单个接口。
          interface one {
            name:string
          }
          interface one {
            title:string
          }
          const data:one  ={
            name:'222',
            title:'22222'
          }

