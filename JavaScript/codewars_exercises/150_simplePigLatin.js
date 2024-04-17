/* ---------------------------------------------------------------------------------------------- */
/*                                        Simple Pig Latin                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5 kyu

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function pigIt(str) {
  const format = "^[!@#$%^&*()_+-=[]{};':\"\\|,.<>/?]*$/";
  let specialString = str.split(" ").filter((word) => format.includes(word));

  let res = str.split(" ").map((word) => {
    if (!format.includes(word)) return word.slice(1) + word.slice(0, 1) + "ay";
  });

  return res.join(" ") + specialString;
}

console.log(pigIt("Pig latin is cool !"));
console.log(pigIt("Hello world !"));
