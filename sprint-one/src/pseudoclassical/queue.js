var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.head = 0;
  this.newIndex = 0;
};

Queue.prototype = {
  constructor: Queue,
  enqueue: function(value) {
    // Add value at the newIndex location
    this[this.newIndex] = value;
    this.newIndex++;
    this.counter++;
  },
  dequeue: function() {
    let tempVar = this[this.head];
    delete this[this.head];
    this.counter--;
    this.head++;
    return tempVar;
  },
  size: function() {
    return this.counter < 0 ? 0 : this.counter;
  }
};