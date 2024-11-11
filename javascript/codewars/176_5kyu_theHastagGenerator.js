/* ---------------------------------------------------------------------------------------------- */
/*                                      The Hashtag Generator                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5 kyu

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:
- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

Examples
- " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
- "    Hello     World   "                  =>  "#HelloWorld"
- ""                                        =>  false
*/

function generateHashtag(str) {
  let res = "";
  if (!str) return false;
  str = str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word) res += word[0].toUpperCase() + word.slice(1);
    });

  return res.length >= 140 || res === "" ? false : "#" + res;
}

console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag(" "));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("#".repeat(140)));
