/* ---------------------------------------------------------------------------------------------- */
/*                                 Number of trailing zeros of N!                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5 kyu

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N
Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
- zeros(6) = 1
-- 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

- zeros(12) = 2
-- 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function zeros(n) {
  if (n.length == 0 || n === 0) return 0;

  let numArr = String(Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cv) => BigInt(acc) * BigInt(cv)))
    .split("")
    .reverse();

  let counter = 0;
  let i = 0;
  while (i < numArr.length) {
    if (numArr[i] === "0") counter++;
    else break;
    i++;
  }
  return counter;
}

console.log(zeros(30));
console.log(zeros(0));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function zeros2(n) {
  let total = 0;
  let i = 1;
  while (n > 0 && Math.floor(n / 5 ** i) >= 1) {
    total += Math.floor(n / 5 ** i);
    i++;
  }
  return total;
}
console.log(zeros2(30));
console.log(zeros2(0));
console.log(zeros2(25));
