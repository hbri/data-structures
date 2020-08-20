var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    newIndex: 0,
    head: 0,
    len: 0
  };

  // Add methods to storage object and return storage object
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  // Enqueue
  enqueue: function(value) {
    this[this.newIndex] = value;
    this.newIndex++;
    this.len++;
  },
  // Dequeue
  dequeue: function() {
    let tempVal = this[this.head];
    delete this[this.head];
    this.head++;
    this.len--;
    return tempVal;
  },

  // Size
  size: function() {
    return this.len < 0 ? 0 : this.len;
  }
};


