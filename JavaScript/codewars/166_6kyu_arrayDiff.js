/* ---------------------------------------------------------------------------------------------- */
/*                                           Array.diff                                           */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([1, 2, 2], [1]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function arrayDiff2(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}

console.log(arrayDiff2([1, 2, 3], [1, 2]));
console.log(arrayDiff2([1, 2, 2], [1]));
