/* ---------------------------------------------------------------------------------------------- */
/*                                Basic JavaScript coding questions                               */
/* ---------------------------------------------------------------------------------------------- */

// ! Q1: Write a JavaScript function to calculate the sum of two numbers.
// * create a function that takes in two numbers as inputs and returns the sum

const addTwoNumbers = (a, b) => {
  return a + b;
};

const value1 = addTwoNumbers(10, 15);
console.log(value1);

// ============================================================================================================

// ! Q2: Write a JavaScript program to find the maximum number in an array.
// * create a fn that takes an array as an input; Math.max() function will find largest number

const findMaxNumber = (arr) => {
  return Math.max(...arr); // the spread operator is used to unpack the array
};

const value2 = findMaxNumber([1, 2, 3, 4, 5]);
console.log(value2);

// ============================================================================================================

// ! Q3: Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// * create a function that takes a str as an input. This function checks if the input matches a reversed input.
// * the reverse() method reverses the order of an array

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return true;
  }
}

const value3 = isPalindrome("stanley yelnats");
console.log(value3);

// ============================================================================================================

// ! Q4: Write a JavaScript program to reverse a given string
// * same process as above

function reverseString(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
}
const value4 = reverseString("hello");
console.log(value4);

// ============================================================================================================

// ! Q5: Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers
// * create a fn that takes an array as an input, checks if evenly divisible by 2 and returns only ones that are

const isEven = (arr) => {
  const evenNumbers = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
};

const value5 = isEven([1, 2, 3, 4, 5]);
console.log(value5);

// ============================================================================================================

// ! Q6: Write a JavaScript program to calculate the factorial of a given number
// * create a function that takes in a number, and multiples it by every number that comes before it

const getFactorial = (num) => {
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res = res * i;
  }
  return res;
};

const value6 = getFactorial(5);
console.log(value6);

// ============================================================================================================

// ! Q7: Write a JavaScript function to check if a given number is prime.
// * create a fn that takes an number as an input; loop from 2 to the square root of the number; if a number evenly divides it, it is not prime

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const value7 = isPrime(5);
console.log(value7);

// ============================================================================================================
// ? Needed help with this one
// ! Q8: Write a JavaScript program to find the largest element in a nested array.
// * create a fn that takes in an array and finds the max number of all nested

function findLargestElement(nestedArray) {
  let largest = Number.MIN_VALUE; // Initialize to a very small number
  for (let item of nestedArray) {
    // Check if the item is an array
    if (Array.isArray(item)) {
      for (let num of item) {
        if (num > largest) {
          largest = num;
        }
      }
    } else {
      // Handle flat array
      if (item > largest) {
        largest = item;
      }
    }
  }

  return largest;
}

const value8 = findLargestElement([1, 2, [3, 4, 5]]);
console.log(value8);

// ============================================================================================================
// ! Q10: Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// *

function toTitleCase(str) {
  // break the string up into words
  let words = str.split(" ");
  console.log(words);
  // loop through each word, split it, capitalize first letter then join it back
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const value10 = toTitleCase("hello, there marlon");
console.log(value10);

/* ---------------------------------------------------------------------------------------------- */
/*                         Advanced JavaScript coding interview questions                         */
/* ---------------------------------------------------------------------------------------------- */

// ============================================================================================================
// ! Q2: Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
// *

function sortByKey(arrOfObj) {
  return arrOfObj.sort((a, b) => {
    return b.roll - a.roll;
  });
}

const value11 = sortByKey([
  {
    name: "Isabella Williams",
    roll: 38,
  },
  {
    name: "Sophia Heels",
    roll: 45,
  },
  {
    name: "Ava Benjamin",
    roll: 17,
  },
  {
    name: "Amelia Brown",
    roll: 8,
  },
]);
console.log(value11);

// ============================================================================================================
// ! Q3: Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.
// *

function deepClone(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    obj2 = { ...obj };
    return obj2;
  }
  if (typeof obj === "object" && Array.isArray(obj)) {
    obj2 = [...obj];
    return obj2;
  }
}

// test data
const arrayForTest = [1, 2, [4, 5, 6]];
const objectForTest = { 0: 0, 1: 1, 2: 2, 3: { 3: 3, 4: 4 } };

// cloning
const value13ArrayClone = deepClone(arrayForTest);
const value13ObjectClone = deepClone(objectForTest);

console.log(value13ArrayClone);
console.log(value13ObjectClone);

// comparing the copy to original
console.log(arrayForTest === value13ArrayClone);
console.log(objectForTest === value13ObjectClone);

// ============================================================================================================

//! Q8: Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

function flattenArray(arr) {
  const flatArr = arr.flat().flat();
  console.log(flatArr);
  return flatArr;
}

flattenArray([1, 2, 3, [4, 5, 6, [7, 8, 9]]]);

// ============================================================================================================

// ! Q9: Write a function that determines if two strings are anagrams of each other.
// * Create a fn, takes two strings, compares the chars at each position

function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const value14Test1 = isAnagram("listen", "silent");
const value14Test2 = isAnagram("marlon", "listen");
console.log(value14Test1);
console.log(value14Test2);

/* ---------------------------------------------------------------------------------------------- */
/*                          Common JavaScript coding interview questions                          */
/* ---------------------------------------------------------------------------------------------- */

// ! Q4: Write a function that takes an array of integers as input and returns a new array with only the unique elements.
function getUnqiueElements(arr) {
  const uniqueValues = new Set([...arr]);
  const newArr = Array.from(uniqueValues);
  console.log(newArr);
  return newArr;
}

getUnqiueElements([1, 2, 2, 3, 3, 4]);

// ============================================================================================================

// ! Q5: 8. Given a string, write a function to count the occurrences of each character in the string.

function countCharOccurences(str) {
  const charCount = {};
  str = str.toLowerCase();
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
}

// ============================================================================================================

countCharOccurences("mArlonNunez");

// ! Q10. Write a function that sorts an array of numbers in ascending order.
function sortNumsInAscOrder(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
}

sortNumsInAscOrder([2, 8, 9, 5, 3, 1, 0, 4, 7, 6]);

/* ---------------------------------------------------------------------------------------------- */
/*                               Tricky JavaScript coding questions                               */
/* ---------------------------------------------------------------------------------------------- */

// ! Q9. Write a function that generates a random alphanumeric string of a given length.
function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  console.log(result);
  return result;
}

// generateRandomString(27);
// generateRandomString(10);

/* ---------------------------------------------------------------------------------------------- */
/*                                JavaScript array coding questions                               */
/* ---------------------------------------------------------------------------------------------- */

// ! Q4: Implement a function that returns the average value of numbers in an array.
function calculateAverage(numbers) {
  const avg = (
    numbers.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0) / numbers.length
  ).toFixed(5);
  console.log(avg);
}

calculateAverage([20, 30, 10, 5, 5, 30, 0]);

/* ---------------------------------------------------------------------------------------------- */
/*                                 Additional JavaScript Questions                                */
/* ---------------------------------------------------------------------------------------------- */
/* Write a function that accepts a String as an argument. The function should capitalize ONLY every
other letter in the string. The function should then return the converted String
*/

// * Think about edge cases first
function capEveryOtherLetter(str) {
  str = str.toLowerCase().split("");
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      res.push(str[i].toUpperCase());
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}

console.log(capEveryOtherLetter("heLlo"));
