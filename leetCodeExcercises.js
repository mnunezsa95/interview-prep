/* ---------------------------------------------------------------------------------------------- */
/*                                      Question #1: TwoSums                                      */
/* ---------------------------------------------------------------------------------------------- */

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to 
target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

const twoSum = function (nums, target) {
  // nums is an array & target is a value

  // Loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    let pairNum = target - nums[i];
    const indexOfNum = nums.indexOf(pairNum);
    if (indexOfNum !== -1 && indexOfNum !== i) {
      console.log([i, indexOfNum]);
      return [i, indexOfNum];
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);

/* ---------------------------------------------------------------------------------------------- */
/*                                    Question 9: isPalindrome                                    */
/* ---------------------------------------------------------------------------------------------- */

/* Given an integer x, return true if x is a palindrome, and false otherwise.
 */

// x will be a number; must determine if the name is the same backwards
function isPalindrome(x) {
  // convert the number to str so it can be broken into array and reversed; join back together
  let xStr = String(x);
  let reversedStr = xStr.split("").reverse().join("");
  if (xStr === reversedStr) return true;
  return false;
}

isPalindrome(121);
isPalindrome(10);

/* ---------------------------------------------------------------------------------------------- */
/*                                 Question 13: Roman to Integer                                  */
/* ---------------------------------------------------------------------------------------------- */

const romanToInt = (s) => {
  let res = 0; // will hold result
  // object containing key-value pairs
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  s = s.toUpperCase(); // will ensure string is always capitalized
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      res += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      res += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      res += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      res += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      res += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      res += 900;
      i++;
    } else {
      res += romanHash[s[i]];
    }
  }
  console.log(res);
  return res;
};

romanToInt("Iii");
romanToInt("IV");
romanToInt("iX");
romanToInt("Xl");
romanToInt("LVii");
romanToInt("MCMXCIV");
romanToInt("CMX");
romanToInt("CDm");

console.log("15" + 5);

// ? ---------------------------------------------------------------------------------------------- */
// ?                            Q26: Remove Duplicates from Sorted Array                            */
// ? ---------------------------------------------------------------------------------------------- */
/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each 
unique element appears only once. The relative order of the elements should be kept the same. Then return the 
number of unique elements in nums.*/

const removeDuplicates = (nums) => {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

/* ---------------------------------------------------------------------------------------------- */
/*                                      Question 69: Sqrt(x)                                      */
/* ---------------------------------------------------------------------------------------------- */
/* Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well. */

function mySqrt(x) {
  let res = Math.floor(x ** (1 / 2));
  console.log(res);
  return res;
}

mySqrt(8);

/* ---------------------------------------------------------------------------------------------- */
/*                Question 28: Find the Index of the First Occurrence in a String                 */
/* ---------------------------------------------------------------------------------------------- */
/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if 
needle is not part of haystack. */

const strStr = (haystack, needle) => {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }
  return -1;
};

strStr("sadbutsad", "sad"); // Exp Output: 0
strStr("leetcode", "leeto"); // Exp Output: 1

/* ---------------------------------------------------------------------------------------------- */
/*                                   Question 136: Single Number                                  */
/* ---------------------------------------------------------------------------------------------- */
/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space. */

function singleNumber(nums) {
  // loop array & filter out based on condition;
  // condition = if the index of a specific number is the same as the last index of the same number
  return nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num));
}

singleNumber([2, 2, 1]);

//

/* ---------------------------------------------------------------------------------------------- */
/*                              Question 1929: Concatenation of Array                             */
/* ---------------------------------------------------------------------------------------------- */
/* Given an integer array nums of length n, you want to create an array ans of length 2n where 
ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the 
concatenation of two nums arrays. Return the array ans.
 */

let getConcatenation = function (nums) {
  // access the array, multiply the length
  let newArr = [...nums, ...nums];
  return newArr;
};

getConcatenation([1, 2, 1]);
