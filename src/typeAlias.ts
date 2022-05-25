type Person1 = {
  name: string;
  age?: number;
};

// &는 Intersection 으로서 두개 이상의 타입들을 합쳐준다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer1 = Person1 & {
  skills: string[];
};

const person2: Person1 = {
  name: '김사람'
};

const expert2: Developer1 = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People1 = Person1[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people1: People1 = [person2, expert2];

type Color = 'red' | 'orange' | 'yellow';
const color1: Color = 'red';
const colors: Color[] = ['red', 'orange']