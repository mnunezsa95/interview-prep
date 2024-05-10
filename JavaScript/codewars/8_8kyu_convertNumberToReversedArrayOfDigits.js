/* ---------------------------------------------------------------------------------------------- */
/*                           Convert number to reversed array of digits                           */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 8 Kyu

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

function digitize(n) {
  let arr = [];
  let num = String(n);
  for (let i = 0; i < num.length; i++) {
    arr.push(Number(num[i]));
  }
  return arr.reverse();
}

console.log(digitize(35321));
console.log(digitize(0));
