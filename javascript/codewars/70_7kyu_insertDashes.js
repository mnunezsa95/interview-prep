/* ---------------------------------------------------------------------------------------------- */
/*                                          Insert Dashes                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  let result = ""; // variable to save result
  let str = num.toString(); // convert num to an iterable type (Numbers are not iterable)
  // loop through each item in the string
  for (let i = 0; i < str.length; i++) {
    // check to ensure the two numbers being compared are odd
    if (i > 0 && str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result += "-"; // insert dash
    }
    result += str[i]; // otherwise add the number
  }
  return result;
}

console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));
