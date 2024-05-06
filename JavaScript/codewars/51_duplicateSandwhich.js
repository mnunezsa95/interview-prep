/* ---------------------------------------------------------------------------------------------- */
/*                                       Duplicate Sandwhich                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

In this kata you will be given a list consisting of unique elements except for one thing that appears 
twice.

Your task is to output a list of everything in between both occurrences of this element in the list.

[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"

Notes:
- All elements will be the same datatype.
- All used elements will be primitive.
*/

function duplicateSandwich(a) {
  const appeared = [];
  for (let i = 0; i < a.length; i++) {
    const item = a[i];
    if (!appeared.includes(item)) {
      appeared.push(item);
    } else {
      const startIndex = a.indexOf(item) + 1;
      const endIndex = i;
      return a.slice(startIndex, endIndex);
    }
  }
  // If no duplicate is found, return an empty array or handle it as needed
  return [];
}

console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));
console.log(duplicateSandwich("example"));
