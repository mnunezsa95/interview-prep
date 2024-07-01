/* ---------------------------------------------------------------------------------------------- */
/*                                          Split Strings                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
- 'abc' =>  ['ab', 'c_']
- 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
  let res = [];
  if (!str) return res;

  str.split("");
  for (let i = 0; i < str.length; i += 2) {
    res.push(str[i] + str[i + 1]);
  }

  return res.join(".").replaceAll("undefined", "_").split(".");
}

console.log(solution("abcdefg"));
console.log(solution("abcdef"));
