// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //debugger;
  this.nodes[node] = {
    value: node,
    pointsTo: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    key = parseInt(key);
    for (var i = 0; i < this.nodes[key].pointsTo.length; i ++) {
      if (_.contains(this.nodes[key].pointsTo[i], node)) {
        key.pointsTo.splice(this.nodes[key].pointsTo[i].indexOf(node), 1);
      }
    }
  }
  delete this.nodes[node];

  // Iterate over this.nodes keys and delete node value from any array that contains node using splice

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //debugger;
  if (this.nodes[toNode]) {
    if (_.contains(this.nodes[fromNode].pointsTo, toNode)) {
      return true;
    } else if (_.contains(this.nodes[toNode].pointsTo, fromNode)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //debugger;
  this.nodes[fromNode].pointsTo.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Splice the indexOf toNode value in the fromNode's pointsTo array?
  this.nodes[fromNode].pointsTo.splice(this.nodes[fromNode].pointsTo.indexOf(toNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Use _.each to iterate over Graph's nodes and run cb
  _.each(this.nodes, function(eachNode) {
    cb(eachNode.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


