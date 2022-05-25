class Foo {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
    // public, protexted, private 접근 제한자 모두 클래스 내부에서 참조 가능
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const foo = new Foo('x', 'y', 'z');

// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능
console.log(foo.x);

// protexted 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 불가능
console.log(foo.y);
// error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 불가능
console.log(foo.z);
// error TS2341: Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    // public 접근 제한자는 자식 클래스 내부에서 참조 가능
    console.log(this.x);
    
    // protexted 접근 제한자는 자식 클래스 내부에서 참조 가능
    console.log(this.y);
    
    // private 접근 제한자는 자식 클래스 내부에서 참조 불가능
    console.log(this.z);
    // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
  }
}