/* ---------------------------------------------------------------------------------------------- */
/*                                     Find the missing letter                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6kyu

Find the missing letter
- Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
- ['a','b','c','d','f'] -> 'e'
- ['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function findMissingLetter(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }
  alphabet = alphabet.split("");
  let index = alphabet.indexOf(array[0]);

  let missingChar = "";
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== alphabet[index]) {
      missingChar = alphabet[index];
      break;
    }
    index++;
  }

  return missingChar;
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function findMissingLetter2(array) {
  let firstChar = array[0].charCodeAt(0);
  for (let i = 0; 1 < array.length; i++) {
    let currentValue = firstChar + i;
    if (currentValue !== array[i].charCodeAt(0)) {
      return String.fromCharCode(currentValue);
    }
  }
}

console.log(findMissingLetter2(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter2(["O", "Q", "R", "S"]));
