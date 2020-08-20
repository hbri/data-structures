var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Create a global counter
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    let tempVar = storage[counter - 1];
    delete storage[counter - 1];
    counter--;
    return tempVar;
  };

  someInstance.size = function() {
    return counter >= 0 ? counter : 0;
  };

  return someInstance;
};