var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node based on the input value
    var newNode = Node(value);
    // if head is null
    if (list.head === null) {
      // point head to this newNode
      list.head = newNode;
      // point tail to this newNode
      list.tail = newNode;
    }
    // add newNode to node that is currently tail using .next
    var curTail = list.tail;
    curTail.next = newNode;

    // point tail at newNode you just added
    list.tail = newNode;
  };

  list.removeHead = function() {
    var oldHead = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {
    let currentNode = list.head;

    while (currentNode.next !== null) {
      if (currentNode.value === target || currentNode.next.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
