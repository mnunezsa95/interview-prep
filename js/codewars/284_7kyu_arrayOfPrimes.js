/* ---------------------------------------------------------------------------------------------- */
/*                                         Array of Primes                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:
• start is the integer from which your range starts. (inclusive)
• end is the integer at which your range ends. (inclusive)

If the range does not contain any prime numbers return null.

Examples:
• primes(5, 7)  // [5, 7]
• primes(8, 9)  // null
• primes(1, 10) // [2, 3, 5, 7]
*/

function primes(start, end) {
  let result = [];

  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  while (start <= end) {
    if (isPrime(start)) {
      result.push(start);
      start++;
    } else {
      start++;
    }
  }

  return result.length >= 1 ? result : null;
}

console.log(primes(1, 10));
console.log(primes(8, 10));
console.log(primes(100, 200));
