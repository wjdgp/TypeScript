interface Person8 {
  name: string;
  age?: number; // 물음표 = 설정을 해도 되고 안해도 되는 값이라는 것을 의미
}
interface Developer9 extends Person8 {
  skills: string[];
}

const person1: Person8 = {
  name: '김사람',
  age: 20
};

const expert1: Developer9 = {
  name: '김개발',
  skills: ['javascript', 'react']
};

const people: Person8[] = [person1, expert1];