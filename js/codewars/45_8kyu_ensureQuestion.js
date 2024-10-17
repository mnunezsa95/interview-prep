/* ---------------------------------------------------------------------------------------------- */
/*                                         Ensure Question                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Given a string, write a function that returns the string with a question mark ("?") appends to the end, 
unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)
"Yes" --> "Yes?" 
"No?" --> "No?"
*/

function ensureQuestion(s) {
  console.log(s.includes("?"));
  if (!s.includes("?")) {
    return `${s}?`;
  }
  return s;
}

console.log(ensureQuestion(""));
console.log(ensureQuestion("No"));
console.log(ensureQuestion("No?"));
