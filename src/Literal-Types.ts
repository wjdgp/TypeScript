// Literal Types

const userName1 = "Bob";
// userName1은 string이긴 하지만 const로 값을 변할 수 없어
// userName1에 마우스를 가져다대도 "Bob"가 나온다.
let userName2 = "Tom";
// userName2는 let으로 값이 변할 수 있어
// 마우스를 가져다대면 string가 나온다.

// 만약 userName2에 숫자를 넣고 싶다면
// let userName2: string | number = "Tom";
// userName2 = 3;
// 이렇게 타입을 정해줘야한다.

type Job = "police" | "developer" | "teacher";

interface User2 {
  name: string;
  job: Job;
}

const user2: User2 = {
  name: "Bob",
  job: "developer"
};

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3; // | = 유니온 타입
  // 유니온 타입 = or, 또는
}