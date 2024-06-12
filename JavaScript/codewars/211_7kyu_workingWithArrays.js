/* ---------------------------------------------------------------------------------------------- */
/*                  Working with arrays I (and Why Your Code Fails in Some Katas)                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.
*/

function withoutLast(arr) {
  return arr.slice(0, arr.length - 1);
}

console.log(withoutLast([1, 2, 3, 4, 5]));
console.log(withoutLast([6, 7, 8, 9]));
console.log(withoutLast([3, 95, 14, 47, 61, 28, 40]));
console.log(withoutLast([78, 27, 44, 85, 29]));
