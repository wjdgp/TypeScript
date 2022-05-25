"use strict";
class Circle {
    // 'implements' 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시
    // radius: number; // 멤버 변수 radius 값을 설정
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
