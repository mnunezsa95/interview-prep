/* ---------------------------------------------------------------------------------------------- */
/*                                         Detect Pangram                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const cleanedString = string.toLowerCase().replace(/[^a-z]/g, "");
  const uniqueLetters = new Set(cleanedString);
  return alphabet.split("").every((char) => uniqueLetters.has(char));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function isPangram2(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
