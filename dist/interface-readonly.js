"use strict";
let user = {
    name: 'xx',
    age: 30,
    birthYear: 2000
};
user.name = 'bb',
    user.age = 10,
    // user.birthYear = 1990 // Error
    console.log(user.age);
