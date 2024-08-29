/* ---------------------------------------------------------------------------------------------- */
/*                                          Bit Counting                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

let countBits = (n) => {
  return n
    .toString(2)
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
};

console.log(countBits(9));
console.log(countBits(10));
console.log(countBits(7));
console.log(countBits(0));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

let countBits2 = (n) => n.toString(2).split("0").join("").length;

console.log(countBits2(9));
console.log(countBits2(10));
console.log(countBits2(7));
console.log(countBits2(0));
