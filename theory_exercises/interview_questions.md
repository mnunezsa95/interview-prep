# Table of Contents

| No. | Questions                                                                                                      |
| --- | -------------------------------------------------------------------------------------------------------------- |
| 1   | [What is a closure?](#1-what-is-a-closure)                                                                     |
| 2   | [What is a pure function?](#2-what-is-a-pure-function)                                                         |
| 3   | [What is Function Composition?](#3-what-is-function-composition)                                               |
| 4   | [What is Functional Programming?](#4-what-is-functional-programming)                                           |
| 5   | [What are some compositions and their units in JavaScript?](#5-composition-paradims-javascript)                |
| 6   | [What is a Promise?](#6-what-is-a-promise)                                                                     |
| 7   | [What is a Web Component?](#7-what-is-a-web-component)                                                         |
| 8   | [How To: Create a Click Counter in React](#8-how-to-create-a-click-counter-in-react)                           |
| 9   | [What is a React Hook?](#9-what-is-a-react-hook)                                                               |
| 10  | [What Test Driven Development (TDD)?](#10-what-test-driven-development-tdd)                                    |
| 11  | [Why does [9,8,7,6][1,2] = 7 ?](#11-why-does-987612--7)                                                        |
| 12  | [What is the purpose of the slice() method?](#12-what-is-the-purpose-of-the-slice-method)                      |
| 13  | [What is the purpose of the splice() method?](#13-what-is-the-purpose-of-the-splice-method)                    |
| 14  | [What is the difference b/w slice() and splice()?](#14-what-is-the-difference-bw-slice-and-splice)             |
| 15  | [Is JavaScript a case-sensitive language](#15-is-javascript-a-case-sensitive-language)                         |
| 16  | [What are the possible ways to create objects in JS?](#16-what-are-the-possible-ways-to-create-objects-in-js)  |
| 17  | [What is the prototype chain?](#17-what-is-the-prototype-chain)                                                |
| 18  | [What is the difference between Call, Apply and Bind?](#18-what-is-the-difference-between-call-apply-and-bind) |
| 19  | [What is JSON and its common operations?](#19-what-is-json-and-its-common-operations)                          |
| 20  | [What is the difference between == and === operators?](#20-what-is-the-difference-between--and--operators)     |
| 21  | [What is an arrow function?](#21-what-is-an-arrow-function)                                                    |
| 22  | [What is a first class function?](#22-what-is-a-first-class-function)                                          |
| 23  | [What is a first order function?](#23-what-is-a-first-order-function)                                          |

---

### 1. What is a closure?

- A closure gives you access to an outer function's scope from an inner function.
- When functions are nested, the inner functions have access to the variables declared in the outer function scope (even after the outer function has returned or finished executing)
- Closure functions remember the environment in which they were created
- Use cases for closures:
  - Data Privacy
  - Sharing data with event handlers and callbacks

Example 1:

```JavaScript
const createSecret = (secret) => {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => {
      secret = newSecret;
    },
  };
};

const mySecret = createSecret("My secret");
console.log(mySecret.getSecret()); // My secret

mySecret.setSecret("My new secret");
console.log(mySecret.getSecret()); // My new secret
```

Example 2:

```JavaScript
function outer() {
    var outerVar = "Hello";
    function inner() {
        console.log(outerVar)
    }
    return inner;
}

var closureFn = outer();
closureFn(); // Output: Hello
```

Example 3: Using Closures for Data Privacy

```JS
const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
};
```

**[⬆ Back to Top](#table-of-contents)**

---

### 2. What is a Pure Function?

- Pure functions are used in functional programming!
- Pure functions are predictable (easier to understand, test, and debug)
- Pure functions follow two rules

  1. Deterministic -- given the same input, a pure function will always return the same output
  2. No side-effects -- a side effect is any application state change that is observable from outside the function (other than the return values)

- Examples of NON-Deterministic functions
  - a random number generator (always returns a different value)
  - a function that checks the time on a system or computer (time changes)
- Examples of Side-effects
  - Writing to the screen, or file
  - Logging to the console
  - Throwing an error

**[⬆ Back to Top](#table-of-contents)**

---

### 3. What is Function Composition?

- Function composition is the process of combining two or more functions to produce a new function (or perform some computation)
- Example

```JS
const compose = (f, g) => (x) => f(g(x));
const g = (num) => num + 1;
const f = (num) => num * 2;

const h = compose(f, g);
h(20); // 42; b/c 20 + 1 * 2 = 42
```

**[⬆ Back to Top](#table-of-contents)**

---

### 4. What is Functional Programming?

- Functional programming is a programming paradigm that uses pure functions as the primary units of composition.
- Functional programming is a declarative programming paradigm, which means that programs are written in terms of what they do, rather than how they do it.
- Key aspects of functional programming
  - Immutability
  - Higher-order Functions
  - Avoiding shared mutable state

**[⬆ Back to Top](#table-of-contents)**

---

### 5. Composition Paradims JavaScript?

- Object-Oriented Programming -- uses objects as the unit of composition
- Procedural Programming -- uses procedures as the unit of composition
- Functional Programming -- uses functions as the unit of composition

**[⬆ Back to Top](#table-of-contents)**

---

### 6. What is a Promise?

- A promise is an object representing the eventual completion or failure of an asynchronous operation
- It acts as a placeholder for a value that is initially unknown (typically because the computation of the value is not yet complete)
- Key characteristics of a Promise:

  - Stateful -- a promise has one of three states
    - Pending -- initial state (neither fulfilled or rejected)
    - Fulfilled -- the operation completed sucessfully
    - Rejected -- the operation failed
  - Immutable -- once rejected or fulfilled the state cannot be changed (pernamently holds the result)
  - Chaining -- promises can be chained (meaning the output of one Promise can be used as an input for another)
    - Chaining is done using `.then()` for success or `.catch()` for handling failures

- Example 1: Chaining a promise

```JS
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");  // You could also reject with a new error on failure.
  }, 1000);
});

promise
  .then((value) => {
    console.log(value); // Success!
  })
  .catch((error) => {
    console.log(error);
  });
```

- Example 2: Treating a promise synchronously (using async / await)

```JS
const processData = async () => {
  try {
    const data = await fetchData(); // Waits until the Promise is resolved
    console.log("Processed:", data); // Process and display the data
  } catch (error) {
    console.error("Error:", error); // Handle any errors
  }
};
```

**[⬆ Back to Top](#table-of-contents)**

---

### 7. What is a Web Component?

- Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.
- Web Components are built using open web technologies such as HTML, CSS, and JavaScript. They are part of the browser, and do not require external libraries or frameworks.
- Why are these useful?
  - Allow you to create reusable components that can be used in any framework, or no framework at all.

```HTML
<!-- Defining a simple Web Component -->
<script>
  class SimpleGreeting extends HTMLElement {   // Define a class that extends HTMLElement
    constructor() {  // Define a constructor that attaches a shadow root
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      // Use a template literal for the shadow root's innerHTML
      shadowRoot.innerHTML = `
        <style>
          /* Style the web component using a style tag */
          p {
            font-family: Arial, sans-serif;
            color: var(--color, black); /* Use a CSS variable for the color */
          }
        </style>
        <!-- The <slot> element is a placeholder for user-provided content. -->
        <!-- If no content is provided, it displays its own default content. -->
        <p><slot>Hello, Web Components!</slot></p>
      `;
    }

    static get observedAttributes() { // Define a static getter for the observed attributes
      return ["color"]; // Observe the color attribute
    }

    attributeChangedCallback(name, oldValue, newValue) { // Define a callback for when an attribute changes
      if (name === "color") { // Update the CSS variable when the color attribute changes
        this.style.setProperty("--color", newValue);
      }
    }
  }

  customElements.define("simple-greeting", SimpleGreeting); // Register the custom element with a tag name
</script>

<!-- Using the Web Component -->
<!-- Pass a custom greeting message using the slot -->
<simple-greeting>Hello, reader!</simple-greeting>

<!-- Pass a custom color using the attribute -->
<simple-greeting color="blue">Hello, World!</simple-greeting>
```

**[⬆ Back to Top](#table-of-contents)**

---

### 8. How To: Create a Click Counter in React

- Highlights:
  - Using the React `useState()` hook to manage the state
  - `onClick()` calls a callback function which calls the `setCount()` function

```JS
import React, { useState } from "react"; // import react, useState hook
const ClickCounter = () => {
  const [count, setCount] = useState(0); // Initialize count to 0
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  );
};

export default ClickCounter;
```

**[⬆ Back to Top](#table-of-contents)**

---

### 9. What is a React Hook?

- Hooks are functions that let you use state and other React features without writing a class
- Hooks allow you to use state, context, refs, and component lifecycle events by calling functions instead of writing class methods.

- Important React Hooks:

  - useState - allows you to add state to functional components. State variables are preserved between re-renders.
  - useEffect - lets you perform side effects in functional components. It combines the capabilities of componentDidMount, componentDidUpdate, and componentWillUnmount into a single function call, reducing the required code and creating better code organization than class components.
  - useContext - allows you to consume context in function components.
  - useRef - allows you to create a mutable reference that persists for the lifetime of the component.

- Rules of Hooks
  1. Hooks must be used at the top level of React functions (not inside loops, conditions, or nested functions)
  2. Hooks should only be used in React function components or custom Hooks.

**[⬆ Back to Top](#table-of-contents)**

### 10. What Test Driven Development (TDD)?

- Test Driven Development (TDD) is a software development approach where tests are written before the actual code
- TDD revolves around a short, repetitive development cycle designed to ensure that the code meets specified requirements and is free of bugs.
- TDD can play a vital role in improving code quality, reducing bugs, and increasing developer productivity.

**[⬆ Back to Top](#table-of-contents)**

---

### 11. Why does [9,8,7,6][1,2] = 7 ?

Running the following in the console

```JS
const res = [9,8,7,6][1,2]
console.log(res) # 7
```

- [1,2] will always get converted to [2]. Why does this happen?
  - In javascript, we can write expressions separated by a comma (,). and the result of the last expression will be returned.
  - The second indexed value is 7

```JS
// Example 1
const z = (1,2,3,4,5);
console.log(z); // outputs 5

// Example 2
const a = () => return 'a';
const b = () => return 'b';
const c = () => return 'c';

const d = (a(), b(), c());
console.log(d); // Outputs 'c'
```

**[⬆ Back to Top](#table-of-contents)**

---

### 12. What is the purpose of the slice() method?

- The `slice()` method returns the selected elements in an array as a NEW array objects
- It selects the elements starting at the given `start` argument, ending at the `end` argument (without including the end argument)

```JS
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```

Note: `slice()` doesn't mutate the original array but it returns the subset as a new array.

**[⬆ Back to Top](#table-of-contents)**

---

### 13. What is the purpose of the splice() method?

- The `splice()` method adds/removes items to/from an array and returns the removed item.
  - The first argument specifies the array position/index for insertion or deletion
  - The second argument specifies the number of elements to be deleted

```javascript
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
```

**Note:** Splice method modifies the original array and returns the deleted array.

**[⬆ Back to Top](#table-of-contents)**

---

### 14. What is the difference b/w slice() and splice()?

- Major Differences

| `slice()`                                | `splice()`                                   |
| ---------------------------------------- | -------------------------------------------- |
| Does not modify the original array       | Modifies the original array                  |
| Returns the subset of the original array | Returns the removed element of the array     |
| Used to pick the elements from an array  | Used to insert/delete elements to/from array |

**[⬆ Back to Top](#table-of-contents)**

---

### 15. Is JavaScript a case-sensitive language?

- Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

**[⬆ Back to Top](#table-of-contents)**

---

### 16. What are the possible ways to create objects in JS?

- There are many ways to create objects in javascript as mentioned below:

1.  Object Literal Syntax
    - The object literal syntax, is a comma-separated set of key-value pairs wrapped in curly braces.

```JS
var object = {
  name: "Sudheer",
  age: 34
};

// Object properties can be of any data type (including array or fn)

```

2. Object constructor
   - The simpliest way to create an empty ovject is using the `Object()` constructor function
   - The Object() is a built-in constructor so 'new' keyword is not required (both lines below work)

```JS
var object = new Object()
```

```Js
var object = Object();
```

3. Object's create method:
   - The create method of the Object is used to create a new object, by passing the specificied prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects.
   - The second argument is optional and is used to create properties of a newly created object

```JS
var object = Object.create(null);
```

4. Function constructor
   - In this approach, a function is created and applys the new operator to create object instances

```JS
function Person(name){
  this.name = name;
  this.age = 21;
}

var object = new Person("Sudhee");
```

5. Using the Prototype
   - This is similar to function constructor but uses its prototype for their properties and methods

```js
function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
```

6. ES6 Classes
   - Using classes to create objects (OOP)

```JS
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");
```

**[⬆ Back to Top](#table-of-contents)**

---

### 17. What is the Prototype Chain?

- Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

- The prototype on object instance is available through `Object.getPrototypeOf(object)` or **proto** property whereas prototype on constructors function is available through Object.prototype.

![Screenshot](images/prototype_chain.png)

```JS
// Using a constructor() fn to create a Person object
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

// Creating two instances of the Person object called father & mother
let father = new Person("John", 45, 6);
let mother = new Person("Ana", 45, 5);
console.log(father.age);
console.log(father.something); // Does not exist in the prototype

// Creating a new method on the Person prototype (any instances of person will have this fn)
Person.prototype.greet = function () {
  console.log(`Hello,  ${this.name}`);
};

father.greet(); // Output: Hello, John
mother.greet(); // Output: Hello, Ana
```

**[⬆ Back to Top](#table-of-contents)**

---

### 18. What is the difference between Call, Apply and Bind?

- **call():** The `call()` method invokes a function with a given `this` value and arguments provided one by one

```JS
// Two objects
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// A function
function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

// Calling invite on the two different objects, passing args one by one
invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

- **apply():** Invokes the function with a given `this` value and allows you to pass in arguments as an array

```JS
// Two objects
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// A function
function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

// Calling invite on the two different objects, passing in args as an array
invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
```

- **bind():** Returns a new function, allowing you to pass any number of args

```JS
// Two objects
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// A function
function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

// Binding a new function onto the two different objects
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);

// Calling the new function one by one
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

- `call()` and `apply()` are pretty much interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating `call()` is for comma (separated list) and `apply()` is for Array.

- `bind()` creates a new function that will have `this` set to the first parameter passed to `bind()`.

**[⬆ Back to Top](#table-of-contents)**

---

### 19. What is JSON and its common operations?

- JSON is a text-based data format following JavaScript object syntax. It is useful when you want to transmit data across a network.
- It is basically just a text file with an extension of .json, and a MIME type of application/json

**Parsing**: Converting a string to a native object

```JavaScript
JSON.parse(text)
```

**Stringification**: Converting a native object to a string to be transmitted

```JavaScript
JSON.stringify(object)
```

**[⬆ Back to Top](#table-of-contents)**

---

### 20. What is the difference between == and === operators?

- JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison.

  - The strict operators take type of variable in consideration,
  - Non-strict operators make type correction/conversion based upon values of variables.

- Rules for strict comparisons
  1. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions
  2. Two numbers are strictly equal when they are numerically equal (same value)
     - `NaN` is not equal to anything (including `NaN`)
     - Positive and negative numbers are equal to one another
  3. Two boolean operands are equal if they are both `true` or both `false`
  4. Two objects are strictly equal if they refer to the same Object
  5. `null` and `undefined` are not equal with `===`, but equal with `==`
     - Example1: `null === undefined` is `false`
     - Example2: `null === undefined` is `true`

```JavaScript
0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory

```

**[⬆ Back to Top](#table-of-contents)**

---

### 21. What is an arrow function?

- An arrow function is a shorter syntax for a function expression and does not have its own `this`, `arguments`, `super` or `new.target`.
  - These functions are best suited for non-method functions
  - These functions cannot be used as constructors

```JavaScript
const newFunction = (item) => {
  console.log(item)
}
```

**[⬆ Back to Top](#table-of-contents)**

---

### 22. What is a first class function?

- In Javascript, functions are first class objects.
- First-class functions means when functions in that language are treated like any other variable.

- This means a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

```JavaScript
const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler)
```

**[⬆ Back to Top](#table-of-contents)**

---

### 23. What is a first order function?

- A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

```JavaScript
const firstOrder = () => console.log("I am a first order function!");
```

**[⬆ Back to Top](#table-of-contents)**

---
