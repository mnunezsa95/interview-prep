/* ---------------------------------------------------------------------------------------------- */
/*                                          Sum of Cubes                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), 
and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)
- 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
- 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

// Solution 1
function sumCubes(n) {
  let num_array = [];
  let i = 0;
  while (n >= 0) {
    num_array.push(i);
    i++;
    n--;
  }
  return num_array.reduce((acc, currVal) => {
    return acc + currVal ** 3;
  }, 0);
}

console.log(sumCubes(2));
console.log(sumCubes(3));

// Solution 2
function sumCubes2(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, currVal) => acc + currVal ** 3, 0);
}

console.log(sumCubes2(2));
console.log(sumCubes2(3));
