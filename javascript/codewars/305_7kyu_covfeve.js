/* ---------------------------------------------------------------------------------------------- */
/*                                             Covfefe                                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
*/

function covfefe(str) {
  if (str.includes("coverage")) {
    str = str.replaceAll("coverage", "covfefe");
  } else {
    str += " covfefe";
  }
  return str;
}

console.log(covfefe("coverage coverage"));
console.log(covfefe("nothing"));
