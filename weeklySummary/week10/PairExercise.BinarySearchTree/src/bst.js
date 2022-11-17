class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }
  insert(newNodeValue) {
    // If the newNodeValue is less than this branch...
    if (newNodeValue < this.value) {
      // Insert it on the left
      if (this.left !== null) this.left.insert(newNodeValue);
      else this.left = new BinarySearchTree(newNodeValue);
    } else {
      // Insert it on the right
      if (this.right !== null) this.right.insert(newNodeValue);
      else this.right = new BinarySearchTree(newNodeValue);
    }
  }
  size() { }
  contains() { }
  depthFirstForEach(callback, orderType = "in-order") {
    if (orderType === "in-order") {
      // Go down the left side
      if (this.left) this.left.depthFirstForEach(callback, orderType);

      // Process our current value
      callback(this.value);

      // Go down the right side
      if (this.right) this.right.depthFirstForEach(callback, orderType);
    }
    if (orderType === "pre-order") {
      // Process our current value
      callback(this.value);
      // Go down the left side
      if (this.left) this.left.depthFirstForEach(callback, orderType);
      // Go down the right side
      if (this.right) this.right.depthFirstForEach(callback, orderType);
    }
    if (orderType === "post-order") {
      // Go down the left side
      if (this.left) this.left.depthFirstForEach(callback, orderType);
      // Go down the right side
      if (this.right) this.right.depthFirstForEach(callback, orderType);
      // Process our current value
      callback(this.value);
    }
  }
  breadthFirstForEach() { }
}

// const insert = (currNode, newNodeValue) => {
//   // If the newNodeValue is less than this branch...
//   if (newNodeValue < currNode.value) {
//     // Insert it on the left
//     if (currNode.left !== null) insert(currNode.left, newNodeValue);
//     else currNode.left = new BinarySearchTree(newNodeValue);
//   } else {
//     // Insert it on the right
//     if (currNode.right !== null) insert(currNode.right, newNodeValue);
//     else currNode.right = new BinarySearchTree(newNodeValue);
//   }
// }

// insert(root, 22);

module.exports = BinarySearchTree
