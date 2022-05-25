"use strict";
// 함수
function hello(name) {
    return `Hello, ${name || "world"}`;
}
function hello2(name = "world") {
    return `Hello, ${name}`;
}
const result = hello();
const result2 = hello("sam");
function hello(name, age) {
    // name 앞에 age가 오면안된다.
    // 선택적 매개변수가 필수 매개변수 앞에 오면 안된다.
    // age를 앞에 두고 싶다면
    // function hello(age: number | undefined, name: string): string {}
    // 이런 식으로 적어줘야한다.
    if (age !== undefined) {
        return `Hello, ${name}. You age ${age}.`;
    }
    else {
        return `Hello, ${name}`;
    }
}
console.log("sam");
console.log("sam", 30);
// 나머지 매개변수에 타입 작성법 = Rest 파라미터
// ... = 전달과정 매개변수를 배열로 나타낼 수 있다.
function add(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
add(1, 2, 3); // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
const Sam = { name: 'Sam' };
function showName() {
    console.log(this.name);
}
const a6 = showName.bind(Sam);
a6();
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이를 숫자로 입력해주세요.";
    }
}
const sam = join("Sam", 30);
const jane = join("Jane", "30");
