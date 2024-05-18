/* ---------------------------------------------------------------------------------------------- */
/*                                     Question 23: Power of 4                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is 
not an Integer (eg String, Array) method should return false as well.

powerOf4(1024) // returns true 4^4^4
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false
*/
function powerOf4(n) {
  return n === 1 || (n > 0 && Math.pow(4, Math.round(Math.log(n) / Math.log(4))) === n);
}

console.log(powerOf4(8));
console.log(powerOf4(16));
console.log(powerOf4(1));
console.log(powerOf4(4));
