/* ---------------------------------------------------------------------------------------------- */
/*                              Sum a list but ignore any duplicates                              */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10 and for the list [1, 10, 3, 10, 10] , the function should return 4.
*/

function sumNoDuplicates(numList) {
  if (numList.length == 0 || !Array.isArray(numList)) return 0;
  return numList.filter((num, i, arr) => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, cv) => acc + cv, 0);
}

console.log(sumNoDuplicates([7, 9, 5, 6, 1, 0, 5, 0, 4, 7, 1, 2, 8, 9, 6, 1]));
console.log(sumNoDuplicates([]));
console.log(sumNoDuplicates(2));
