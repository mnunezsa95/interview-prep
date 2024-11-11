/* ---------------------------------------------------------------------------------------------- */
/*                                         Sexy Primes <3                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.

Examples
- 5, 11   -->  true
- 61, 67  -->  true
- 7, 13   -->  true
- 5, 7    -->  false
- 1, 7    -->  false  (1 is not a prime)

Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.
*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sexyPrime(x, y) {
  let isSix = Math.abs(y - x) == 6;
  return isPrime(x) && isPrime(y) && isSix;
}

console.log(sexyPrime(5, 11));
console.log(sexyPrime(5, 7));
console.log(sexyPrime(1, 7));
console.log(sexyPrime(61, 67));
