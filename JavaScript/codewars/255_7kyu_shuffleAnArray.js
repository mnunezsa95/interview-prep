/* ---------------------------------------------------------------------------------------------- */
/*                                        Shuffle an Array                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a function to shuffle an array.

Ex.:
- Input: [1,2,3,4]
- Output: [3,1,4,2]


Hint: 
- Math.random()
- Assume input is array.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
const shuffle2 = require("lodash").shuffle;

console.log(shuffle2([1, 2, 3, 4]));

/* ----------------------------------------- SOLUTION 3 ----------------------------------------- */
function shuffle3(arr) {
  return arr.sort((a, b) => {
    return Math.random() * a - Math.random() * b;
  });
}

console.log(shuffle3([1, 2, 3, 4]));
