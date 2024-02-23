//! /* ---------------------------------------------------------------------------------------------- */
//! /*                Function Expressions vs Function Declarations vs Arrow Functions                */
//! /* ---------------------------------------------------------------------------------------------- */

/* ------------------------------------ Function Declarations ----------------------------------- */
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 2));

/* ------------------------------------ Function Expressions ------------------------------------ */
const addNumbers2 = function (a, b) {
  return a + b;
};
console.log(addNumbers2(2, 2));

/* --------------------------------------- Arrow Functions -------------------------------------- */
const addNumbers3 = (a, b) => {
  return a + b;
};
console.log(addNumbers3(2, 2));

//! /* ---------------------------------------------------------------------------------------------- */
//! /*                            5 Ways to Create an Object in JavaScript                            */
//! /* ---------------------------------------------------------------------------------------------- */

/* ------------------------------------- 1. Object Literals ------------------------------------- */
/*  Obj Literals are used for creating single, standalone objects that don’t require a blueprint 
or repeated instantiation */
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

console.log(car);

/* ----------------------------------- 2. new Object() Syntax ----------------------------------- */
const person = new Object();
person.name = "Marlon";
person.age = 28;
person.isEmployed = true;
console.log(person);

/* ---------------------------------- 3. Constructor Functions ---------------------------------- */
// Constructor functions are used to create multiple instances of a similar object.
function Smartphone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}
const myPhone = new Smartphone("Apple", "iPhone 14", 2023);
console.log(myPhone);

/* -------------------------------- 4. The Object.create() Method ------------------------------- */
/* Object.create() is used to create an object that directly inherits from another without calling 
the parent’s constructor.*/
const animal = {
  type: "Animal",
  displayType: function () {
    console.log(this.type);
  },
};
const dog = Object.create(animal);
dog.type = "Dog";
dog.displayType();

/* ------------------------------------- 5. ES6 Class Syntax ------------------------------------ */
/* ES6 Classes are used complex applications where the organization, readability, and inheritance 
structure of your code are important*/
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}
const myBook = new Book("The Catcher in the Rye", "J. D. Sallinger", 1951);
console.log(myBook.getSummary());

//! /* ---------------------------------------------------------------------------------------------- */
//! /*                                     Deep Cloning an Object                                     */
//! /* ---------------------------------------------------------------------------------------------- */
/* In JavaScript, objects and arrays are reference types, which means that when you assign one variable 
to another, you’re actually copying a reference to the original object or array, not creating a new 
independent copy. */

function deepCloneObjectOrArray(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitive types or null (don't need to be copied)
  }
  // If it's an array, clone each element
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloneObjectOrArray(item));
  }
  // If it's an object, clone each property (including nested objects and arrays)
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepCloneObjectOrArray(obj[key]);
    }
  }
  return clonedObj;
}

const originalObject = {
  name: "Spider",
  age: 25,
  hobbies: ["swinging", "walking"],
  address: {
    city: "Brooklyn",
    state: "New York",
  },
};
const originalArray = [1, 2, 3, 4, 5];

const clonedObject = deepCloneObjectOrArray(originalObject);
const clonedArray = deepCloneObjectOrArray(originalArray);

console.log(clonedObject === originalObject);
console.log(clonedArray === originalArray);
