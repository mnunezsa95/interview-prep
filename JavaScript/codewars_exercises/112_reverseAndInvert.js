/* ---------------------------------------------------------------------------------------------- */
/*                                       Reverse and Invert                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

function reverseInvert(array) {
  return array
    .filter((value) => Number.isInteger(value)) // Filter out non-integers
    .map((value) => -Math.sign(value) * +String(Math.abs(value)).split("").reverse().join(""));
}

// -Math.sign() converts every value to its opposite sign
// +String(Math.abs(value)).split("").reverse().join("") -> reverse the number (21 -> 12)

console.log(reverseInvert([1, 2, 3, 4, 5]));
console.log(reverseInvert([-9, -18, 99]));
console.log(reverseInvert([1, 12, "a", 3.4, 87, 99.9, -42, 50, 5.6]));
console.log(reverseInvert([-1]));
