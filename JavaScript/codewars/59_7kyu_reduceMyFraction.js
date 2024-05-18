/* ---------------------------------------------------------------------------------------------- */
/*                                       Reduce My Fraction                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a function which reduces fractions to their simplest form! Fractions will be presented as an 
array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must 
be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.
*/

function reduce(fraction) {
  let [numerator, denominator] = fraction; // retrieve the two numbers from the array
  // let i equal the smaller of the two numbers; as long as i greater than 0; reduce the iterator
  // ! In this case i is 20
  for (let i = Math.min(...fraction); i > 0; i--) {
    // if the numerator and denominator are both evenly divisible by i, divide each number by i, return as array
    if (numerator % i === 0 && denominator % i === 0) {
      return [numerator / i, denominator / i];
    }
  }
}

console.log(reduce([60, 20]));
