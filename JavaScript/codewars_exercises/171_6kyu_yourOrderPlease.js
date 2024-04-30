/* ---------------------------------------------------------------------------------------------- */
/*                                       Your order, Please                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
- Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
- "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
- "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
- ""  -->  ""
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function order(words) {
  if (words.length === 0) return "";
  const wordsArray = words.split(" ");
  const orderedWords = [];

  wordsArray.forEach((word) => {
    let position = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] >= "1" && word[i] <= "9") {
        position = parseInt(word[i]);
        break;
      }
    }
    orderedWords[position - 1] = word;
  });

  return orderedWords.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order(""));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function order2(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order2("is2 Thi1s T4est 3a"));
console.log(order2(""));
console.log(order2("4of Fo1r pe6ople g3ood th5e the2"));
