/* ---------------------------------------------------------------------------------------------- */
/*                                         Range Function                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14

*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
let range = (val1, val2, val3) => {
  let result = [];

  if (val2 === undefined) {
    for (let i = 1; i <= val1; i++) {
      result.push(i);
    }
  } else if (val3 === undefined) {
    for (let i = val1; i <= val2; i++) {
      result.push(i);
    }
  } else {
    for (let i = val1; i <= val3; i += val2) {
      result.push(i);
    }
  }
  return result;
};

console.log(range(5));
console.log(range(3, 7));
console.log(range(2, 3, 15));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function range2(min, step, max) {
  if (arguments.length === 1) return range(1, 1, min);
  if (arguments.length === 2) return range(min, 1, step);
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range2(5));
console.log(range2(3, 7));
console.log(range2(2, 3, 15));
