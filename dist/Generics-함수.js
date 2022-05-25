"use strict";
// 예시
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
// 객체 A와 객체 B를 합쳐주는 merge라는 함수를 만든다고 가정
// A와 B가 어떤 타입이 올 지 모르기 때문에 이런 상황에서는 any 타입 사용 가능
// any = 모든 데이터 타입을 허용
// 이렇게 하면 타입추론이 모두 깨진것과 다름이 없다.
// 결과가 any 라는 것은 merged 안에 무엇이 있는지 알 수 없다는 것
// 제네릭 예시
function merge2(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged2 = merge2({ foo: 1 }, { bar: 1 });
// 제네릭을 사용 할 때는 <T>처럼 꺽쇠 안에 타입의 이름을 넣어서 사용
// 설정을 해주면 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 된다.
// 사용 할 때 타입이 깨지지 않게 된다.
// 함수에 제네릭을 사용하게 된다면 함수의 파라미터로 넣은 실제 값의 타입을 활용하게 된다.
// 제네릭 예시2
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
