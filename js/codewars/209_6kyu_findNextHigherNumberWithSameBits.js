/* ---------------------------------------------------------------------------------------------- */
/*                          Find next higher number with same Bits (1's)                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6kyu

Your task is to find the next higher number (int) with same '1'- Bits.

I.e. as much 1 bits as before and output next higher than input. Input is always an int in between 1 and 1<<30 (inclusive). No bad cases or special tricks...

Some easy examples:
- Input: 129  => Output: 130 (10000001 => 10000010)
- Input: 127 => Output: 191 (01111111 => 10111111)
- Input: 1 => Output: 2 (01 => 10)
- Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function nextHigher(n) {
  // Count the number of 1 bits in n's binary representation
  const countBits = (num) =>
    num
      .toString(2)
      .split("")
      .reduce((acc, cv) => acc + parseInt(cv), 0);
  const numOne = countBits(n);
  let i = n + 1; // Start from the next number
  while (countBits(i) !== numOne) i++;
  return i; // Return the next higher number with the same number of 1 bits
}

console.log(nextHigher(127));
console.log(nextHigher(128));
console.log(nextHigher(129));
