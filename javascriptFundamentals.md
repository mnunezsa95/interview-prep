source:
https://builtin.com/software-engineering-perspectives/javascript-interview-questions

## 1. What is JavaScript?

- JavaScript is a high-level, intrepreted programming language, that makes it possible to create interactive web pages and online applications

## 2. What are the different data types in JavaScript?

- 7 primitive data types:
  - String, Number, Boolean, Null, Undefined, Symbol, BigInt
- 2 Complex data types
  - Object, Array

## 3. What is hoisting in JavaScript?

- The process of moving declarations to the top of their scope.
- This means that variables and functions can be used before they are declared
  - This happens when 'var' is used for varibale
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

- Refers to the current object that is executing the current method (or function).
- Allows access to the object properties and methods within the context of that object
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

## 10. What is event delegation in JavaScript?

- Event Delegation -> a technique where an event listener is attached to a parent element.
  - This event listener handles events in the child elements
    - Helps optimize performance and reduce memory consumption

![event delegation](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/8_javascript-interview.jpg)

## 11. What is the difference between “let”, “const”, and “var”?

- 'let' and 'const' (intro in ES6) have block scope
- 'var' is function scoped
- 'const' cannot be reassigned; 'let' can
- 'var' can be reassigned throughout the function

## 12. What is implicit type coercion in JavaScript?

- 'Implicit Type Coercion' is the process of converting a value from one data type to another
  - Example: adding a STRING & a NUMBER; JS will coerce the string to a number before the operation

## 13. Explain the concept of prototypes in JavaScript

## 14. What is the output of the following code?

- Output: "57" (string type)

![Excercuse](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/12_javascript-interview.jpg)

## 15. How can you clone an object in JavaScript?

- An object in JavaScript can be cloned in two ways:
  1. The spread operator (...) and assigning it a new value
  2. Using the Object.assign() method

![Cloning Object](https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/13_javascript-interview.jpg)

## 16. What are higher-order functions in JavaScript?

## 17. What is the purpose of the bind() method in JavaScript

- The bind() method is used to create a new function with a specific 'this' valiue and an initial set of arguments.
  - Allows for the content of a function to be set pernamently

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
