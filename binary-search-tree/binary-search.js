function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

// Create an instance of function BST
var bst = new BST(50);

// Add new node
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst);
// Traverse through binary search tree
console.log(bst.right.left.left); // 59
console.log(bst.left.right.left); // 35
console.log(bst.right.right); // 100

// Search node with a paricular value in BST
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.contains(50)); // true
console.log(bst.contains(14)); // false

// Depth First Traversal in binary search tree
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// Define iteratorFunc
function log(value) {
  console.log(value);
}

bst.depthFirstTraversal(log, 'in-order'); // 10,20,30,35,45,50,59,60,70,85,100,105
bst.depthFirstTraversal(log, 'pre-order'); // 50,30,20,10,45,35,70,60,59,100,85,105
bst.depthFirstTraversal(log, 'post-order'); // 10,20,35,45,30,59,60,85,105,100,70,50

// Breadth First Traversal in binary search tree
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function log(node) {
  console.log(node.value);
}

bst.breadthFirstTraversal(log); // 50,30,70,20,45,60,100,10,35,59,85,105

// Search node with minimum and maximum value in binary search tree
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function log(node) {
  console.log(node.value);
}

console.log('Min:', bst.getMinVal()); // 10
console.log('Max:', bst.getMaxVal()); // 105
