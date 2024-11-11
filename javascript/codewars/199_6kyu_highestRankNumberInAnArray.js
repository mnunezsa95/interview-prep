/* ---------------------------------------------------------------------------------------------- */
/*                                 Highest Rank Number in an Array                                */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  let occ = {};
  arr.forEach((val) => {
    if (!(val in occ)) occ[val] = 1;
    else occ[val] += 1;
  });

  let maxVal = Math.max(...Object.values(occ));
  let key = Object.keys(occ).filter((key) => occ[key] === maxVal);

  return key.length > 1 ? Math.max(...key) : +key[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
