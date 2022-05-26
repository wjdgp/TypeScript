"use strict";
// Union Types
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
// name이라는 동일한 타입을 줘서 두개의 인터페이스를 유니언 타입으로 사용이 가능하다.
// 동일한 속성에 타입을 다르게해서 구분할 수 있는걸 식별 가능한 유니언 타입이라고 한다.
