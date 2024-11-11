/* ---------------------------------------------------------------------------------------------- */
/*                              Regexp Basics - is it all whitespace?                             */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.
*/

String.prototype.whitespace = function () {
  return this.trim() === "";
};

console.log("".whitespace());
console.log(" ".whitespace());
console.log("\n\r\n\r 3".whitespace());
console.log("\t".whitespace());
