var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //debugger;
  // If currentNode.value === target
  // Return true
  // if (isValueTarget(this, target) === true) {
  //   return true;
  // }

  // If currentNode.children.length is > 0
  // Run the recursive function
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (isValueTarget(this.children[i], target)) {
        return true;
      }
    }
  }

  return false;
};

// Helper Recursive function
var isValueTarget = function (node, target) {
  if (node.value === target) {
    return true;
  } else {
    for (var j = 0; j < node.children.length; j++) {
      return isValueTarget(node.children[j], target);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
