/* ---------------------------------------------------------------------------------------------- */
/*                                         Lonely Integer                                         */
/* ---------------------------------------------------------------------------------------------- */

/* 
Given an array of integers, where all elements but one occur twice, find the unique element.

Example
- The unique element is 4.

Function Description
- Complete the lonelyInteger function in the editor below.
- lonelyInteger has the following parameter(s):
- int a[n]: an array of integers
Returns
- int: the element that occurs only once

Input Format
- The first line contains a single integer, n, the number of integers in the array.
- The second line contains n space-separated integers that describe the values in a.
*/

function lonelyInteger(a) {
  // the filter() method will filter out based on a given condition
  return a.filter((val, i, arr) => {
    // the indexOf() will return the first index of a given value
    // the lastIndexOf() will return the last index of a given value
    return arr.indexOf(val) === arr.lastIndexOf(val);
    // if these match, then they will filter out
  });
}

const value5 = lonelyInteger([1, 2, 3, 4, 3, 2, 1]);
console.log(value5);
