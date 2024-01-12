/* ---------------------------------------------------------------------------------------------- */
/*                                         Hell's Kitchen                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become 
'@', Any other vowel should become '*'.
*/

function gordon(a) {
  let res = "";
  let vowels = {
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  let lowerString = a.split("").map((letter) => letter.toLowerCase());
  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i] == "a") {
      res += "@";
    } else if (lowerString[i] in vowels) {
      res += "*";
    } else if (lowerString[i] == " ") {
      res += "!!!! ";
    } else {
      res += lowerString[i].toUpperCase();
    }
  }
  return (res += "!!!!");
}

console.log(gordon("What feck damn cake"));
console.log(gordon("are you stu pid"));
console.log(gordon("i am a chef"));
