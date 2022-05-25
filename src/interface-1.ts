interface Person {
  name: string;
  age?: number; // 물음표 = 설정을 해도 되고 안해도 되는 값이라는 것을 의미
}
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};