class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  copy() {

  }

  copyHelper(node) {

  }

  getRoot() {
    if(this.isEmpty()) {
      throw new Error("NoSuchElementException");
    }

    return this.root.data;
  }

  isEmpty() {
    return this.root === null;
  }

  getSize() {
    let count = 0;

    const helper = (node) => {
      if (!node) {
        return;
      }
      
      count++;
      helper(node.left)
      helper(node.right)
    }

    helper(this.root);
    return count;
  }

  getHeight() {
    const helper = (node) => {
      if(!node) {
        return 0; 
      } else if (!node.left && !node.right) {
        return 1;  
      } else {
        return Math.max(helper(node.left), helper(node.right)) + 1;
      }
    }

    return helper(this.root);
  }

  findMin() {
    if (this.root === null) {
      throw new Error("NoSuchElementException");
    }

    const helper = (node) => {
      if (!node.left) {
        return node.data;
      }    
      helper(node.left);
    }

    return helper(this.root);
  }


  findMax() {

  }

  findSubTreeMax(node) {

  }

  search(data) {

  }

  searchFromSubTree(data, node) {

  }

  equals(tree) {

  }

  subTreeEquals(node1, node2) {

  }

  insert(data) {

  }

  insertToSubTree(data, node) {

  }

  remove(data) {

  }

  removeFromSubTree(data, node) {

  }

  preOrderPrint() {

  }

  inOrderPrint() {

  }

  postOrderPrint() {

  }
}

module.exports = {
  BST
}
