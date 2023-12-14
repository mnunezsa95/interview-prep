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
/*                                    Question 2: isPalindrome                                    */
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
/*                                  Question 3: Roman to Integer                                  */
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
