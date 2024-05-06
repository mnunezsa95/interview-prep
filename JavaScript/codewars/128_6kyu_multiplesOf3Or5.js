/* ---------------------------------------------------------------------------------------------- */
/*                                       Multiples of 3 or 5                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number 
passed in. Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function solution(number) {
  let numbers = [];
  let x3 = 0;
  let x5 = 0;
  while (x3 * 3 < number) {
    numbers.push(x3 * 3);
    x3++;
  }
  while (x5 * 5 < number) {
    numbers.push(x5 * 5);
    x5++;
  }
  const unqiue = [...new Set(numbers)];
  return unqiue.reduce((acc, cv) => acc + cv, 0);
}

console.log(solution(10));
console.log(solution(20));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function solution2(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution2(10));
console.log(solution2(20));
