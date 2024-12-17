/* ---------------------------------------------------------------------------------------------- */
/*                                         Largest Element                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1]) ----> [6,7]
*/

function largest(n, array) {
  let results = [];
  array.sort((a, b) => a - b);
  while (n > 0) {
    let number = array.pop();
    results.push(number);
    n--;
  }
  return results.sort((a, b) => a - b);
}

console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]));
