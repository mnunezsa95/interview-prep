/* ---------------------------------------------------------------------------------------------- */
/*                                     If you can read this...                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Task
- You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:
- If, you can read?

Output:
- India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:
- There is a preloaded dictionary that you can use, named NATO. 
-- It uses uppercase keys, e.g. NATO- ['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
-- The set of used punctuation is ,.!?.
- Punctuation should be kept in your return string, but spaces should not.
- Xray should not have a dash within.
- Every word and punctuation mark should be seperated by a space ' '.
- There should be no trailing whitespace
*/

const NATO = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu",
};

function toNato(words) {
  let res = "";
  const wordsArr = words.split("");

  wordsArr.forEach((char) => {
    let upperChar = char.toUpperCase();

    if (NATO[upperChar]) res += NATO[upperChar] + " ";
    else res += char;
  });

  return res.replaceAll("  ", " ").trim();
}
