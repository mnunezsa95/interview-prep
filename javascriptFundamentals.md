source:
https://builtin.com/software-engineering-perspectives/javascript-interview-questions

## 1. What is JavaScript?

- JavaScript is a high-level, intrepreted programming language, that makes it possible to create interactive web pages and online applications
- JS can be understood by browser and inserted in `HTML`
- Loosely-typed --> don't need to state the type of variable (JS figures it out alone)

## 2. What are the different data types in JavaScript?

- 7 primitive data types:
  - String, Number, Boolean, Null, Undefined, Symbol, BigInt
- 2 Complex data types
  - Object, Array

## 3. What is hoisting in JavaScript?

- The process of moving declarations to the top of their scope.
- This means that variables and functions can be used before they are declared
  - This happens when 'var' is used for variable
  - Function declarations are hoisted (fn expressions are not)
- This is why the language implemented 'let' and 'const'

## 4. What is the difference between null and undefined?

- Undefined -> a variable that has been declared but not assigned a value
- Null -> an assignment value that represents "no value" or "empty value"
  ![null vs undefined](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/2_javascript-interview.jpg)

## 5. Why do we use the word “debugger” in JavaScript?

- Debugger is used in JS to refer to a tool that can be used to step line by line through JS code
- Type the 'debugger' keyword where the breakpoint should be and open DevTools

## 6. What is the purpose of the “this” keyword in JavaScript?

- “This” keyword refers to an object that is executing the current piece of code.
- It references the object that is executing the current function.
- If the function being referenced is a regular function, “this” references the global object (window on browser, global on node)
  ![this keyword](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/4_javascript-interview.jpg)

## 7. What is the difference between == and === operators in JavaScript?

- The '==' is used to signify equality and does NOT take data type into account when comparing values
- the '===' is used to signify strict equality and DOES take data type into account when comparing values

## 8. What is the difference between “var” and “let” keywords in JavaScript?

- 'let' and 'var' are both used to declare variables
- 'var' will
  - declare a global variable (which means it can be used anywhere in the code)
  - hoist a variable, which means it can be used before it is declared
- 'let' will
  - declare a local variable relative to its scope
  - will not hoist the variable

## 9. What are closures in JavaScript?

- Closure functions --> have access to variables from an outer function after the function has finished executing.
  - Closure functions remember the environment in which they were created

![Closures](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/7_javascript-interview.jpg)

## 10. What is event delegation in JavaScript?

- Event Delegation -> a technique where an event listener is attached to a parent element.
  - This event listener handles events in the child elements
    - Helps optimize performance and reduce memory consumption

![event delegation](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/8_javascript-interview.jpg)

## 11. What is the difference between “let”, “const”, and “var”?

- `let` and `const` (intro in ES6) have block scope
  - `let` and `const` are NOT hoisted
- `let` can be re-assigned
- `const` cannot be reassigned
- `var` is functionally or globally scoped
  - Can be reassigned throughout the function
  - Is hoisted

## 12. What is implicit type coercion in JavaScript?

- 'Implicit Type Coercion' is the process of converting a value from one data type to another
  - Example: adding a STRING & a NUMBER; JS will coerce the number to a string before the operation

## 13. Explain the concept of prototypes in JavaScript

- Prototypes --> a mechanism used by JS objects for inheritance.
  - Every JS object has a prototype, which provides properties and methods that can be accessed by that object
- `new Date()`, `new Function()`, `new Object()`, `new Array()` are used to create a new instance of each kind of prototype

![Prototypes](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/11_javascript-interview.jpg)

## 14. What is the output of the following code?

- Output: "57" (string type)

![Excercuse](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/12_javascript-interview.jpg)

## 15. How can you clone an object in JavaScript?

- An object in JavaScript can be cloned in two ways:
  1. The spread operator (...) and assigning it a new value
  2. Using the Object.assign() method

![Cloning Object](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/13_javascript-interview.jpg)

## 16. What are higher-order functions in JavaScript?

- HOFs are functions that accept other functions as arguments or return functions as their results.

![HOFs](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/14_javascript-interview.jpg)

## 17. What is the purpose of the bind() method in JavaScript

