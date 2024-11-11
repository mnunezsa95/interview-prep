/* ---------------------------------------------------------------------------------------------- */
/*                                         Sum Mixed Array                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

export function sumMix(x: any[]): number {
  return x.reduce((cv: number, acc: number) => {
    return +cv + +acc;
  }, 0);
}

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix([9, 3, "7", "3"]));
