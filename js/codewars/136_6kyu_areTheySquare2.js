/* ---------------------------------------------------------------------------------------------- */
/*                                       Are They Square 2?                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Another Kata testing an whether all elements of an array are square, although this time the array can be a multidemtional array with any number of dimensions.

Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

Your function should return true if all elements are square numbers and false if not.

An entirely empty array should return undefined.

You can assume that all array elements will be positive integers.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
var isSquare = function (arr) {
  function countNestedArrays(arr) {
    let count = 1;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        count++; // Increment count for each nested array found
        count += countNestedArrays(element); // Recursively count nested arrays
      }
    });
    return count;
  }
  console.log(arr.length);
  const count = countNestedArrays(arr);

  if (arr.length === 0) return undefined;
  return arr.flat(count).every((num) => Math.sqrt(num) % 1 === 0);
};

console.log(isSquare([1, 4, 9, 16, 25, 36]));
console.log(isSquare([]));
console.log(isSquare([1, 2, 4, 15]));
console.log(isSquare([1, [4], [9, 16, 25]]));
console.log(isSquare([1, [4, [9, [16, [25, [36, [49, [64, [81, [100, [121, [144, [169, [196, [225, [256, [289, [324, [361, [400]]]]]]]]]]]]]]]]]]]]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

var isSquare2 = function (arr) {
  return arr.length ? arr.flat(Infinity).every((i) => Math.sqrt(i) % 1 === 0) : undefined;
};

console.log(isSquare2([1, 4, 9, 16, 25, 36]));
console.log(isSquare2([]));
console.log(isSquare2([1, 2, 4, 15]));
console.log(isSquare2([1, [4], [9, 16, 25]]));
console.log(isSquare2([1, [4, [9, [16, [25, [36, [49, [64, [81, [100, [121, [144, [169, [196, [225, [256, [289, [324, [361, [400]]]]]]]]]]]]]]]]]]]]));
