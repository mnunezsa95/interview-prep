/* ---------------------------------------------------------------------------------------------- */
/*                                         Break camelCase                                        */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficult: 6 kyu

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  res = "";
  string.split("").forEach((char) => {
    return char === char.toUpperCase() ? (res += " " + char) : (res += char);
  });
  return res;
}

console.log(solution(""));
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
