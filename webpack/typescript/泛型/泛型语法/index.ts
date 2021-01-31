// 基础泛型
function  identuty<T>(value:T):T {
  console.log(value)
  return value
}
identuty<number>(222)
identuty<string>('美少女啊啊啊啊啊啊啊')

//多个泛型接口
function names<T, U>(value:T, message: U):U{
  console.log(value,message)
  return message
}
names<string,number>('nnn',1212)
