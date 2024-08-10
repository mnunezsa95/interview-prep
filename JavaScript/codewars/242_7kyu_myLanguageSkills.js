/* ---------------------------------------------------------------------------------------------- */
/*                                       My Language Skills                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)
- Examples
-- {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
-- {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
-- {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function myLanguages(results) {
  // Save the entries from the dict in an array of arrays
  const entries = Object.entries(results);

  // Filter through each sub-array, and filter out values larger than 60
  // Sort the results by descending order
  // Output the keys into an array
  return entries
    .filter(([key, value]) => value >= 60)
    .sort(([, valueA], [, valueB]) => valueB - valueA)
    .map(([key, value]) => key);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function myLanguages2(results) {
  return Object.keys(results)
    .filter((r) => results[r] > 59)
    .sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages2({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages2({ Hindi: 60, Greek: 71, Dutch: 93 }));
