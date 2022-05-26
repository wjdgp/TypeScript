// Intersection Types

// 유니언 타입이 or이라면
// 교차타입은 and를 의미한다.

interface Car9 {
  name: string;
  start(): void;
}

interface Toy9 {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy9 & Car9 = {
  name: "타요",
  start(){},
  color: "blue",
  price: 1000
}
// Toy와 Car에 모든 속성을 다 기입해줘야한다.
// & == and