var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.head = 0;
  storage.newIndex = 0;
  storage.quantity = 0;

  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.newIndex] = value;
    this.quantity++;
    this.newIndex++;
  },

  dequeue: function() {
    let tempVal = this[this.head];
    delete this[this.head];
    this.head++;
    this.quantity--;
    return tempVal;
  },
  size: function() {
    return this.quantity < 0 ? 0 : this.quantity;
  }
};


