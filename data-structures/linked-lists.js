const { testException } = require("../utils");

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
    this.length = 0;
  }

  /**
  * 
  */
  addFirst(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  addLast(data) {
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

    return this.head;
  }

  getLast() {
    if(this.isEmpty()) {
      throw new Error("NoSuchElementException")
    }

    return this.tail;
  }

  getLength() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
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


const list355 = new LinkedList();

testException(() => {
  list355.getFirst();
});

testException(() => {
  list355.getLast();
});

list355.addFirst(5);
list355.addFirst(5);
list355.addFirst(3);
console.log(list355.toString())

list355.removeLast()
console.log("after remove last",list355.toString())

list355.removeFirst()
console.log("after removefirst", list355.toString())

list355.removeFirst();

testException(() => {
  list355.removeFirst();
});

testException(() => {
  list355.removeLast();
});
