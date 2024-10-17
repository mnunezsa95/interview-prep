/* ---------------------------------------------------------------------------------------------- */
/*                                     Hungarian Vowel Harmony                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

Task:
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak

Examples:
- dative("ablak") == "ablaknak"
- dative("szék") == "széknek"
- dative("otthon") == "otthonnak"

Preconditions:
- To keep it simple: All words end with a consonant :)
- All strings are unicode strings.
- There are no grammatical exceptions in the tests.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function dative(word) {
  const frontVowels = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
  const backVowels = ["a", "á", "o", "ó", "u", "ú"];

  let res = word;
  let ending = "";
  let wordArray = word.split("").reverse();
  for (let i = 0; i < wordArray.length; i++) {
    if (frontVowels.includes(wordArray[i]) || backVowels.includes(wordArray[i])) {
      ending = wordArray[i];
      break;
    }
  }

  frontVowels.includes(ending) ? (res += "nek") : (res += "nak");

  return res;
}

console.log(dative("ablak"));
console.log(dative("szék"));
console.log(dative("gonosz"));
console.log(dative("virág"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function dative2(word) {
  // Define RegExps
  const frontVowels = /[eéiíöőüű]/;
  const backVowels = /[aáoóuú]/;

  // Loop through the word (backwards)
  for (let i = word.length - 1; i >= 0; i--) {
    // For each loop, assign the current character to char variable
    const char = word[i];

    // Search the regexp for the current char, add ending and return the new word
    if (frontVowels.test(char)) {
      return word + "nek";
    } else if (backVowels.test(char)) {
      return word + "nak";
    }
  }
}

console.log(dative2("ablak"));
console.log(dative2("szék"));
console.log(dative2("gonosz"));
console.log(dative2("virág"));

/* ----------------------------------------- SOLUTION 3 ----------------------------------------- */

function dative3(word) {
  return /[aáoóuú]/.test(word) ? word + "nak" : word + "nek";
}

console.log(dative3("ablak"));
console.log(dative3("szék"));
console.log(dative3("gonosz"));
console.log(dative3("virág"));
