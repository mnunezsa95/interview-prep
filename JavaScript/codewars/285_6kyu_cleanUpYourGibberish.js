/*
Difficulty: 6 kyu

We've begun receiving transmissions from Planet Gibber again after many decades of silence. Unfortunately, this time they've been all garbled up!

Luckily, linguists were able to figure out the rules of Gibberish the last time we heard from them. They've given us a guide on how to identify the actual bits of language from the random data in the strings we receive.

In order to parse the Gibberish from the... well, gibberish, we'll need to follow these rules:
• Gibberish, as we read it, only contains letters: remove all non-letter characters (including spaces)
• Gibberish is only made up of 5 letter words: separate this into words that are all 5 letters long. No trailing words with fewer than 5 letters!
• Gibberish word are all capitalised: so capitalise all the words (sort of like German nouns)

Some of the transmissions are only garbled data. If you are given an empty string or a string that doesn't contain any letters, then please return an empty string at the end.

Even if you can't read the Gibberish, that's okay as long as you've formatted it according to the language rules!
*/

function cleanItUp(sen) {
  if (!sen) return "";
  let finalSentence = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let cleanedSentence = sen
    .toLowerCase()
    .split("")
    .filter((letter) => alpha.includes(letter))
    .join("");

  for (let i = 0; i < cleanedSentence.length; i += 5) {
    let currentWord = cleanedSentence.slice(i, i + 5);

    if (currentWord.length >= 5) {
      finalSentence += currentWord.slice(0, 1).toUpperCase() + currentWord.slice(1) + " ";
    }
  }

  return finalSentence.trim();
}

console.log(cleanItUp("!!!sdfh skj!1!Kjk!jkK! jhjkhk    hj!!jh!JKKjjj  jhhH!!"));
console.log(cleanItUp("!!!! **** #&$&@ 42828"));
console.log(cleanItUp("sstoo"));
console.log(cleanItUp(""));
