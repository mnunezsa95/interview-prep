/* ---------------------------------------------------------------------------------------------- */
/*                                     Arrays: Second Largest                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Complete the getSecondLargest function in the editor below.

Parameters:
• int nums[n]: an array of integers

Returns
• int: the second largest number in 

Input Format
• The first line contains an integer, , the size of the  array.
• The second line contains  space-separated numbers that describe the elements in .

Sample Input
- 5
- 2 3 6 6 5

Sample Output
- 5

Explanation: 
- Given the array , we see that the largest value in the array is  and the second largest value is . Thus, we return  as our answer.
*/

function getSecondLargest(nums) {
  // Sort the array from smallest to largest & remove duplicates
  const uniqueValues = [...new Set(nums.sort((a, b) => a - b))];
  return uniqueValues[uniqueValues.length - 2];
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));
