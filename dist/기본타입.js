"use strict";
// 문자열
let car = 'bmw';
let car2 = 'bmw';
// 'bmw'가 문자열이기 때문에 :string를 따로 안적어줘도 문자열로 인식
// 타입추론이라고한다.
// 숫자
let age = 30;
let age2 = 30;
// 불리언 타입
let isAdult = true;
let isAdult2 = true;
// 배열타입(숫자)
let a = [1, 2, 3];
let a2 = [1, 2, 3];
let a3 = [1, 2, 3];
// 배열타입(문자)
let week = ['mon', 'tue', 'wed'];
let week2 = ['mon', 'tue', 'wed'];
let week3 = ['mon', 'tue', 'wed'];
// 튜플 (Tuple)
// 배열 안에 각각 다른 타입을 사용하고 싶을 때 사용
let b;
b = ['z', 1];
// b = [1, 'z']; // Error
b[0].toLowerCase();
// toLowerCase() = 첫번째 단어를 소문자로 바꿔주는것
// 첫번째가 문자열이기 때문에 첫번째만 사용가능
// void, never
function sayHello() {
    console.log('hello');
}
// void = 값을 반환하는게 없을 때
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // do something..
    }
}
// never = 일부러 에러를 내거나, 끝나지 않는 함수를 사용할 때
// enum
// 비슷한 값들끼리 묶어줬다고 생각하면 된다.
// 특정 값만 입력할 수 있게 강조하고싶을때
// 그 값들이 공통점이 있을 때 사용
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
// 숫자열이 아닌 문자열도 넣어줄 수 있다.
(function (Os) {
    Os["Window2"] = "Win";
    Os["Ios2"] = "ios";
    Os["Android2"] = "and";
})(Os || (Os = {}));
// 숫자가 아니기때문에 단방향 맵핑만 가능
// null, undefined
let a4 = null;
let b1 = undefined;
