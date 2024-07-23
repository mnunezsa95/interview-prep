/* ---------------------------------------------------------------------------------------------- */
/*                                       Check three and two                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
  let dict = {};
  array.map((item) => (item in dict ? dict[item]++ : (dict[item] = 1)));
  const values = Object.values(dict);
  return values.includes(3) && values.includes(2);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
