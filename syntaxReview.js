/* ---------------------------------------------------------------------------------------------- */
/*                                              Loops                                             */
/* ---------------------------------------------------------------------------------------------- */

/* ------------------------------ ================================ ------------------------------ */

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

/* ------------------------------ ================================ ------------------------------ */

// ! For...Of Loop
function forOfLoop() {
  let numbers = [1, 2, 3, 4, 5];
  for (number of numbers) {
    // body
    console.log(number + 10);
  }
}
forOfLoop();

/* ------------------------------ ================================ ------------------------------ */

// ! While Loop
function whileLoop() {
  let i = 5;
  while (i > 0) {
    console.log("hello");
    i--;
  }
}
whileLoop();

/* ------------------------------ ================================ ------------------------------ */

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

/* ------------------------------ ================================ ------------------------------ */
