/* ---------------------------------------------------------------------------------------------- */
/*                                     Find the unique number                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6kyu

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
*/

function findUniq(arr) {
  return arr.filter((item, _, arr) => arr.indexOf(item) === arr.lastIndexOf(item))[0];
}

console.log(findUniq([3, 10, 3, 3, 3]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 0, 0]));
