/* ---------------------------------------------------------------------------------------------- */
/*                                      Simple Frequency Sort                                     */
/* ---------------------------------------------------------------------------------------------- */

/*

Difficulty: 6 kyu

In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
More examples in test cases.
*/

function solve(arr) {
  let values = {};

  arr.forEach((value) => {
    if (value in values) values[value]++;
    else values[value] = 1;
  });

  arr.sort((a, b) => {
    if (values[a] !== values[b]) {
      return values[b] - values[a];
    }
    return a - b;
  });

  return arr;
}

console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]));
console.log(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]));
