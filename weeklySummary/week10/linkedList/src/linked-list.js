class Node {
  // YOUR CODE HERE
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {

    if (this.tail === null) {
      const newNode = new Node(value);
      this.tail = newNode;
      this.head = newNode;

      // const newNode = ;
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      const newTail = new Node(value);
      const oldTail = this.tail;

      oldTail.next = newTail;
      newTail.previous = oldTail;
      this.tail = newTail;
    }
  }
}

// [ "first" => "second" => "Third" <=> newTail]
//     head                               tail

// [ Node("first") ]
//  head ^     ^ tail


module.exports = {
  Node,
  LinkedList
}
