/* ---------------------------------------------------------------------------------------------- */
/*                                Multiply all elements in an array                               */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of 
integers as an argument. This function must return another function, which takes a single integer as 
an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.
*/

// * create a function that takes arr as an arguement
function multiplyAll(arr) {
  // * declare a function that takes an arguement
  function multiply(int) {
    // * map each element in the array and multiply each element by the integer
    return arr.map((item) => {
      return item * int;
    });
  }
  return multiply;
}

console.log(multiplyAll([1, 2, 3])(2));
