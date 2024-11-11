/* ---------------------------------------------------------------------------------------------- */
/*                                        Calculate Average                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficult: 8 kyu

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

export function findAverage(array: number[]): number {
  if (array.length < 1) return 0;
  const sumScore: number = array.reduce((cv, acc) => acc + cv, 0);
  const lengthScore: number = array.length;

  return sumScore / lengthScore;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([]));
