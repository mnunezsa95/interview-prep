/* ---------------------------------------------------------------------------------------------- */
/*                                  Sum of Digits / Digital Root                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
• 16  -->  1 + 6 = 7
• 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
• 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
• 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

export const digitalRoot = (n: number): number => {
  let stringVersion: string = n.toString();
  let stringList: number[] = stringVersion.split("").map((val) => +val);
  let res: number = stringList.reduce((cv, acc) => cv + acc);

  while (res > 9) {
    res = digitalRoot(res);
  }
  return res;
};

console.log(digitalRoot(16));
console.log(digitalRoot(456));
console.log(digitalRoot(493193));
