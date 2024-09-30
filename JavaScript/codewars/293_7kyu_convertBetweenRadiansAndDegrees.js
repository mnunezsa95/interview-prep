/* ---------------------------------------------------------------------------------------------- */
/*                               Convert Between Radians and Degrees                              */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Extend the Math object (JS) or module (Ruby and Python) to convert degrees to radians and viceversa. The result should be rounded to two decimal points. Note that all methods of Math object are static.

Example:
• Math.degrees(Math.PI) //180deg
• Math.radians(180) //3.14rad
*/

Math.degrees = function (radians) {
  return parseFloat(((radians * 180) / Math.PI).toFixed(2)) + "deg";
};

// Convert degrees to radians, rounded to 2 decimal places, and remove trailing zeros
Math.radians = function (degrees) {
  return parseFloat((degrees * (Math.PI / 180)).toFixed(2)) + "rad";
};

console.log(Math.degrees(Math.PI));
console.log(Math.radians(180));
