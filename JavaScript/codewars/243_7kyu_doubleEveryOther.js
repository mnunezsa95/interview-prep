/* ---------------------------------------------------------------------------------------------- */
/*                                       Double Every Other                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a function that doubles every second integer in a list, starting from the left.

Example:
- For input array/list : [1,2,3,4] the function should return : [1,4,3,8]
*/

const doubleEveryOther = (a) => a.map((val, i) => (i % 2 !== 0 ? val * 2 : val));

console.log(doubleEveryOther([1, 2, 3, 4]));
