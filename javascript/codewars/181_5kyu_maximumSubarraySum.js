/* ---------------------------------------------------------------------------------------------- */
/*                                      Maximum subarray sum                                      */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 5kyu

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
var maxSequence = function (arr) {
  if (!arr.length || arr.every((num) => num < 0)) return 0;
  else if (arr.every((num) => num > 0)) return arr.reduce((acc, cv) => acc + cv, 0);
  else {
    let n = arr.length;
    let maxSum = -Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      let currSum = 0;
      for (let j = i; j < n; j++) {
        currSum = currSum + arr[j];
        if (currSum > maxSum) maxSum = currSum;
      }
    }

    return maxSum;
  }
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([]));
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4]));
console.log(maxSequence([-2, -1, -3, -4]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
var maxSequence2 = function (arr) {
  if (!arr.length || arr.every((num) => num < 0)) return 0;
  else {
    let maxSum = 0;
    let currSum = -Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
      maxSum = Math.max(maxSum + arr[i], arr[i]);
      currSum = Math.max(currSum, maxSum);
    }
    return currSum;
  }
};

console.log(maxSequence2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence2([]));
console.log(maxSequence2([2, 1, 3, 4, 1, 2, 1, 5, 4]));
console.log(maxSequence2([-2, -1, -3, -4]));
