/* ---------------------------------------------------------------------------------------------- */
/*                                             Classes                                            */
/* ---------------------------------------------------------------------------------------------- */

class Cookie {
  constructor(color) {
    this.color = color;
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

let cookieOne = new Cookie("green");
console.log(cookieOne.getColor());
cookieOne.setColor("yellow");
console.log(cookieOne.getColor());

let cookieTwo = new Cookie("blue");

/* ---------------------------------------------------------------------------------------------- */
/*                                            Pointers                                            */
/* ---------------------------------------------------------------------------------------------- */

// NOT using a pointer
let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num1);
console.log(num2);

// Using a pointer
let obj1 = { value: 11 }; // obj1 is pointing to a specific object in memory
let obj2 = obj1; // Obj2 is NOW also pointing to the same specific object in memory
let obj3 = { value: 57 };

obj1.value = 22; // Changing the value of obj1

console.log(obj1);
console.log(obj2); // obj2 is pointing to obj1
