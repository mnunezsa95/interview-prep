/* ---------------------------------------------------------------------------------------------- */
/*                                          Shortest Word                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const newS = s.split(" ");
  let shortest = newS[0].length;
  for (let i = 0; i < newS.length; i++) {
    if (newS[i].length < shortest) {
      shortest = newS[i].length;
    }
  }
  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
