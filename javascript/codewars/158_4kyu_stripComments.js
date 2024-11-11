/* ---------------------------------------------------------------------------------------------- */
/*                                         Strip Comments                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 4 kyu

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

const solution = (input, markers) => {
  if (markers.length == 0) {
    return input.trim();
  } else {
    return input
      .split("\n")
      .map((line) => markers.reduce((acc, curr) => acc.split(curr)[0].trimRight(), line))
      .join("\n");
  }
};

console.log(solution("#aa bb\ncc dd", ["#"])); // '\ncc dd'
console.log(solution("aa # bb\ncc dd", ["#", "!"]));
console.log(solution("aa bb cc  ", []));
