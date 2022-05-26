"use strict";
// 추상 class
// 프로퍼티나 메소드만 이름만 선언해준다.
// 구체적인 내용은 상속받은 곳에서 적어준다.
class Car6 {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
// const car = new Car6("red"); // Error
// new를 이용해서 객체를 만들 수 없다.
class Bmw8 extends Car6 {
    constructor(color) {
        super(color);
    }
    doSomething() {
        alert(3);
    }
}
// 상속을 통해서만 사용이 가능
const z5 = new Bmw8("black");
