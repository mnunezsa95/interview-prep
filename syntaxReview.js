//! * ---------------------------------------------------------------------------------------------- */
//! *                                            Functions                                           */
//! * ---------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------------- */

//! Function Declarations
function functionDeclaration(param1, param2, param3) {
  console.log(`I am a function declaration that takes in 3 parameters: 
  ${param1}, ${param2}, ${param3}. I am hoisted to the top of the scope.`);
}

functionDeclaration("param1", "param2", "param3");

/* ------------------------------------------------------------------------------------------------- */

//! Function Expressions
const functionExpression = function (param1 = "param1", param2 = "param2") {
  console.log(`I am a function expression that takes in 2 params:
  ${param1}, ${param2}. I have added default paramters incase they are missed when I am called. 
  I am not hoisted since I am created using const or let. `);
};

functionExpression();

/* ------------------------------------------------------------------------------------------------- */

//! Arrow Functions
const arrowFunction = (param1) => {
  console.log(`I am an arrow function that takes in 1 params: ${param1}. I am not hoisted
  b/c I am created using 'const' and get my 'this' keyword from my surrounding scope.`);
};

arrowFunction("param1");

/* ------------------------------------------------------------------------------------------------- */

//! * ---------------------------------------------------------------------------------------------- */
//! *                                              Loops                                             */
//! * ---------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------------- */

// ! For Loop
function forLoop() {
  let arrOfAnimals = ["dog", "cat", "bird"];
  for (let i = 0; i < arrOfAnimals.length; i++) {
    // body
    for (let j = 0; j < arrOfAnimals.length; j++) {
      console.log(arrOfAnimals[i][j]);
    }
  }
}
forLoop();

/* ------------------------------------------------------------------------------------------------- */

// ! For...Of Loop
function forOfLoop() {
  let numbers = [1, 2, 3, 4, 5];
  for (number of numbers) {
    // body
    console.log(number + 10);
  }
}
forOfLoop();

/* ------------------------------------------------------------------------------------------------- */

// ! While Loop
function whileLoop() {
  let i = 5;
  while (i > 0) {
    console.log("hello");
    i--;
  }
}
whileLoop();

/* ------------------------------------------------------------------------------------------------- */

// ! For in Loop
// * Used to iterate through the properties of an object
function forInLoop() {
  let text = "";
  const person = { fname: "John", lname: "Doe", age: 25 };

  for (let x in person) {
    console.log((text += person[x]));
  }
}

forInLoop();

//! * ---------------------------------------------------------------------------------------------- */
//! *                                          Array Methods                                         */
//! * ---------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------------- */

// ! map() method
// * Used to iterate through an array, do something to each item and return a new array

// map(callbackFn, thisArg)
// - callbackFn --> element, index, array (in order)

function mapMethod() {
  const a = [1, 2, 3, 4, 5]; // here is an array
  // the map() method's result can be assigned to a variable or returned immediately
  const d = a.map((item) => {
    return item ** 2; // creates a new array with the result of this expression
  });
  console.log(d);
}

mapMethod();

/* ------------------------------------------------------------------------------------------------- */

// ! filter() method
// * Used to iterate through an array, filter out based on condition and return new array

// filter(callbackFn, thisArg)
// - callbackFn --> element, index, array (in order)

function filterMethod() {
  const words = ["react", "script", "interview", "style", "javascript"];
  const newWords = words.filter((item) => {
    return item.length > 6;
  });
  console.log(newWords);
}

filterMethod();

/* ------------------------------------------------------------------------------------------------- */

// ! forEach() method
// * Used to iterate through an array, do something to each item (does NOT return a new array)

// forEach(callbackFn, thisArg)
// - callbackFn --> element, index, array (in order)

function forEachMethod() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let data = arr.map((item) => {
    return item % 2 === 0 ? item * 2 : item * 1;
  });
  console.log(data);
}

forEachMethod();
