// 잘못된 예시
// class Person {
//   constructor(name) {
//     // 클래스 프로퍼티의 선언과 초기화
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} is walking`);
    
//   }
// }

// 올바른 예시
class Person9 {
  // 클래스 프로퍼티를 사전 선언하여야 한다.
  name: string;

  constructor(name: string) {
    // 클래스 프로퍼티수에 값을 할당
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
    
  }
}

const person3 = new Person9('Lee');
person3.walk(); // Lee is walking