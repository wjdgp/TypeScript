class Car7 {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    // console.log(this.wheels); // Error
    console.log(Car7.wheels);
  }
}

class Bmw9 extends Car7 {
  constructor(color: string, name: string) {
    super(color, name);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw9("black", "zzzz4");
console.log(Car7.wheels);
// console.log(this.wheels); // Error