- The bind() method is used to create a new function with a specific 'this' value and an initial set of arguments.
  - Allows for the content of a function to be set permanently

![the bind() function](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/15_javascript-interview.jpg)

## 18. What is the difference between function declarations and function expressions

- Function declarations are hoisted
- Function expressions are not hoisted

![function expression vs function declaration](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/16_javascript-interview.jpg)

## 19. What are the different types of errors in JavaScript?

- A wide variety but most common:
  1. Syntax Errors -> JS code is NOT syntactically correct
  2. Runtime Errors -> JS code is executed and there is a problem
  3. Logical Errors -> JS code does not do what it should do

## 20. What is memoization in JavaScript?

## 21. What is recursion in JavaScript?

## 22. What is the use of a constructor function in JavaScript?

- A constructor function is used to create objects.
- This constructor function is used to define properties and methods of an object

![constructor](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/20_javascript-interview.jpg)

## 23. What is the difference between a function declaration and a function expression in JavaScript?

- Function declaration -> created using the 'function' keyword; function declarations are hoisted
  - A statement that defines a function
- Function expression -> created using 'const' keyword; function expressions are NOT hoisted
  - An expression that evaluates to a function

## 24. What is a callback function in JavaScript?

- A callback function is a function pass as an argument to another function to be invoked later on

![callback function](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/23_javascript-interview.jpg)

## 25. What are promises in JS?

- Promises are objects used for asynchronous operations
- Promises return the completion or failure of an asynchronous operation and allows chaining and handling of success or errors

![promises](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/24_javascript-interview.jpg)

## 26. What is the difference between synchronous and asynchronous programming?

- Synchronous programming occurs in order; each statement blocks the execution until it is completed
- Asynchronous programming allows for multiple tasks to be executed at the same time; the program doesn't have to finish a task before moving onto the next one

![asynchronous code](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/26_javascript-interview.jpg)

## 27. How to handle errors in JS?

- Errors are handled in JS using the `try`-`catch` blocks.
  - `Try` block contains code that "may" cause an error
  - `Catch` block contains indication on how to handle the error

![try-catch](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/27_javascript-interview.jpg)

## 28. Explain the concept of event bubbling in JavaScript.

- Event Bubbling -> the process where an event triggers on a nested element and the same event is propagated to its parent elements in the DOM tree
  - Starts from the innermost element and goes up (towards the document object)

![parent](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/28_javascript-interview.jpg)

![child](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/29_javascript-interview.jpg)

## 29. What are arrow functions in JavaScript?

- Arrow functions are a shorthand syntax for writing function
- More compact syntax than traditional function expressions
- Inherit the `this` keyword from their parent scope

## 30. What is the difference between querySelector and getElementById?

- `getElementById()` --> will select an HTML element with a specific id
- `querySelector()` --> is used to select an HTML element using a CSS-selector

## 31. What is the purpose of the setTimeout() function in JavaScript?

- `setTimeout()` --> is used to delay the execution of a function or the evaluation of an expression by a specified amount of time (in milliseconds)

![setTimeout()](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/32_javascript-interview.jpg)

![result of setTimeout()](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/33_javascript-interview.jpg)

## 32. What is event delegation and why is it useful?

- Event Delegation --> a technique where an event listener is attached to a parent element to handle events occuring in the children
- Useful for dynamically create elements

![event delegation](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/34_javascript-interview.jpg)

## 33. How can you prevent the default behavior of an event in JavaScript?

- The default behavior of an event in JS can be avoided/prevented using `preventDefault()` method on the event object within an event handler

## 34. What is the difference between localStorage and sessionStorage in JavaScript?

- Session storage --> is deleted / expires when a page session ends
  - Can only be used within the same tab/window
- Local storage --> does not get deleted / expires when a page session ends
  - Is stored on the user's browser for later use
  - Can be used on different tabs/windows

![local and session storage](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/36_javascript-interview.jpg)

## 35. How can you convert a string to lowercase in JavaScript?

- A string can be converted to lowercase using the `toLowerCase()` function

## 36. What is the purpose of the map() function in JavaScript?

