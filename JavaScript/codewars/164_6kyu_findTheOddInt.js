/* ---------------------------------------------------------------------------------------------- */
/*                                        Find the Odd Int                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function findOdd(A) {
  let dict = {};
  for (let i = 0; i < A.length; i++) A[i] in dict ? dict[A[i]]++ : (dict[A[i]] = 1);
  let oddValue = Object.values(dict).filter((num) => num % 2);
  for (let key in dict) if (dict[key] == oddValue) return Number(key);
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function findOdd2(A) {
  return A.reduce((a, b) => a ^ b);
}

console.log(findOdd2([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
