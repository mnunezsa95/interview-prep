/* ---------------------------------------------------------------------------------------------- */
/*                                  Sum of prime-indexed elements                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficult: 6 kyu
In this Kata, you will be given an integer array and your task is to return the sum of elements 
occupying prime-numbered indices.

The first element of the array is at index 0.
*/

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function total(arr) {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(total([1, 2, 3, 4]));
console.log(total([1, 2, 3, 4, 5, 6]));
console.log(total([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
