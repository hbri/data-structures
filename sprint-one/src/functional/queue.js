var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;
  var counter = 0;
  var head = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
    size++;
  };

  someInstance.dequeue = function() {
    let tempVar = storage[head];
    delete storage[head];
    head++;
    size--;
    if (counter === 0) {
      head = 0;
    }
    return tempVar;
  };

  someInstance.size = function() {
    return size >= 0 ? size : 0;
  };

  return someInstance;
};
