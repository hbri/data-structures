var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  // create property to make current object unique
  storage.counter = 0;
  return storage;

};

var stackMethods = {

  push: function(value) {
    this[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    var tempVal = this[this.counter - 1];
    delete this[this.counter - 1];
    this.counter--;
    return tempVal;
  },

  size: function() {
    return this.counter < 0 ? 0 : this.counter;
  }
};