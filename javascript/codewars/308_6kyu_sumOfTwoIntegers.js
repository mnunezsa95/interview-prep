/*
Difficulty: 6 kyu

Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
• The numbers (a,b) may be positive , negative values or zeros .
• Returning value will be an integer .
• Javascript: the Array reduce methods are disabled, along with eval, require, and module .
*/

function add(x, y) {
  while (y !== 0) {
    let carry = (x & y) << 1; // This calculates the carry.
    x = x ^ y; // This computes the sum of x and y without carrying the bits.
    y = carry;
  }
  return x;
}

console.log(add(5, 19));
console.log(add(-13, 13));
console.log(add(-27, 18));
console.log(add(-10, -29));
