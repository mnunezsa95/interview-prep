/* ---------------------------------------------------------------------------------------------- */
/*                                          Odd or Even?                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function oddOrEven(array) {
  const sum = array.reduce((acc, cv) => acc + cv, 0);
  if (sum % 2 === 0) return "even";
  else return "odd";
}

console.log(oddOrEven([1]));
console.log(oddOrEven([0]));
console.log(oddOrEven([]));
console.log(oddOrEven([1023, 1, 2]));

/* ----------------------------------------- SOULTION 2 ----------------------------------------- */
function oddOrEven2(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}
console.log(oddOrEven2([1]));
console.log(oddOrEven2([0]));
console.log(oddOrEven2([]));
console.log(oddOrEven2([1023, 1, 2]));
