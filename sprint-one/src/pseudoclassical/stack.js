var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};

Stack.prototype = {
  constructor: Stack,
  push: function(value) {
    // adding value at this.counter position
    // increment this.counter
    this[this.counter] = value;
    this.counter++;

  },
  pop: function() {
    // create temp variable
    let tempVar = this[this.counter - 1];
    // delete the variable that was at this[counter - 1]
    delete this[this.counter - 1];
    // reduce this.counter--
    this.counter--;
    // return temp variable
    return tempVar;
  },
  size: function() {
    // ternary operator to return 0 or counter value
    return this.counter < 0 ? 0 : this.counter;
  }
};
