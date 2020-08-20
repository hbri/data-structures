var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    counter: 0
  };

  _.extend(storage, stackMethods);
  return storage;
};
// var stackMethods
var stackMethods = {
  push: function(value) {
    this[this.counter] = value;
    this.counter++;
  },
  pop: function() {
    let tempVar = this[this.counter - 1];
    delete this[this.counter - 1];
    this.counter--;
    return tempVar;
  },
  size: function() {
    return this.counter < 0 ? 0 : this.counter;
  }
};