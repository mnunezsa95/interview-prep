/* ---------------------------------------------------------------------------------------------- */
/*                                    Sum of Odd Cubed Numbers                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Find the sum of the odd numbers within an array, after cubing the initial integers. The function 
should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  if (arr.some((item) => isNaN(item))) return undefined;
  return arr
    .filter((value) => {
      return value % 2 !== 0;
    })
    .reduce((acc, currValue) => {
      return (acc += currValue ** 3);
    }, 0);
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd(["a", 12, 9, "z"]));
console.log(cubeOdd(["a", "z"]));
console.log(cubeOdd([-3, -2, 2, 3]));

/* ---------------------------------------------------------------------------------------------- */
/*                                        Improved Solution                                       */
/* ---------------------------------------------------------------------------------------------- */

function cubeOdd2(arr) {
  let isNumeric = arr.some((value) => isNaN(value));
  return isNumeric ? undefined : arr.filter((n) => n % 2).reduce((acc, cv) => acc + cv ** 3, 0);
}

console.log(cubeOdd2([1, 2, 3, 4]));
console.log(cubeOdd2(["a", 12, 9, "z"]));
console.log(cubeOdd2(["a", "z"]));
console.log(cubeOdd2([-3, -2, 2, 3]));
