/* ---------------------------------------------------------------------------------------------- */
/*                                            Fill None                                           */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a function that accepts a list that can contain missing data, and an integer representing the method on how to fill the missing data if there is any. Missing data is represented as None. The list will only contain integers and None values.

Note that depending on the language you attempt this kata with, None corresponds to:

• None (Python)
• undefined (Javascript and TypeScript)
• Nothing (Haskell)
• null (C#)

The fill method rules are outlined below:

Fill method: 
  -1: backwards 
   0: nearest      
   1: forwards

Example
• arr = [None, 1, None, None, None, 2, None]

• fill(arr, -1) == [1, 1, 2, 2, 2, 2, None]  # None replaced by closest int on the right
• fill(arr,  0) == [1, 1, 1, 1, 2, 2, 2]     # None replaced by closest int. If equidistant, choose the smallest int
• fill(arr,  1) == [None, 1, 1, 1, 1, 2, 2]  # None replaced by closest int on the left

Notes
• [] should return []
• [None] should return [None]
• Arrays will only contain integers and None values

*/

function fill(a, k = 0) {
  if (k === -1) {
    return a.map((e, i) => (e === undefined ? a.slice(i + 1).find((x) => x !== undefined) : e));
  }

  if (k === 1) {
    return a.map((e, i) => {
      return e === undefined
        ? a
            .slice(0, i)
            .reverse()
            .find((x) => x !== undefined)
        : e;
    });
  }

  return a.map((e, i) => {
    if (e !== undefined) return e;
    for (let x = i - 1, y = i + 1; x >= 0 || y < a.length; x--, y++) {
      if (a[x] !== undefined && a[y] !== undefined) return Math.min(a[x], a[y]);
      if (a[x] !== undefined) return a[x];
      if (a[y] !== undefined) return a[y];
    }
  });
}

console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], -1));
console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 1));
console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 0));
