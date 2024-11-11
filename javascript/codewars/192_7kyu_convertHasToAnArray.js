/* ---------------------------------------------------------------------------------------------- */
/*                                    Convert Hash to an Array                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function convertHashToArray(hash) {
  res = [];
  for (key in hash) res.push([key, hash[key]]);
  return res;
}

console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function convertHashToArray2(hash) {
  return Object.entries(hash).sort();
}

console.log(convertHashToArray2({ name: "Jeremy", age: 24, role: "Software Engineer" }));
