/* ---------------------------------------------------------------------------------------------- */
/*                                             COFFEE!                                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

COFFEE

Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

Output: string with all instances of coffee in all-caps:

Examples:

Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function coffee(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.toLowerCase().slice(0, 6) == "coffee") {
        return word.replace(word.slice(0, 6), "COFFEE");
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(coffee("Coffee! Buy me a COFFEE!"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function coffee2(str) {
  return str.replace(/coffee/gi, "COFFEE");
}

console.log(coffee2("Coffee! Buy me a COFFEE!"));
