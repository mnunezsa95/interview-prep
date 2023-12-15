//! * ---------------------------------------------------------------------------------------------- */
//! *                                       let, var and const                                       */
//! * ---------------------------------------------------------------------------------------------- */

var a = 3;
var a = 4;
console.log(a); // Output: 4 b/c variables can be reassigned when using var

let b = 3;
b = 4;
console.log(b); // Output: 4 b/c variables can be reassigned
// let cannot be re-declared (meaning we cannot use let b = 4 again)

const d = 3;
console.log(d); // Output: 3; if we tried to resassign it would produce an error

//! * ---------------------------------------------------------------------------------------------- */
//! *                                         Types of Scope                                         */
//! * ---------------------------------------------------------------------------------------------- */

var a = 5; // this variable globally-scoped scope
function adder() {
  let b = 7; // this variable is function-scoped; cannot be accessed outside this function
  console.log(a + b);
}

adder();

{
  const c = 10; // this variable is block-scoped; cannot be accessed outside this block
  console.log(c);
}

//! * ---------------------------------------------------------------------------------------------- */
//! *                                            Closures                                            */
//! * ---------------------------------------------------------------------------------------------- */

/* 
What are closures? Functions that have access to variables from an outer function after the function has 
finished executing. Closure functions remember the environment in which they were created 
*/

// * Example 1:
// there is an outer function called "outerFunction"
function outerFunction(outerVariable) {
  // the outerFunction returns a new function called "innerFunction"
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable); // outerVariable can be accessed because innerFunction remembers it
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("Outside");
newFunction("inside");
console.log(newFunction);

// * Example 2:
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

let z = x();
console.log(z); // Output: [Function: y]
z(); // Will return 7, b/c this is the result of x()

//! * ---------------------------------------------------------------------------------------------- */
//! *                                           Prototypes                                           */
//! * ---------------------------------------------------------------------------------------------- */

// using a constructor() function to create a Person Object
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

// creating a new instance of the Person object, called father
let father = new Person("John", 45, 6);
let mother = new Person("Ana", 45, 5);
console.log(father.age);
console.log(father.something); // does not exist in the prototype

// creating a new method on the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello,  ${this.name}`);
};

father.greet(); // Output: Hello, John
mother.greet(); // Output: Hello, Ana

//! * ---------------------------------------------------------------------------------------------- */
//! *                                              HOFs                                              */
//! * ---------------------------------------------------------------------------------------------- */

//* Example 1
// A simple multiplication function
function multiplyByTwo(num) {
  return num * 2;
}

// a HOF that accepts a num input and an operation input
function applyOperation(num, operation) {
  return operation(num); // returns another function's result
}

let res = applyOperation(5, multiplyByTwo);
console.log(res);

//* Example 2
const greet = () => {
  const prefix = "Mr";
  return (name) => {
    console.log(`${prefix} ${name}, welcome!`);
  };
};

greet()("Jack");

//! * ---------------------------------------------------------------------------------------------- */
//! *                                       The 'this' keyword                                       */
//! * ---------------------------------------------------------------------------------------------- */

// An object for an airline
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    // the 'this' keyword points back to this object; allows the method to have context on which object called it
    console.log(`${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Marlon Nunez");
lufthansa.book(635, "John Smith");

// * This airline to also have a book() function, but should not not copy the code
const eurowings = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
};

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

const emirate = {
  airline: "Emirate Airlines",
  iataCode: "EM",
  bookings: [],
};

// * Making a copy
const book = lufthansa.book;

// * Using the call() and apply() methods

book.call(eurowings, 400, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 23, "Mary Cooper");
console.log(lufthansa);

// apply() takes in an array as second argument
let flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// * Using the bind() method
bookEM = book.bind(emirate, 100);
bookEM("Marlon Nunez");
console.log(emirate);
