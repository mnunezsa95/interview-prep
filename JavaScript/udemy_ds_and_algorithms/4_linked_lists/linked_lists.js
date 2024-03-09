/*
The 'Node' class creates a new Node based on the value passed into it
- Sets the value equal to the value passed in at initalization
- Sets the pointer equal to null at initalization
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
The 'LinkedList' class creates a new LinkedList with the value passed into it
*/
class LinkedList {
  constructor(value) {
    const newNode = new Node(value); // Creates a new instance of the Node class with the value it recieved
    this.head = newNode; // Sets the head of list as the new Node
    this.tail = this.head; // Has the tail pointing to the head
    this.length = 1;
  }
}

let myLinkedList = new LinkedList(4);
console.log(myLinkedList);
