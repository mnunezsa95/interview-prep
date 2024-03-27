/* ---------------------------------------------------------------------------------------------- */
/*                                         Capitals First!                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Create a function that takes an input String and returns a String, where all the uppercase words of 
the input String are in front and all the lowercase words at the end. The order of the uppercase and 
lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
*/

function capitalsFirst(str) {
  let capitals = [];
  let lower = [];
  let discard = [];
  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
  ];
  str.split(" ").forEach((word) => {
    if (+word[0] || specialCharacters.includes(word[0])) {
      discard.push(word);
    } else if (word[0] === word[0].toUpperCase()) {
      capitals.push(word);
    } else {
      lower.push(word);
    }
  });
  return (capitals.join(" ") + " " + lower.join(" ")).trim();
}

console.log(capitalsFirst("hey You, Sort me Already!"));
console.log(capitalsFirst("You and Me baby 123"));
console.log(capitalsFirst("Life Sometimes !Hard gets pretty"));
console.log(capitalsFirst("45qk Nqzta 0# @sbw 6vbg# Smz 1ocymr Wktp1v qda"));
