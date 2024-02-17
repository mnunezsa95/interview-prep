/* ---------------------------------------------------------------------------------------------- */
/*                                 Sum of differences in an array                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
  let res = [];
  if (arr.length === 0 || arr.length === 1) return 0;
  let a = arr.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    res.push(a[i] - a[i + 1]);
  }
  res.pop();
  return res.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
}

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
