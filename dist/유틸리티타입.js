"use strict";
// keyof
// const uk: UserKey9; // Error
const uk = "name";
// Error
/*
let admin: User7 = {
  id: 1,
  name: "Bob"
}
*/
let admin = {
    id: 1,
    name: "Bob"
};
/*
let admin2: User6 = {
  id: 1,
  name: "Bob"
}
*/
// User6 안에 age가 필수가 아니기 때문에 에러가 안난다.
let admin2 = {
    id: 1,
    name: "Bob",
    age: 30
};
let admin3 = {
    id: 1,
    name: "Bob"
};
// const score: Record<'1' | '2' | '3' | '4', 'A' | 'B' | 'C' | 'D'> = {
const score = {
    1: 'A',
    2: 'B',
    3: 'D',
    4: 'C'
};
const admin4 = {
    id: 1,
    name: 'Bob'
};
const admin5 = {
    id: 1,
    name: 'Bob'
};
// T4는 string와 void만 남아있다.
