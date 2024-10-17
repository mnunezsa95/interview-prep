/* ---------------------------------------------------------------------------------------------- */
/*                                  Convert string to camel case                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
  if (!str) return "";
  let splitStr = str.replaceAll("-", "_").replaceAll("_", "-").split("-");
  let firstWord = splitStr.slice(0, 1);
  let restOfWord = splitStr
    .slice(1)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

  return firstWord + restOfWord;
}

console.log(toCamelCase(""));
console.log(toCamelCase("The_stealth_warrior"));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Pippi-Is_Omoshiroi"));
