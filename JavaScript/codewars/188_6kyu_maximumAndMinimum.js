/* ---------------------------------------------------------------------------------------------- */
/*                                       Maximum and minimum                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.

Example
max(1,2,3,4) //returns 4
max(1,2,3,['4']) //returns 4; note it returned 4 not '4'
max(1,2,[3,4]) //returns 4
max(1,2,[3,[4]]) //returns 4
max(1,2,[3,['4r']]) //returns NaN
max([[],[-4]]) // returns -4
max() or max([]) //returns 0
And so goes for min

Further Instructions
functions will take any number of arguments
Arrays of numbers can be to any depth
You can't use Math.max, Math.min, and require
If one of the arguments can not be evaluated to a number, return NaN

*/

function max(...args) {
  args = args.flat(Infinity);
  if (args.length === 0) return 0;
  let containsNaN = args.some((num) => Number.isNaN(+num));
  if (containsNaN) return NaN;
  let maxValue = -Infinity;
  args.forEach((num) => {
    num = +num;
    if (num > maxValue) maxValue = num;
  });

  return maxValue;
}

function min(...args) {
  args = args.flat(Infinity);
  if (args.length === 0) return 0;
  let containsNaN = args.some((num) => Number.isNaN(+num));
  if (containsNaN) return NaN;
  let minValue = Infinity;
  args.forEach((num) => {
    num = +num;
    if (num < minValue) minValue = num;
  });
  return minValue;
}

console.log(max(1, 2, [3, [4]]));
console.log(max(1, 2, [3, ["4r"]]));
console.log(max(1, 2, [3, ["4"]]));
console.log(max());
console.log(max([], -4));
console.log(max([]));

console.log(min(1, 2, [3, [4]]));
