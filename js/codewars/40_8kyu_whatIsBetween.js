/* ---------------------------------------------------------------------------------------------- */
/*                                        What is between?                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

function between(a, b) {
  let res = [a]; // create an array; set first value equal to bottom param
  // iterate as long as i does not exceed b
  for (let i = a; i < b; i++) {
    res.push(i + 1); // push i + 1 everytime
  }
  return res; // return res
}

console.log(between(1, 4));
