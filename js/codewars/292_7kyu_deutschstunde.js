/* ---------------------------------------------------------------------------------------------- */
/*                                          Deutschstunde                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

• each noun containing less than 2 vowels has the article "das"
• each noun containing 2/3 vowels has the article "die"
• each noun containing more than 3 vowels has the article "der"

Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!
*/

function derDieDas(wort) {
  const vowels = ["a", "e", "i", "o", "u", "ä", "ö", "ü"];
  let numVowels = wort.split("").filter((char) => vowels.includes(char.toLowerCase())).length;

  if (numVowels < 2) return "das " + wort;
  else if (numVowels >= 2 && numVowels <= 3) return "die " + wort;
  else return "der " + wort;
}

console.log(derDieDas("Suppenhuhn"));
