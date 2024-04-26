/* ---------------------------------------------------------------------------------------------- */
/*                                       Adding Big Numbers                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 4 kyu

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
- The input numbers are big.
- The input is a string of only digits
- The numbers are positives
*/

function add(a, b) {
  let res = "";
  let c = 0;
  a = a.split("");
  b = b.split("");

  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

console.log(add("101", "100"));
console.log(add("123", "321"));
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
