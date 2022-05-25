"use strict";
// 예시
// Queue 라는 클래스를 생성
// Queue 는 데이터를 등록 할 수 있는 자료형
// 먼저 등록(enqueue)한 항목을 먼저 뽑아올 수 (dequeue)있는 성질을 가지고있다.
// 실생활에서 접할 수 있는 간단한 대기줄
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
