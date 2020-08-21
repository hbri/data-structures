class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
  }

  // push
  push(value) {
    this[this.counter] = value;
    this.counter++;
  }

  // pop
  pop() {
    let tempVal = this[this.counter - 1];
    delete this[this.counter - 1];
    this.counter--;
    return tempVal;
  }

  //size
  size() {
    return this.counter < 0 ? 0 : this.counter;
  }
}