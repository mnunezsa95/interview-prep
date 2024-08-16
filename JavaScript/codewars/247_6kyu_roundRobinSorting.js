/* ---------------------------------------------------------------------------------------------- */
/*                                       Round Robin Sorting                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6kyu

Write a function which accepts a string[] and returns a string[], re-ordering the random input passed into Santa's defined order.

The output array length will be the same as the input length. The sorted list should be alphabetical by name.

Examples:

input:        "Sarah", "Charlie", "Mo"          
santa sorted: "Charlie", "Mo", "Sarah"

input:        "Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"
santa sorted: "Charlie", "Mo", "Sarah", "Charlie", "Mo", "Sarah", "Charlie"
*/

function santaSort(unsortedNames) {
  const giftsPerPerson = {};
  const res = [];

  // Sort the unsortedNames array and count the occurrences of each name
  unsortedNames.sort().forEach((name) => {
    giftsPerPerson[name] = (giftsPerPerson[name] || 0) + 1;
  });

  // Continue until the result array has the same length as the unsortedNames array
  while (res.length < unsortedNames.length) {
    // Iterate over each name in the giftsPerPerson object
    for (const name in giftsPerPerson) {
      // If there are still gifts to be distributed for the current name
      if (giftsPerPerson[name] > 0) {
        res[res.length] = name; // Add the name to the result array
        giftsPerPerson[name]--;
      }
    }
  }

  return res;
}

console.log(santaSort(["Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"]));
console.log(
  santaSort([
    "Sarah",
    "Sarah",
    "Sarah",
    "Sarah",
    "Mo",
    "Mo",
    "Kai",
    "Charlie",
    "Charlie",
    "Charlie",
    "Charlie",
    "Charlie",
    "Lalo",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Ben",
    "Julie",
    "Julie",
    "Julie",
    "Julie",
    "Julie",
    "Julie",
    "Julie",
    "Julie",
    "Julie",
  ])
);
