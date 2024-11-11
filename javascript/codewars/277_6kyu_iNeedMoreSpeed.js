/* ---------------------------------------------------------------------------------------------- */
/*                                        I Need More Speed                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a function that will take in any array and reverse it. Sounds simple doesn't it?

NOTES:
- Array should be reversed in place! (no need to return it)
- Usual builtins have been deactivated. Don't count on them.
- You'll have to do it fast enough, so think about performances
*/

function reverse(arr) {
  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));

/* ----------------------------------------- EXPLANATION ---------------------------------------- */

/**
 * Now, we want to swap the first element (arr[0] = 1) with the last element (arr[4] = 5):
 * - Step 1: let temp = arr[0]; → temp = 1.
 * -- We save 1 in the temp variable.
 * - Step 2: arr[0] = arr[4]; → arr[0] = 5.
 * -- Now the array looks like this: [5, 2, 3, 4, 5].
 * - Step 3: arr[4] = temp; → arr[4] = 1.
 * -- Now the array becomes: [5, 2, 3, 4, 1].
 */
