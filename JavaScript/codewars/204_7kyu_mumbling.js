/* ---------------------------------------------------------------------------------------------- */
/*                                            Mumbling                                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

This time no story, no theory. The examples below show you how to write function accum:

Examples:
- accum("abcd") -> "A-Bb-Ccc-Dddd"
- accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
- accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  return (s = s
    .toLowerCase()
    .split("")
    .map((letter, i) => {
      let map = Array.from({ length: i + 1 }, () => letter);
      map[0] = map[0].toUpperCase();
      return (map = map.join(""));
    })
    .join("-"));
}

console.log(accum("ZpglnRxqenU"));
