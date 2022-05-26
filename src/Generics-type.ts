type Items2<T> = {
  list: T[];
};

const items2: Items2<string> = {
  list: ['a', 'b', 'c']
};

// 코딩앙마

// 잘못된 예시
/*
interface Mobile8 {
  name: string;
  price: number;
  option: any;
}
*/

interface Mobile8<T> {
  name: string;
  price: number;
  option: T;
}

// const m1: Mobile8 = { // Error
// const m1: Mobile8<{color: string; coupon: boolean}> = { // 다른 방법
const m1: Mobile8<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false
  }
};

// const m2: Mobile8 = { //Error
const m2: Mobile8<string> = {
  name: "s20",
  price: 900,
  option: "good"
}