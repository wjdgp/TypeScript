"use strict";
class Car7 {
    constructor(color, name) {
        this.name = "car";
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
Car7.wheels = 4;
class Bmw9 extends Car7 {
    constructor(color, name) {
        super(color, name);
    }
    showName() {
        console.log(super.name);
    }
}
const z4 = new Bmw9("black", "zzzz4");
console.log(Car7.wheels);
// console.log(this.wheels); // Error
