/* ---------------------------------------------------------------------------------------------- */
/*                                 Count the divisors of a number                                 */
/* ---------------------------------------------------------------------------------------------- */

/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only 
for you to see which numbers are counted in each case.
*/

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (n % i == 0) {
      count++;
    }
  }
  return count;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
console.log(getDivisorsCnt(5000000));

// Optimized Version

function getDivisorsCnt2(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // If both divisors are the same, count only one
      if (i === n / i) {
        count++;
      } else {
        // Count both divisors
        count += 2;
      }
    }
  }
  return count;
}

console.log(getDivisorsCnt2(1));
console.log(getDivisorsCnt2(10));
console.log(getDivisorsCnt2(11));
console.log(getDivisorsCnt2(54));
console.log(getDivisorsCnt2(5000000));
