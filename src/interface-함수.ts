interface Add {
  (num1 : number, num2 : number): number;
}

const add2 : Add = function(x, y) {
  return x + y;
}

add2(10, 20);

interface IsAdult {
  (age: number): boolean;
}

const a5: IsAdult = (age) => {
  return age > 19;
}

a5(33) // true