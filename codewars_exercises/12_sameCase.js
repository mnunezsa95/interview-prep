/* ---------------------------------------------------------------------------------------------- */
/*                                         Check Same Case                                        */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 8 kyu

Write a function that will check if two given characters are the same case.
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercase = alphabet.split("");
  const uppercase = alphabet.toUpperCase().split("");

  if ((lowercase.includes(a) && lowercase.includes(b)) || (uppercase.includes(a) && uppercase.includes(b))) {
    return 1;
  } else if ((lowercase.includes(a) && uppercase.includes(b)) || (lowercase.includes(b) && uppercase.includes(a))) {
    return 0;
  } else {
    return -1;
  }
}

sameCase("a", "g"); // 1
sameCase("0", "?"); // -1
sameCase("A", "b"); // 0
