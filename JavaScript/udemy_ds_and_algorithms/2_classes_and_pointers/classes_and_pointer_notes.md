# Classes and Pointers Notes

## Resources

---

## What are Classes?

- Classes are blueprints for creating objects in JavaScript, as well as, many other programming languages
- Classes are typically made up of:
  - A constructor function that is initiated everything an object is created from a specific class
  - Properties --> specific data that belongs to the class
  - Methods --> functions that belong to the class
    - Getter methods --> Get some kind of information
    - Setter methods --> Set some kind of infromation

```js
// Creating a cookie class
class Cookie {
  constructor(color) {
    this.color = color; // Creating a property using the constructor
  }
  // A getter function
  getColor() {
    return this.color;
  }
  // A setter function
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("green"); // Creating a green cookie from the Cookie class
let cookieTwo = new Cookie("blue"); // Creating a blue cookie from the Cookie class
console.log(cookieOne.getColor()); // Getting the color for cookieOne; Returns "green"
cookieOne.setColor("yellow"); // Setting the color of cookieOne to 'yellow'
console.log(cookieOne.getColor()); // Getting the color for cookieOne; Returns "yellow"
```

---

## What are Pointers?

- In JavaScript, objects (arrays, objects, etc) use 'POINTERS' to point to the specific object in memory
- In JavaScript, primitive data types (strings, numbers, etc) do NOT use 'POINTERS'

Example: NOT USING POINTERS

```js
let num1 = 5; // Setting variable num1 to 5
let num2 = num1; // Setting variable 'num2' to num1
num1 = 10; // Changing value of num1 to 10

console.log(num1); // 10
console.log(num2); // 5
// The two variables DO NOT use POINTERS, so they are not pointed to the same object in memory
```

Example: USING POINTERS

```js
let obj1 = { value: 11 }; // obj1 is pointing to a specific object in memory
let obj2 = obj1; // Obj2 is also pointing to the SAME specific object in memory
let obj3 = { value: 57 };

obj1.value = 22; // Changing the value of obj1

console.log(obj1.value); // 22
console.log(obj2.value); // 22
// Since the variables obj1 and obj2 are POINTING to the same object in memory, they are LINKED. This means making a change to the object itself.
```

---
