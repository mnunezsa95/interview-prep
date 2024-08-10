/* ---------------------------------------------------------------------------------------------- */
/*                                       Simple decrypt algo                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:
(1) count the number occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.

For example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z
  
'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z
Remember, the string returned should always be 26 characters long, and only count lowercase letters.

Note: You can assume that each lowercase letter will appears a maximum of 9 times in the input string.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function decrypt(encryption) {
  // Object to store keys (letters) & values (number of occurences)
  const alphabetCount = {};

  // Add each letter of alphabet to obj as key and initialize count as 0
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((let) => (alphabetCount[let] = 0));

  // Iterate through each letter; if letter in alphabet count, increase count otherwise move on
  encryption.split("").forEach((let) => (let in alphabetCount ? alphabetCount[let]++ : 0));

  // Return all values and join them together
  return Object.values(alphabetCount).join("");
}

console.log(decrypt("$aaaa#bbb*ccfff!z"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function decrypt2(encryption) {
  const alphabetCount = new Array(26).fill(0);

  for (let char of encryption) {
    let currChart = char.charCodeAt();
    if (currChart >= 97 && currChart <= 122) {
      alphabetCount[char.charCodeAt(0) - 97]++;
    }
  }

  return alphabetCount.join("");
}

console.log(decrypt2("$aaaa#bbb*ccfff!z"));
