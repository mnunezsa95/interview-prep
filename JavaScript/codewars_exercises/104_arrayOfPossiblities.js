/* ---------------------------------------------------------------------------------------------- */
/*                                       Possibilities Array                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

A non-empty array a of length n is called an array of all possibilities if it contains all numbers 
between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and 
returns true if the array is an array of all possibilities, else false.

Example:
- a=[1,2,0,3]
-  a.length-1=3 
-  a includes [0,3] ,hence the function should return true
*/

function isAllPossibilities(x) {
  return x.length > 0 ? x.every((a, i) => x.includes(i)) : false;
}

console.log(isAllPossibilities([2, 1, 4, 3]));
console.log(isAllPossibilities([0, 1, 2, 3]));
console.log(isAllPossibilities([0, 1, 2, 3, 4, 5, 7]));
console.log(isAllPossibilities([0, 1, 2, 3, 4, 5, 6]));
console.log(isAllPossibilities([1, 2, 3, 4, 5, 6]));
