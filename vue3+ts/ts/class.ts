interface  All {
  type (item: number):void
}

class Car implements All {
  type (item:number) {}
}

interface father extends All{
  change():void
}
class Cycle implements father{
  type (item:number) {}
  change () {

  }
}


