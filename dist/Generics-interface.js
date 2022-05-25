"use strict";
const items = {
    list: ['a', 'b', 'c']
};
// Items<string>라는 타입을 사용하게 된다면,
// Items 타입을 지니고 있는 객체의 list배열은 string[] 타입을 지니고있게 된다.
// list가 숫자배열인 경우, 문자열인 경우, 객체배열, 또는 그 어떤 배열인 경우에도 하나의 interface만을 사용하여
// 타입을 설정 할 수 있다.
