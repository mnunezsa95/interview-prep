/* ---------------------------------------------------------------------------------------------- */
/*                                          Average Array                                         */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 7 kyu

Create a function that takes a 2D array as an input, and outputs another array that contains the average 
values for the numbers in the nested arrays at the corresponding indexes.

Examples:
    [ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

    1st array: [1, 2, 3, 4]
    2nd array: [5, 6, 7, 8]
                |  |  |  |
                v  v  v  v
    average:   [3, 4, 5, 6]

    And another one:
    [ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]
    average: ==>  [22.5, 11, 38.75, 38.25, 19.5]

    1st array: [  2,   3,    9,   10,    7]
    2nd array: [ 12,   6,   89,   45,    3]
    3rd array: [  9,  12,   56,   10,   34]
    4th array: [ 67,  23,    1,   88,   34]
                  |    |     |     |     |
                  v    v     v     v     v
    average:   [22.5, 11, 38.75, 38.25, 19.5]

Note: the function should also work with negative numbers and floats.
*/

const avgArray = (arr) => {
  // create a copy of the first array in the sequence & fill it with zero
  const initialArray = Array.from({ length: arr[0].length }, () => {
    return 0;
  });

  const totalValues = arr.reduce((result, arr) => {
    arr.forEach((value, index) => {
      return (result[index] += value);
    });
    return result;
  }, initialArray);

  // take ever value in the new added array and divide by length of the array
  const totalAverages = totalValues.map((value) => value / arr.length);
  return totalAverages;
};

console.log(
  avgArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);

// solution 2
function avgArray2(arr) {
  let ar = [];
  for (let i = 0; i < arr[0].length; ++i) {
    let sum = 0;
    for (let j = 0; j < arr.length; ++j) {
      sum += arr[j][i];
    }
    ar.push(sum / arr.length);
  }
  return ar;
}
console.log(
  avgArray2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);
