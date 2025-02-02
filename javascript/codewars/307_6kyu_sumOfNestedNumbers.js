/* ---------------------------------------------------------------------------------------------- */
/*                                      Sum of Nested Numbers                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Description:

Build a function that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.

For example,
    [1, [2], 3, [4, [5]]]
    Should return 1 + 2*2 + 3 + 4*4 + 5*5*5 == 149
*/

function sumNestedNumbers(arr) {
  let sum = 0;

  const findSum = (val, level) => {
    Array.isArray(val) ? val.forEach((item) => findSum(item, level + 1)) : (sum += val ** level);
  };

  arr.forEach((item) => findSum(item, 1));

  return sum;
}

console.log(sumNestedNumbers([1, [2], 3, [4, [5]]]));
