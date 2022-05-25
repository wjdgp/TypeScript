type Score = 'A' | 'B' | 'C' | 'D';

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  // readonly = 읽기 전용 속성이라 처음 생성 할때만 수정 가능 -> 나중에 수정이 안된다.
  // [key: number] : string; // 프로퍼티를 여러개 만들어 준다.
  [key: number] : Score;
  // string로 한다면 문자열로 된 모든게 들어갈 수 있다.
  // type Score 이렇게 타입을 정해주고 이걸 적어주면 거기 안에서만 선택 가능
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000
}

user.name = 'bb',
user.age = 10,
// user.birthYear = 1990 // Error

console.log(user.age);
