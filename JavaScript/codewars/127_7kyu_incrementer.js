/* ---------------------------------------------------------------------------------------------- */
/*                                           Incrementer                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given an input of an array of digits, return the array with each digit incremented by its position 
in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to 
start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you 
a multiple-digit number, only the last digit of the number should be returned.

Notes:
- return an empty array if your array is empty
- arrays will only contain numbers so don't worry about checking that

Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function incrementer(nums) {
  return nums.map((num, i) => num + i + 1).map((number) => (number > 9 ? Number(String(number)[1]) : number));
}

console.log(incrementer([4, 6, 7, 1, 3]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function incrementer2(nums) {
  return nums.map((num, i) => (num + i + 1) % 10);
}

console.log(incrementer2([4, 6, 7, 1, 3]));
