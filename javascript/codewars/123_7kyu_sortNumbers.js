/* ---------------------------------------------------------------------------------------------- */
/*                                          Sort Numbers                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an 
empty array or null/nil value then it should return an empty array.

For example:
- solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
- solution(null); // should return []
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function solution(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return [];
  return nums.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 10, 50, 5]));
console.log(solution(null));
console.log(solution([]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function solution2(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}

console.log(solution2([1, 2, 3, 10, 50, 5]));
console.log(solution2(null));
console.log(solution2([]));