- The map function iterates over an array and performs a callback on each item within the array
- Returns a new array with the results

![map() function](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/38_javascript-interview.jpg)

## 37. What is the different between splice() and slice()

- `slice()` --> creates a new array that contains a portion of an existing array, specified by the starting and ending indices.

![slice() method](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/40_javascript-interview.jpg)

- `splice()` --> used to modify an array by adding, removing, or replacing elements at a specific position

![splice() method](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/39_javascript-interview.jpg)

## 38. What is the purpose of the reduce() function in JavaScript?

- `reduce()` --> used to reduce an array down to a single value by applying a function to each element and accumulating the result

![reduce() method](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/41_javascript-interview.jpg)

## 39. How can you check if an array includes a certain value in JavaScript?

- The array prototype has a built-in `includes()` method that checks whether the array contains the specific value
- Returns a boolean

![includes() method](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/42_javascript-interview.jpg)

## 40. What is the difference between prototype and instance properties in JavaScript?

## 41. What is the difference between an array and an object in JavaScript?

## 42. How can you remove duplicates from an array in JavaScript?

- Duplicates can be removed a variety of way(s)
  1. Using the `new Set()` object
  2. Using the `filter()` method with the `indexOf()` method

![removing duplicates](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/44_javascript-interview.jpg)

## 43. What is the purpose of the fetch() function in JavaScript?

## 44. What is a generator function in JavaScript?

## 45. What are the different events in JavaScript?

- There are many events in JS.
- Some common events:
  - click, mouseover, keydown, keyup, mouseout, mousein, dbclick

## 46. What are the different ways to access an HTML element in JavaScript?

- HTML Elements can be accessed using:
  1. `getElementById()` --> gets elements by their specified id
  2. `getElementByTagName()` --> gets an element by the tag name
  3. `querySelector()` --> gets elements by CSS-selectors
  4. `querySelectorAll()` --> gets all elements of a specified CSS-selector

## 47. What is the scope of a variable in JavaScript?

## 48. What are the different ways to create objects in JavaScript?

## 49. What is the purpose of the window object in JavaScript?

- `window` object represents the browser window.
  - Can be used to access browser's features (location bar, status bar, bookmark bar, etc)

## 50. What is the purpose of the async and await keywords in JavaScript?

## 51. What are the naming conventions of a variable

- can only begin with letter or underscore
- variable names are case-sensitive
- cannot use reserved keywords

## 52. What are the two way of embedding JavaScript code

- Write JS code in a separate file (JS) and import it using the `<script>` tag
- Write JS code within `<script>` tag inside the HTML file

## 53. What do you understand about cookies?

- A cookie is generally a small data file sent from a website and stored on the user's machine
- Cookies are used to remember information for later use

## 54. How to create a cookie?

- Use the `document.cookie = key1 : value1; key2 : value2; key3 : value3`

## 55. How to read a cookie?

- Use the `document.cookie` string that contains the cookies in the form of a key-value pairs

## 56. How would you delete a cookie?

- A cookie can be deleted by setting an expiration date and time;

## 57. What are imports and exports in JavaScript?

- Imports and exports help with writing modular JS
- Allows for JS code to be split into multiple files

## 58. What is the different between the document and window in JavaScript?

- `document` --> found under window object
- `window` --> a global object that holds the structure

## 59. What are some of the JS frameworks and their use?

- Frameworks aim to fulfill different aspects of the web application process
  - `React.js` --> frontend development of a web app
  - `Angular.js` --> frontend development of a web app
  - `Node.js` --> backend / server-side development of a web app

## 60. What is the typeof operator?

- Type of operator is used to determine the data type of something

## 61. What are the 3 types of scope in JavaScript?

- Global Scope (declaration outside of any function)
- Function Scope (declaration inside a function)
- Block Scope (declaration inside a block)

## 62. Disadvantages of Closures?

- Can lead to overconsumption and memory leaks
  - Closed-over variable will not be "garbage-collected" (removal of unused variables)

## 63. How can you take elements from a nested array and bring them up to the first level

- The array prototype built-in method `flat()` can be used to flatten an array
- Each time the `flat()` is called, only one level is flattened
