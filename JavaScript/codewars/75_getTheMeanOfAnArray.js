/* ---------------------------------------------------------------------------------------------- */
/*                                    Get the Mean of An Array                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! 
You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, cv) => acc + cv, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([10, 10, 20, 20]));
