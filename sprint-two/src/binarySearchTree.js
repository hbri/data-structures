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
    let newTree = BinarySearchTree(value);
    // If value < this.value
    if (value < this.value) {
      if (this.left === null) {
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
      // If value > this.value
    } else {
      if (this.right === null) {
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
  },

  contains: function (target) {
    if (this.value === target) {
      return true;
    }

    if (target < this.value && this.left !== null) {
      return this.left.contains(target);
    } else if (this.value !== target && this.right !== null) {
      return this.right.contains(target);
    }
    return false;
  },

  depthFirstLog: function (func) {
    func(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(func);
    }

    if (this.right !== null) {
      this.right.depthFirstLog(func);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

