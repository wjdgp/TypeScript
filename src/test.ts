let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이렇게 적으면 에러가 난다.

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3] // 숫자 배열
const messages: string[]= ['hello', 'world']; // 문자열 배열

// messages.push(1); // 문자열 배열에 숫자를 넣으면 안됨

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고, undefined 일수도 있음
let nullableNumber: number | null  = null // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
// color = 'green'; // Error