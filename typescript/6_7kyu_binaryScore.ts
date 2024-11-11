/* ---------------------------------------------------------------------------------------------- */
/*                                          Binary scORe                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.

n	scORe n
0	0
1	1
49	63
1000000	1048575

Any feedback would be much appreciated
*/

export function score(n: number): number {
  let result = n; // Initialize the result with the input number `n`.
  let shift = 1; // Initialize a shift variable to 1. This will help progressively shift bits to the right.

  // Iterate while the shift value is less than or equal to `n`.
  while (shift <= n) {
    // Perform a bitwise OR between the result and the result shifted by `shift` bits.
    // This operation progressively sets the lower bits of the result to 1.
    result |= result >> shift;

    shift <<= 1; // Double the shift value (shift <<= 1), effectively moving the bit shift one position to the left.
  }

  return result; // Return the result, which will now be the smallest number with all bits set to 1 up to the most significant bit of n
}

console.log(score(49)); // Output: 63 (binary: 111111)
console.log(score(1000000)); // Output: 1048575 (binary: 111111111111111111111)
