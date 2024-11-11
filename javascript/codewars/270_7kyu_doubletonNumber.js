/* ---------------------------------------------------------------------------------------------- */
/*                                        Doubleton Number                                        */
/* ---------------------------------------------------------------------------------------------- */

const { flatMap } = require("lodash");

/*
Difficulty: 7 kyu

We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
- doubleton(120) === 121
- doubleton(1234) === 1311
- doubleton(10) === 12s
*/

function doubleton(num) {
  let nextNum = num;
  const findNumUnique = (num) => Array.from(new Set(String(num))).length;
  let shouldContinue = true;

  while (shouldContinue) {
    if (findNumUnique(nextNum) === 2 && nextNum !== num) {
      shouldContinue = false;
      return nextNum;
    }
    nextNum++;
  }
}

console.log(doubleton(120));
console.log(doubleton(10));
console.log(doubleton(1234));
