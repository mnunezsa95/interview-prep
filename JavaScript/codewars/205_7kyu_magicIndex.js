/* ---------------------------------------------------------------------------------------------- */
/*                                           Magic Index                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function findMagic(arr) {
  return arr.filter((num, i) => num === i)[0] || -1;
}

console.log(findMagic([-20, -10, 2, 10, 20]));
console.log(findMagic([6, 5, 83, 5, 3, 18]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function findMagic2(arr) {
  return arr.findIndex((i) => arr[i] === i);
}

console.log(findMagic2([-20, -10, 2, 10, 20]));
console.log(findMagic2([6, 5, 83, 5, 3, 18]));

/* ----------------------------------------- SOLUTION 3 ----------------------------------------- */
function findMagic3(arr) {
  return arr.find((x, i) => x === i) || -1;
}

console.log(findMagic3([-20, -10, 2, 10, 20]));
console.log(findMagic3([6, 5, 83, 5, 3, 18]));
