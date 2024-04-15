/* ---------------------------------------------------------------------------------------------- */
/*                          Sentences should start with capital letters.                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

Example
input: "hello. my name is inigo montoya. you killed my father. prepare to die."
output: "Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:
- There will be no punctuation besides full stops and spaces
- All but the last full stop will be followed by a space and at least one word
*/

function fix(paragraph) {
  return paragraph.length == 0
    ? ""
    : paragraph
        .split(". ")
        .map((sentence) => sentence[0].toUpperCase() + sentence.slice(1))
        .join(". ");
}

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."));
console.log(fix(""));
