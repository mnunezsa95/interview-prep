/* ---------------------------------------------------------------------------------------------- */
/*                                         Find Duplicates                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given an array, find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates 
(i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/

const duplicates = (arr) => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];

console.log(duplicates([1, 2, 3, 4, 5]));
console.log(duplicates([1, 2, 3, 3, 2, 1]));
console.log(duplicates([]));
console.log(duplicates(["zut", "alors", 1, 2, 4, 4, 3, 3, "1", 5, 3, "zut"]));
