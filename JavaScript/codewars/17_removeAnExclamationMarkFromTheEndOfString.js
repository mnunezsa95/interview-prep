/* ---------------------------------------------------------------------------------------------- */
/*                        Remove an exclamation mark from the end of string                       */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 8 kyu

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input 
data is always a string, no need to verify it.
*/

function remove(string) {
  if (typeof string !== "string") return "";
  if (string[string.length - 1] === "!") {
    return string
      .split("")
      .slice(0, string.length - 1)
      .join("");
  }
  return string;
}

console.log(remove("Hi!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
