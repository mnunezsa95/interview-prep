/* ---------------------------------------------------------------------------------------------- */
/*                                 Count characters in your string                                */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

The main idea is to count all the occurring characters in a string. If you have a string like aba, 
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  let res = {};
  string.split("").forEach((char) => (res[char] ? res[char]++ : (res[char] = 1)));
  return res;
}

console.log(count(""));
console.log(count("a"));
console.log(count("abba"));
