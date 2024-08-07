/* ---------------------------------------------------------------------------------------------- */
/*                                         The Vowel Code                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

function encode(string) {
  return string
    .split("")
    .map((char) => {
      if (char in vowels) return vowels[char];
      else return char;
    })
    .join("");
}

function decode(string) {
  const numValues = Object.values(vowels);
  const keys = Object.keys(vowels);

  return string
    .split("")
    .map((char) => {
      // Find the index of the the number character in numValues array
      const index = numValues.indexOf(+char);

      // If the index is not -1, return the correspond char in the keys array, else return original char
      return index !== -1 ? keys[index] : char;
    })
    .join("");
}

console.log(encode("How are you today?"));
console.log(decode("h2ll4"));
