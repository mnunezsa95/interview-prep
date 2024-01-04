/* ---------------------------------------------------------------------------------------------- */
/*                              Is every value in the array an array?                             */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 Kyu

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = (value) => {
  return value.every((item) => {
    if (Array.isArray(item)) {
      return true;
    }
  });
};

console.log(arrCheck([])); // true
console.log(arrCheck([["string"]])); // true
console.log(arrCheck([[], {}])); // false
console.log(arrCheck([[1], [2], [3]])); // true
console.log(arrCheck(["A", "R", "R", "A", "Y"])); // false
