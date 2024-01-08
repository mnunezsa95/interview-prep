/* ---------------------------------------------------------------------------------------------- */
/*                                           Double Char                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 Kyu

Instructions: Given a string, you have to return a string in which each character (case-sensitive) is 
repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  let res = []; // create a resulting array
  // split string and double each character
  str.split("").forEach((char) => {
    return res.push(char + char); // push each duplicate to resulting array and return
  });
  return res.join(""); // join and retunr resulting array
}

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("Adidas")); // "AAddiiddaass"
console.log(doubleChar("1337")); // "11333377"
console.log(doubleChar("illuminati")); // "iilllluummiinnaattii"
console.log(doubleChar("123456")); // "112233445566"
console.log(doubleChar("%^&*(")); // "%%^^&&**(("
