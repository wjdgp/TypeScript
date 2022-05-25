interface Person {
  name: string;
  age?: number; // 물음표 = 설정을 해도 되고 안해도 되는 값이라는 것을 의미
}
interface Developer extends Person {
  skills: string[];
}

const person1: Person = {
  name: '김사람',
  age: 20
};

const expert1: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

const people: Person[] = [person1, expert1];