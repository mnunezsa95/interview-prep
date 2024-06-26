/* ---------------------------------------------------------------------------------------------- */
/*                                  Arguments to Binary addition                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it

*/

function arr2bin(arr) {
  let sum = 0;
  for (let val of arr) {
    if (typeof val === "number") {
      if (isNaN(val)) return "NaN"; // Return 'NaN' if any value is NaN
      sum += val;
    }
  }
  return sum.toString(2);
}
