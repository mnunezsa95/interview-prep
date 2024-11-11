/* ---------------------------------------------------------------------------------------------- */
/*           Find the Number of Trailing Zeros in the Binary Representation of a Number           */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given a number n, find the number of trailing zeros in its binary representation.

Examples:
• 4  ->  2, because 4 is represented as 100
• 5  ->  0, because 5 is represented as 101

Limits:
• 0 < n <= 10^4
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function trailingZeros(n) {
  const binaryNumber = n.toString(2);
  let index = binaryNumber.indexOf(0);
  let count = 0;
  while (index < binaryNumber.length) {
    if (binaryNumber[index] == "0") {
      count++;
      index++;
    } else {
      count = 0;
      index++;
    }
  }

  return count;
}

console.log(trailingZeros(4)); // 2
console.log(trailingZeros(5)); // 0
console.log(trailingZeros(32)); // 5
console.log(trailingZeros(25)); // 0

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function trailingZeros2(n) {
  const lastOne = n.toString(2).lastIndexOf("1");
  return n.toString(2).slice(lastOne + 1).length;
}

console.log(trailingZeros2(4)); // 2
console.log(trailingZeros2(5)); // 0
console.log(trailingZeros2(32)); // 5
console.log(trailingZeros2(25)); // 0
