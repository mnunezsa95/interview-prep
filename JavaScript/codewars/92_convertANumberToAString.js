/* ---------------------------------------------------------------------------------------------- */
/*                                  Convert a Number to a String                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

We need a function that can transform a number (integer) into a string.

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

function numberToString(num) {
  return "" + num;
}

console.log(numberToString(76));
