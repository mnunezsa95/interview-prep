/* ---------------------------------------------------------------------------------------------- */
/*                                      Simple Array Product                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

Examples:
solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)
*/

function solve(arr) {
  let maxProduct = 1;
  let minProduct = 1;

  arr.forEach((subArray) => {
    const maxInSubArray = Math.max(...subArray);
    const minInSubArray = Math.min(...subArray);

    let tempMax = maxProduct;
    let tempMin = minProduct;

    maxProduct = Math.max(
      tempMax * maxInSubArray,
      tempMax * minInSubArray,
      tempMin * maxInSubArray,
      tempMin * minInSubArray
    );
    minProduct = Math.min(
      tempMax * maxInSubArray,
      tempMax * minInSubArray,
      tempMin * maxInSubArray,
      tempMin * minInSubArray
    );
  });

  return maxProduct;
}

console.log(
  solve([
    [-11, -6],
    [-20, -20],
    [18, -4],
    [-20, 1],
  ])
);

console.log(
  solve([
    [10, -15],
    [-1, -3],
  ])
);
