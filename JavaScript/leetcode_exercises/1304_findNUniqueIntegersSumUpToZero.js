/* ---------------------------------------------------------------------------------------------- */
/*                           1304. Find N Unique Integers Sum up to Zero                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:
-- Input: n = 5
-- Output: [-7,-1,1,3,4]
-- Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
-- Input: n = 3
-- Output: [-1,0,1]

Example 3:
-- Input: n = 1
-- Output: [0]

Constraints:
1 <= n <= 1000
*/

var sumZero = function (n) {
  let result = new Array(n).fill(0); // create result & fill with 0s up to length n
  // Populate the array with numbers 1 to n-1
  for (let i = 0; i < n; i++) {
    result[i] = i;
  }
  // Calculate the negative value that will balance the sum of the sequence to zero
  // The sum of the first n-1 positive integers is (n-1) * (n)/2, so we need the negative of that
  result[0] = -((n * (n - 1)) / 2);
  return result;
};

console.log(sumZero(5));
