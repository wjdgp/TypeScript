// keyof

interface User8 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey9 = keyof User8; // 'id' | 'name' | 'age' | 'gender'

// const uk: UserKey9; // Error
const uk: UserKey9 = "name";
// UserKey9 안에 키값중에 하나를 입력하면 에러가 안난다.

// Partial<T>

// 프로퍼티를 모두 옵셔널로 바꿔준다.
// 일부만 사용이 가능

interface User7 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// Error
/*
let admin: User7 = {
  id: 1,
  name: "Bob"
}
*/

let admin: Partial<User7> = {
  id: 1,
  name: "Bob"
}
// User7과 동일한것
// User7 안에 없을 걸 적으면 에러가 난다.

// Required<T>

// 모든 프로퍼티를 필수로 바꿔준다.

interface User6 {
  id: number;
  name: string;
  age?: number;
}

/*
let admin2: User6 = {
  id: 1,
  name: "Bob"
}
*/
// User6 안에 age가 필수가 아니기 때문에 에러가 안난다.

let admin2: Required<User6> = {
  id: 1,
  name: "Bob",
  age: 30
}
// 모든 프로퍼티가 필수로 바뀌었기 때문에
// age도 필수가 되어서 안적으면 에러가 난다.

// Readonly<T>

// 읽기 전용으로 바꿔준다.

interface User5 {
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User5> = {
  id: 1,
  name: "Bob"
}

// admin3.id = 4; // Error

// Record<K, T>

// K = key
// T = type

/*
interface Score9 {
  '1': 'A' | 'B' | 'C' | 'D';
  '2': 'A' | 'B' | 'C' | 'D';
  '3': 'A' | 'B' | 'C' | 'D';
  '4': 'A' | 'B' | 'C' | 'D';
}
*/

type Grade = '1' | '2' | '3' | '4';
type Score9 = 'A' | 'B' | 'C' | 'D';

// const score: Record<'1' | '2' | '3' | '4', 'A' | 'B' | 'C' | 'D'> = {
const score: Record<Grade, Score9> = {
  1: 'A',
  2: 'B',
  3: 'D',
  4: 'C'
}
// '1' | '2' | '3' | '4' = key
// 'A' | 'B' | 'C' | 'D' = type

// Pick<T, K>

// T = type
// K = 프로퍼티

interface User4 {
  id: number;
  name: string;
  age: number;
  gender: 'M' | 'W'
}

const admin4: Pick<User4, 'id' | 'name'> = {
  id: 1,
  name: 'Bob'
}
// User4에서 id, name만 가져와서 사용할 수 있다.

// Omit<T, K>

// T = type
// K = 프로퍼티

// 특정 프로퍼티를 생략하고 사용할 수 있다.

interface User3 {
  id: number;
  name: string;
  age: number;
  gender: 'M' | 'W'
}

const admin5: Omit<User3, 'age' | 'gender'> = {
  id: 1,
  name: 'Bob'
}
// User3에서 age, gender를 빼고 사용하겠다.

// Exclude<T1, T2>

// T1 = type1
// T2 = type2

// T1에서 T2를 제외하고 사용한다.

type T1 = string | number;
type T2 = Exclude<T1, number>;
// T2는 타입이 string밖에 없다.

// NonNullable<Type>

// null을 제외한 타입을 생성
// null 뿐만 아니라 undefined도 같이 제외시킨다.

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
// T4는 string와 void만 남아있다.