/* ---------------------------------------------------------------------------------------------- */
/*                                 Replace With Alphabet Position                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
- alphabetPosition("The sunset sets at twelve o' clock.")
- Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function alphabetPosition(text) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz".split("");

  return text
    .toLowerCase()
    .split("")
    .map((char) => (char = alphabet.indexOf(char)))
    .filter((num) => num !== 0)
    .filter((num) => num !== -1)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function alphabetPosition2(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}

console.log(alphabetPosition2("The sunset sets at twelve o' clock."));
