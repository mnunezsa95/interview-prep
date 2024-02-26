/* ---------------------------------------------------------------------------------------------- */
/*                                       Longest Palindrome                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

A palindrome is a series of characters that read the same forwards as backwards such as "hannah", 
"racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, 
as an integer value, of longest alphanumeric palindrome that could be made by combining the characters 
in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 
because one possible palindrome would be "abcyxycba".
*/

function longestPalindrome(str) {
  let s = str.toLowerCase();
  let arr = "abcdefghijklmnopqrstuvwxyz0123456789";
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    let c = 0;
    for (let j = 0; j < s.length; ++j) {
      if (s[j] == arr[i]) {
        c++;
      }
    }
    count += Math.floor(c / 2) * 2;
  }
  return count == s.length ? count : ++count;
}

console.log(longestPalindrome("B"));
console.log(longestPalindrome("xyz__a_/b0110//a_zyx"));
console.log(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"));
