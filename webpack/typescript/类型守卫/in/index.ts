interface Admin {
  name: string
  array: string []
}

interface Bob {
  name: string
  startTime: Date
}

type allPic = Admin | Bob

function demo(emp: allPic) {
  console.log("Name: " + emp.name);
  if ("array" in emp) {
    console.log("array: " + emp.array);
  }
  if ("startTime" in emp) {
    console.log("startTime: " + emp.startTime);
  }
}