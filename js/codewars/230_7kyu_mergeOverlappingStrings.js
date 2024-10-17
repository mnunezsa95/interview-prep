/* ---------------------------------------------------------------------------------------------- */
/*                                    Merge overlapping strings                                   */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"
*/

function mergeStrings(first, second) {
  let overlap = ""; // To save overlap

  // Loop through every character of first word
  for (let i = 0; i < first.length; i++) {
    // Define current string (first iteration is entire word, reduce word at each iteration)
    let currString = first.slice(i);

    // Check if second word starts with current string
    if (second.startsWith(currString)) {
      // If yes, the current string is the overlap, break the loop
      overlap = currString;
      break;
    }
  }

  // Combine first word + the second word (sliced at the overlap)
  return first + second.slice(overlap.length);
}

console.log(mergeStrings("abcde", "cdefgh"));
