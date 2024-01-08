/* ---------------------------------------------------------------------------------------------- */
/*                                   Does my list include this?                                   */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Create a method that accepts a list and an item, and returns true if the item belongs to the list, 
otherwise false.
*/

function includeThis(arr, item) {
  if (Array.isArray(arr)) {
    return arr.includes(item);
  }
  return false;
}

includeThis([1, 2, 3, 4], 3);
