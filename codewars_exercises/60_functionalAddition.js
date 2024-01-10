/* ---------------------------------------------------------------------------------------------- */
/*                                       Functional Addition                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Create a function add(n)/Add(n) which returns a function that always adds n to any number

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

// The function add(n) takes in a value n
function add(n) {
  // The addSecond() fn takes in a second value (a) is inside the add(n) fn
  return function addSecond(a) {
    return a + n; // returns the output of a + n
  };
}

console.log(add(1)(3));
