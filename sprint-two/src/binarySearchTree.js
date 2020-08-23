var BinarySearchTree = function(value) {
  // debugger;
  var binarySearchTree = {
    left: null,
    right: null,
    value: value
  };
  _.extend(binarySearchTree, binaryMethods);

  return binarySearchTree;
};

var binaryMethods = {
  insert: function (value) {
    var newTree = BinarySearchTree(value);

  },

  contains: function () {

  },

  depthFirstLog: function () {

  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

