/* ---------------------------------------------------------------------------------------------- */
/*                                       Counting Duplicates                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
  let counter = 0;
  let holder = [];
  let duplicates = [];
  text
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (holder.includes(letter) && !duplicates.includes(letter)) {
        counter += 1;
        duplicates.push(letter);
      } else holder.push(letter);
    });
  return counter;
}

console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibilities"));
