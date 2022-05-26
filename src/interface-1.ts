interface Person7 {
  name: string;
  age?: number; // 물음표 = 설정을 해도 되고 안해도 되는 값이라는 것을 의미
}
interface Developer8 {
  name: string;
  age?: number;
  skills: string[];
}

const person9: Person7 = {
  name: '김사람',
  age: 20
};

const expert9: Developer8 = {
  name: '김개발',
  skills: ['javascript', 'react']
};