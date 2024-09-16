/* ---------------------------------------------------------------------------------------------- */
/*                                       Consecutive Letters                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

- Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
- solve("abc") = True, because it contains a,b,c
- solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
- solve("dabc") = True, because it contains a, b, c, d
- solve("abbc") = False, because b does not occur once.
- solve("v") = True
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function solve(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const sortedS = [...s].sort().join("");
  let index = alphabet.indexOf(sortedS[0]);

  for (let i = 0; i < sortedS.length; i++, index++) {
    const isUnique = sortedS.indexOf(sortedS[i]) === sortedS.lastIndexOf(sortedS[i]);
    const isConsecutive = sortedS[i] === alphabet[index];
    if (!isUnique || !isConsecutive) return false;
  }

  return true;
}

console.log(solve("abc"));
console.log(solve("abd"));
console.log(solve("dabc"));
console.log(solve("abbc"));
console.log(solve("dekc"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function solve2(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.includes([...s].sort().join(""));
}

console.log(solve2("abc"));
console.log(solve2("abd"));
console.log(solve2("dabc"));
console.log(solve2("abbc"));
console.log(solve2("dekc"));
