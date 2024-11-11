/* ---------------------------------------------------------------------------------------------- */
/*                                         Difference of 2                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
- [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
- [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
- [1, 23, 3, 4, 7] should return [[1, 3]]
- [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

function twosDifference(input) {
  let pair = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] - input[j] == 2) {
        pair.push([input[i], input[j]].sort((a, b) => a - b));
      }
    }
  }
  return pair.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
}

console.log(twosDifference([1, 2, 3, 4]));
console.log(twosDifference([1, 3, 5, 6, 8, 10, 15, 32, 12, 14, 56]));
