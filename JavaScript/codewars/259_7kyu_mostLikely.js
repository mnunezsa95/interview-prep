/* ---------------------------------------------------------------------------------------------- */
/*                                           Most Likely                                          */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 7 kyu 

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:
Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function mostLikely(prob1, prob2) {
  const [num1, den1] = prob1.split(":");
  const [num2, den2] = prob2.split(":");
  return num1 / den1 > num2 / den2;
}

console.log(mostLikely("1:3", "1:2"));
console.log(mostLikely("1:2", "1:3"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function mostLikely2(prob1, prob2) {
  const divide = (num, den) => num / den;
  return divide(...prob1.split(":")) > divide(...prob2.split(":"));
}

console.log(mostLikely2("1:3", "1:2"));
console.log(mostLikely2("1:2", "1:3"));
