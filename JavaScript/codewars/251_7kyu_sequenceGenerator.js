/* ---------------------------------------------------------------------------------------------- */
/*                                       Sequence Generator                                       */
/* ---------------------------------------------------------------------------------------------- */
/*
Difficulty: 7 kyu

Implement function sequence, which returns new n-size Array filled according to pattern.

Pattern may be:
- a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence, number, 
string or any other object, then filled by copying, this object n-times.

Examples:
- sequence(3, 4); // [4, 4, 4]
- sequence(5, []); // [[], [], [], [], []]
- sequence(2, "s"); // ["s", "s"]
- sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
- sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Note: Sequences are great to work with functional methods like map, reduce, forEach, every or any. 

For example: Sum of numbers 1-10
let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);

Be careful with long sequences. They are just arrays, every element is created when function is called.

*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function sequence(n, pattern) {
  return pattern instanceof Function
    ? Array.from({ length: n }, (v, k) => pattern(v, k))
    : Array.from({ length: n }).fill(pattern);
}

console.log(sequence(3, 4));
console.log(sequence(3, "s"));
console.log(sequence(5, []));
console.log(sequence(5, (x, idx) => idx % 2));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function sequence2(n, pattern) {
  return Array.from({ length: n }, pattern instanceof Function ? pattern : () => pattern);
}

console.log(sequence2(3, 4));
console.log(sequence2(3, "s"));
console.log(sequence2(5, []));
console.log(sequence2(5, (x, idx) => idx % 2));
