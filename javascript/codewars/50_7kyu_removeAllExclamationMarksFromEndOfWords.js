// ! ---------------------------------------------------------------------------------------------- */
// !                        Remove all exclamation marks from end of words                         */
// ! ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Remove all exclamation marks from the end of words. Words are separated by a single space. There are 
no exclamation marks within a word.

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

function removeQ2(string) {
  return string
    .split(" ")
    .map((v) => v.replace(/!+$/gi, ""))
    .join(" ");
}

console.log(removeQ2("hi!"));
console.log(removeQ2("!!!Hi !!hi!!! !hi"));
