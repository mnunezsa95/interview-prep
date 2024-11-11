/* ---------------------------------------------------------------------------------------------- */
/*                                    Linked Lists: Constructor                                   */
/* ---------------------------------------------------------------------------------------------- */

/*
The 'Node' class creates a new Node based on the value passed into it
- Sets the value equal to the value passed in at initalization
- Sets the pointer equal to null at initalization
*/

/*
The 'LinkedList' class creates a new LinkedList
- The 'LinkedList' class takes in the value and creates a new Node
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value); // Creates a new instance of the Node class with the value it recieved
    this.head = newNode; // Sets the head of list as the new Node
    this.tail = this.head; // Has the tail pointing to the head
    this.length = 1;
  }

  /* 
  push() is O(1) operation
  Edge Cases:
  - 1) The node does not have any nodes yet
  */
  push(value) {
    const newNode = new Node(value); // Creates a new instance of the Node class with the value it recieved from the push fn
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /* 
  pop() is O(n) operation
  Edge Cases:
  - 1) A LL that does not have any items
  - 2) A LL that only has 1 item
  */
  pop() {
    if (!this.head) return undefined; // return undefined if there are no nodes
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // Set head and tail to null if the length of the LL is 0
      this.head = null;
      this.tail = null;
    }
    return temp; // Return the number that was popped off
  }

  /* 
  unshift() is O(1) operation
  Edge Cases:
  - 1) linked list is empty
  */
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /* 
  shift() is O(1) operation
  Edge Cases:
  - 1) if linked list has 1 item
  - 2) if linked list has no items
  */
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }
}

let myLinkedList = new LinkedList(11); // Creating a linkedlist with a value of 4
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);

console.log(myLinkedList);
