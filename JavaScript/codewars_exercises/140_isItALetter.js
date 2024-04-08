/* ---------------------------------------------------------------------------------------------- */
/*                                         Is it a Letter?                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
*/

function isItLetter(character) {
  let ascii = Number(character.charCodeAt());
  return (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122) ? true : false;
}

console.log(isItLetter("1"));
console.log(isItLetter("a"));
