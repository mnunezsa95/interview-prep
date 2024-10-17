/* ---------------------------------------------------------------------------------------------- */
/*                                      Calculate Parity bit!                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

Example:
  Parity: 'even'
  Bin: '0101010'
  Result: 1

Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.
*/

function checkParity(parity, bin) {
  let res = bin.split("").reduce((acc, cv) => +acc + +cv, 0);
  if (parity === "even") {
    return res % 2 === 0 ? 0 : 1;
  } else {
    return res % 2 === 1 ? 0 : 1;
  }
}

console.log(checkParity("even", "101010"));
console.log(checkParity("odd", "101010"));
console.log(checkParity("even", "101011"));
console.log(checkParity("odd", "101011"));
