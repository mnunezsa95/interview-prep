/* ---------------------------------------------------------------------------------------------- */
/*                                    14. Longest Common Prefix                                   */
/* ---------------------------------------------------------------------------------------------- */

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
• Input: strs = ["flower","flow","flight"]
• Output: "fl"

Example 2:
• Input: strs = ["dog","racecar","car"]
• Output: ""
• Explanation: There is no common prefix among the input strings.
 

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

const longestCommonPrefix = function (strs) {
  if (!strs.length) return ""; // If the array is empty, return an empty string (no common prefix).
  let prefix = strs[0]; // Initialize the prefix to be the first string in the array.

  // Iterate through the rest of the strings in the array.
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with the prefix...
    while (strs[i].indexOf(prefix) === -1) {
      // ...shorten the prefix by removing the last character.
      prefix = prefix.slice(0, prefix.length - 1);

      // If the prefix becomes empty, there is no common prefix, return an empty string.
      if (!prefix) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
