class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
    this.newIndex = 0;
    this.count = 0;
  }

  enqueue(value) {
    this[this.newIndex] = value;
    this.count++;
    this.newIndex++;
  }
  dequeue() {
    var tempVar = this[this.head];
    delete this[this.head];
    this.head++;
    this.count--;
    if (this.count === 0) {
      this.head = 0;
      this.newIndex = 0;
    }
    return tempVar;
  }
  size() {
    return this.count < 0 ? 0 : this.count;
  }
}
