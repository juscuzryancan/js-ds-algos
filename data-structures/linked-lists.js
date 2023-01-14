class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return `${this.data}`;
  }
}

//Some Linked Lists will only have the reference to the head
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.iterator = null;
    this.length = 0;
  }

  addFirst(data) {
    if(data === null || data === undefined) {
      throw new Error("EmptyParameterError");
    }

    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  addLast(data) {
    if(data === null || data === undefined) {
      throw new Error("EmptyParameterError");
    }

    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;  
  }

  removeFirst() {
    if(this.isEmpty()) {
      throw new Error("NoSuchElementException")
    }

    if(this.getLength() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
  }

  removeLast() {
    if(this.isEmpty()) {
      throw new Error("NoSuchElementException")
    }

    if(this.getLength() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.head;
      while(node.next.next) {
        node = node.next
      }
      this.tail = node;
      node.next = null;
    }

    this.length--;
  }

  getFirst() {
    if(this.isEmpty()) {
      throw new Error("NoSuchElementException")
    }

    return this.head.data;
  }

  getLast() {
    if(this.isEmpty()) {
      throw new Error("NoSuchElementException")
    }

    return this.tail.data;
  }

  getLength() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  placeIterator() {
    this.iterator = this.head;
  }

  removeIterator() {
    if(this.offEnd()) {
      throw new Error("NoSuchElementException")
    }

    let prev = this.head;
    while(prev.next !== this.iterator){
      prev = prev.next;
    }

    prev.next = this.iterator.next
    this.length--;
  }

  getIterator() {
    if(this.offEnd()) {
      throw new Error("NoSuchElementException")
    }

    return this.iterator.data; 
  }

  addIterator(data) {
    if(data === null || data === undefined) {
      throw new Error("EmptyParameterError");
    }

    const node = new Node(data); 

    if(this.iterator.next === null) {
      this.tail = node;
      this.iterator.next = node;
    } else {
      let temp = this.iterator.next;
      this.iterator.next = node;
      node.next = temp;
    }
    
    this.length++;
  }

  advanceIterator() {
    this.iterator = this.iterator.next;
  }

  offEnd() {
    return this.iterator === null;
  }

  toString() {
    let string = `Head: ${(this.head) ? this.head.toString(): "null"} \nTail: ${(this.tail) ? this.tail.toString() : "null"} \nLength: ${this.length}`;

    if(this.isEmpty()) {
      string += "\nList is empty";
      return string;
    }
      
    string += "\nList Data: ";
    let node = this.head;
    while(node !== null) {
      string += `${node.data} `;
      node = node.next;
    }

    return string;
  }
}

module.exports = { 
  LinkedList 
};
