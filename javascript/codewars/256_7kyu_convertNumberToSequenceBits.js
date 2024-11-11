/* ---------------------------------------------------------------------------------------------- */
/*                               Convert number to sequence of bits                               */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Define the toBits(minLength) function converting provided number to a sequence of bits. The default minimum length should be 8.

Examples
(0).toBits() === '00000000';
(7).toBits() === '00000111';
(128).toBits() === '10000000';
(255).toBits() === '11111111';

(0).toBits(0) === '0';
(7).toBits(2) === '111';
(128).toBits(4) === '10000000';
(255).toBits(4) === '11111111';
*/

Number.prototype.toBits = function (length = 8) {
  return this.toString(2).padStart(length, "0");
};

console.log((7).toBits());
console.log((7).toBits(2));
console.log((128).toBits(4));

console.log((5).toBits()); // Output: "00000101" (default length of 8 bits)
console.log((5).toBits(4)); // Output: "0101" (4 bits)
console.log((5).toBits(10)); // Output: "0000000101" (10 bits)
console.log((5).toBits(3)); // Output: "101" (no padding needed)
