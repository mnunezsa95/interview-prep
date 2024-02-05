/* ---------------------------------------------------------------------------------------------- */
/*                                        Is Integer Array                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

- returns true  / True if every element in an array is an integer or a float with no decimals.
- returns true  / True if array is empty.
- returns false / False for every other input.
*/

function isIntArray(arr) {
  if (!Array.isArray(arr)) {
    return false;
  } else if (arr.length === 0) {
    return true;
  } else if (arr.every((item) => Number.isSafeInteger(item))) {
    return true;
  } else {
    return false;
  }
}

console.log(isIntArray(null));
console.log(isIntArray([null]));
console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));
console.log(isIntArray(["a", "b", "c", "4"]));
console.log(isIntArray([1.0, 2.0, 3.00001]));
console.log(isIntArray([1.23e-7, 2]));
