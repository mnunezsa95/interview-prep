/* ---------------------------------------------------------------------------------------------- */
/*                                       Numbers to Letters                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given an array of numbers (in string format), you must return a string. The numbers correspond to the 
letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' 
that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x) {
  letters = [" ", "?", "!", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  lettersReversed = letters.map((letter) => letter.toLowerCase()).reverse();
  res = "";
  x.forEach((number) => {
    res += lettersReversed[Number(number) - 1];
  });

  return res;
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]));
console.log(switcher(["25", "7", "8", "4", "14", "23", "8", "25", "23", "29", "16", "16", "4"]));
console.log(switcher(["4", "24"]));
console.log(switcher(["13", "15", "16", "8", "24", "17", "4", "20", "10", "20", "23", "25", "1", "28", "15", "2"]));
