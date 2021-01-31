function  typeofTest(value: string, test: string | number) {
  if(typeof test == "string") {
    console.log("string");
  }
  if(typeof test == "number") {
    console.log("number");
  }
  else {
    console.log(value);
  }
}
typeofTest('ddd', 'www')