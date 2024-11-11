/* ---------------------------------------------------------------------------------------------- */
/*                                       Array - squareUp b!                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:
squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
*/

function squareUp(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      res.push(j <= i ? j : 0);
    }
  }
  return res;
}

console.log(squareUp(3)); // [0, 0, 1, 0, 2, 1, 3, 2, 1]
// console.log(squareUp(2)); // [0, 1, 2, 1]
