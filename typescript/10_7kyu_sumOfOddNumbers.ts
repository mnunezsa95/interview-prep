/* ---------------------------------------------------------------------------------------------- */
/*                                       Sum of Odd Numbers                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) 
e.g.: (Input --> Output)
• 1 -->  1
• 2 --> 3 + 5 = 8

*/

export function rowSumOddNumbers(n: number): number {
  return n ** 3;
}

console.log(rowSumOddNumbers(5)); // 125
console.log(rowSumOddNumbers(13)); // 2197
