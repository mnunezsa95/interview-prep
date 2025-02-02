/* ---------------------------------------------------------------------------------------------- */
/*                                     Temperature Analysis I                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

You were given a string of integer temperature values, each separated by a space character.
Create a function that return its lowest value, or None/null/Nothing if the string is empty.
*/

function lowestTemp(t) {
  return !!t ? Math.min(...t.split(" ")) : null;
}

console.log(lowestTemp("18 27 -42 16 17 -43 36 45 -25 -24 19 -14"));
console.log(lowestTemp(""));
