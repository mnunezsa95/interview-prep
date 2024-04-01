/* ---------------------------------------------------------------------------------------------- */
/*                                          Encrypt This!                                         */
/* ---------------------------------------------------------------------------------------------- */
/*
Difficulty: 7 kyu

You want to create secret messages which can be deciphered by the Decipher this! kata. 

Here are the conditions:
1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
-- The first letter must be converted to its ASCII code.
-- The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function (message) {
  let words = message.split(" ");
  let encryptedWords = [];

  for (let word of words) {
    if (word.length === 1) {
      encryptedWords.push(word.charCodeAt(0)); // Only one character, so just append its ASCII code
    } else if (word.length === 2) {
      let encryptedWord = word.charCodeAt(0) + word[1];
      encryptedWords.push(encryptedWord);
    } else {
      let encryptedWord = word.charCodeAt(0) + word.slice(-1) + word.slice(2, -1) + word[1];
      encryptedWords.push(encryptedWord);
    }
  }

  return encryptedWords.join(" ");
};

console.log(encryptThis("A wise old owl lived in an oak"));
