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
//! *                                            Closures                                            */
//! * ---------------------------------------------------------------------------------------------- */

/* 
What are closures? function that have access to variables from an outer function after the function has finished executing.
Closure functions remember the environment in which they were created 
*/

// --Example

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
