"use strict";
const items2 = {
    list: ['a', 'b', 'c']
};
// const m1: Mobile8 = { // Error
// const m1: Mobile8<{color: string; coupon: boolean}> = { // 다른 방법
const m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false
    }
};
// const m2: Mobile8 = { //Error
const m2 = {
    name: "s20",
    price: 900,
    option: "good"
};
