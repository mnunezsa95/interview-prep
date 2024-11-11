/* ---------------------------------------------------------------------------------------------- */
/*                                          Counting Sort                                         */
/* ---------------------------------------------------------------------------------------------- */

/* 
Create an integer array whose index range covers the entire range of values in your array to sort. 
Each time a value occurs in the original array, you increment the counter at that index. 
*/

function countingSort(arr) {
  // Write your code here
  let res = new Array(100).fill(0);
  // loop through ever item in the input array
  for (let num of arr) {
    res[num]++; // for the number in the array, add 1 at that position in the resulting array
  }
  return res; // return resulting array
}

const value7 = countingSort([1, 1, 3, 2, 1]);
console.log(value7);
