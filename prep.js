// ! Q1: Write a JavaScript function to calculate the sum of two numbers.
// * create a function that takes in two numbers as inputs and returns the sum

const addTwoNumbers = (a, b) => {
  return a + b;
};

const value1 = addTwoNumbers(10, 15);
console.log(value1);

// =======================

// ! Q2: Write a JavaScript program to find the maximum number in an array.
// * create a fn that takes an array as an input; Math.max() function will find largest number

const findMaxNumber = (arr) => {
  return Math.max(...arr); // the spread operator is used to unpack the array
};

const value2 = findMaxNumber([1, 2, 3, 4, 5]);
console.log(value2);

// =======================

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

// =======================

// ! Q4: Write a JavaScript program to reverse a given string
// * same process as above

function reverseString(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
}
const value4 = reverseString("hello");
console.log(value4);

// =======================

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

// =======================

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
