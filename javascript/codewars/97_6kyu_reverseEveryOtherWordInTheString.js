/* ---------------------------------------------------------------------------------------------- */
/*                             Reverse every other word in the string                             */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Reverse every other word in a given string, then return the string. Throw away any leading or trailing
whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be 
treated as if they are a part of the word in this kata.
*/

function reverse(str) {
  let arrayOfStrings = str.split(" ");
  res = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    i % 2 === 0 ? res.push(arrayOfStrings[i]) : res.push(arrayOfStrings[i].split("").reverse().join(""));
  }
  return res.join(" ").trim();
}

console.log(reverse("I really don't like reversing strings!"));
