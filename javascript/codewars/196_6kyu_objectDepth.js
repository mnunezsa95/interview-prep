/* ---------------------------------------------------------------------------------------------- */
/*                                          Object depth                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a JavaScript function that returns the depth of an object. This function takes one argument that can be any data-type.

The depth of an object, say obj, is how many nested objects obj contains. Assume an empty object has a depth of 0, while an object non-empty but without nested objects has a depth of 1.

For example :
- var obj = {a: 1, b: {c: 2}};
has a depth of 2 because it is a non-empty object containing another non-empty object.

While :
- var emptyObj = {};
has a depth of 0 because it is empty.

And:
- var obj = {a: 1, b: 2, c: 3};
has a depth of 1.

Arrays should always return a depth of 0. Be careful about null.
*/

function depth(obj) {
  // Check if obj is null, an empty array, or an empty object
  if (obj === null || Array.isArray(obj) || Object.keys(obj).length === 0) return 0;
  let level = 0;
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const currentDepth = depth(obj[key]);
        level = Math.max(level, currentDepth); // Use level instead of depth
      }
    }
    level += 1; // Increase depth for the current level
  }

  return level;
}

console.log(depth({ a: 1, b: { c: { e: 5 } }, d: 4 }));
console.log(depth(["a", ["b", "c"]]));
console.log(depth(["a", "b", "c"]));
console.log(depth([]));
console.log(depth({ a: 1 }));
console.log(depth({ a: 1, b: { c: { e: 5 } }, d: { f: 8 } }));
