/* ---------------------------------------------------------------------------------------------- */
/*                                    Each n-th element of list                                   */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 6kyu

In this task, you need to write a function each, that takes an integer number n and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).

If n < 0, count by abs n from the end of the list.
If n == 0, return an empty list.

Examples
each 0 [1,2,3,4,5,6] = []  
each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]  
each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]  
each 2 [1,2,3,4,5,6] = [2,4,6]  
each (-2) [1,2,3,4,5,6] = [5,3,1]  
each 3 [1,2] = []  
each (-3) [1,2] = []  
each 5 [1,2,3,4,5,6,7] = [5]  
each (-5) [1,2,3,4,5,6,7] = [3]  
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function each(n, xs) {
  if (xs.length == 0 || n == 0) return []; // Handle edge cases: empty array or n is zero
  let result = []; // Initialize the result array
  if (n < 0) {
    // If n is negative, reverse the array and make n positive
    n = Math.abs(n);
    xs = xs.reverse();
  }

  // Iterate through xs with step size n
  for (let i = -1; i < xs.length; i += n) {
    result.push(xs[i]); // Push element at index i to result
  }

  // Filter out undefined values (when i goes out of bounds)
  return result.filter((val) => val !== undefined);
}

console.log(each(-1, []));
console.log(each(-1, [1, 2, 3, 4, 5, 6]));
console.log(each(-2, [0, 1, 2, 3, 4, 5, 6]));
console.log(each(5, [1, 2, 3, 4, 5, 6, 7]));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function each2(n, xs) {
  if (xs.length == 0 || n == 0) return [];
  let result = [];
  if (n < 0) {
    n = Math.abs(n);
    xs = xs.reverse();
  }

  for (let i = n - 1; i < xs.length; i += n) {
    result.push(xs[i]);
  }

  return result;
}

console.log(each2(-1, []));
console.log(each2(-1, [1, 2, 3, 4, 5, 6]));
console.log(each2(-2, [0, 1, 2, 3, 4, 5, 6]));
console.log(each2(5, [1, 2, 3, 4, 5, 6, 7]));
