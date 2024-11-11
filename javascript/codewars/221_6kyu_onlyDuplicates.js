/* ---------------------------------------------------------------------------------------------- */
/*                                         Only Duplicates                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Given a string, remove any characters that are unique from the string.

Example:
- input: "abccdefee"
- output: "cceee"
*/

function onlyDuplicates(str) {
  return str
    .split("")
    .filter((char, i, arr) => arr.indexOf(char) !== arr.lastIndexOf(char))
    .join("");
}

console.log(onlyDuplicates("foundersandcoders"));
console.log(onlyDuplicates("colloquial"));
