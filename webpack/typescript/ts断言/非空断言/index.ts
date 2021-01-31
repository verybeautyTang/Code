
// 忽略undefined和null
function onlyString(test: string | undefined | null) {
  const stringTest:string = test
  console.log(stringTest);
  const data:string  = test!
  console.log(data)
}

onlyString(null)

// 忽略undefined
type NumberTest = () => number

function onlyNumber(numberTest: number | undefined) {
  const numData: number = numberTest
  console.log(numData)
  const dataIgnorNumber: number = numberTest!
  console.log(dataIgnorNumber)
}
onlyNumber(undefined)


function nameTest() {
  const a: number | undefined = undefined;
  const b: number = a!;
  console.log(b); 
}
nameTest()
