/* ---------------------------------------------------------------------------------------------- */
/*                                          Mini-Max Sum                                          */
/* ---------------------------------------------------------------------------------------------- */

/*  
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 
four of the five integers. Then print the respective minimum and maximum values as a single line of two 
space-separated long integers. 
*/

function miniMaxSum(arr) {
  // sort arr, slice at each point, add values together (via reduce() method)
  let maxSum = arr
    .sort()
    .slice(1)
    .reduce((acc, cv) => acc + cv, 0);

  let minSum = arr
    .sort()
    .slice(0, -1)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(minSum, maxSum);
}

const value2 = miniMaxSum([1, 5, 7, 3, 9]);
