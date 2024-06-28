/* ---------------------------------------------------------------------------------------------- */
/*                                     Partial Word Searching                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/

function wordSearch(query, seq) {
  seq = seq.filter((w) => w.toLowerCase().includes(query.toLowerCase()));
  return seq.length ? seq : ["Empty"];
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]));
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]));
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]));