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
    this.size = 0;
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

  }

  getSubTreeSize(node) {

  }

  getHeight() {

  }

  getSubTreeHeight(node){

  }

  findMin() {

  }

  findSubTreeMin(node) {

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
