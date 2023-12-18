/* ---------------------------------------------------------------------------------------------- */
/*                                   Question 1: Check Same Case                                  */
/* ---------------------------------------------------------------------------------------------- */

/* Write a function that will check if two given characters are the same case.
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercase = alphabet.split("");
  const uppercase = alphabet.toUpperCase().split("");

  if ((lowercase.includes(a) && lowercase.includes(b)) || (uppercase.includes(a) && uppercase.includes(b))) {
    return 1;
  } else if ((lowercase.includes(a) && uppercase.includes(b)) || (lowercase.includes(b) && uppercase.includes(a))) {
    return 0;
  } else {
    return -1;
  }
}

sameCase("a", "g"); // 1
sameCase("0", "?"); // -1
sameCase("A", "b"); // 0

/* ---------------------------------------------------------------------------------------------- */
/*                                 Question 2: Multiply the number                                */
/* ---------------------------------------------------------------------------------------------- */
/* Jack really likes his number five: the trick here is that you have to multiply each number by 5 
raised to the number of digits of each numbers, so, for example:
- multiply(3)==15 // 3 * 5¹
- multiply(10)==250 // 10 * 5²
- multiply(200)==25000 // 200 * 5³
- multiply(0)==0 // 0 * 5¹
- multiply(-3)==-15 // -3 * 5¹
*/

function multiply(number) {
  let length = String(number).split("").length;
  if (Math.sign(number) === -1) {
    return number * 5 ** (length - 1);
  }
  return number * 5 ** length;
}

console.log(multiply(-3));
console.log(multiply(10));

/* ---------------------------------------------------------------------------------------------- */
/*                                     Question 3: USD => CNY                                     */
/* ---------------------------------------------------------------------------------------------- */
/* Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of 
USD as an integer, and the output should be a string that states the amount of Yuan followed by 
'Chinese Yuan' */

function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}

console.log(usdcny(15));

/* ---------------------------------------------------------------------------------------------- */
/*                                Question 4: Hello, Name or World                                */
/* ---------------------------------------------------------------------------------------------- */
/* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is 
not given (or passed as an empty String). Assuming that name is a String and it checks for user typos 
to return a name with a first capital letter (Xxxx).

Examples:
- With `name` = "john"  => return "Hello, John!"
- With `name` = "aliCE" => return "Hello, Alice!"
- With `name` not given or `name` = ""   => return "Hello, World!"
*/

function hello(name) {
  name = name?.toLowerCase();
  if (name === "" || name === undefined) {
    return "Hello, World!";
  } else {
    return "Hello, " + name.slice(0, 1).toUpperCase() + name.slice(1) + "!";
  }
}

console.log(hello());

/* ---------------------------------------------------------------------------------------------- */
/*                                Question 5: Calculate Meal Total                                */
/* ---------------------------------------------------------------------------------------------- */
/* 
Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.
You will be given the subtotal, the tax as a percentage and the tip as a percentage. 
Please round your result to two decimal places.
*/

function calculate_total(subtotal, tax, tip) {
  return Number((subtotal + (subtotal * tax) / 100 + (subtotal * tip) / 100).toFixed(2));
}

calculate_total((36.97, 7, 15), 45.1);

/* ---------------------------------------------------------------------------------------------- */
/*                          Question 6: Merge two sorted arrays into one                          */
/* ---------------------------------------------------------------------------------------------- */
/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them 
into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 
are the original sorted arrays. You don't need to worry about validation, since arr1 and arr2 must be arrays
with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
Remove duplicated in the returned result.
*/
function mergeArrays(arr1, arr2) {
  if (arr1 && arr2) {
    return arr1
      .concat(arr2)
      .sort((a, b) => a - b)
      .filter((value, index, array) => {
        return array.indexOf(value) === index;
      });
  } else {
    return [];
  }
}

mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
mergeArrays([1, 3, 5, 7, 9, 11, 12], []);
mergeArrays([], []);

/* ---------------------------------------------------------------------------------------------- */
/*                  Question 7: Remove an exclamation mark from the end of string                 */
/* ---------------------------------------------------------------------------------------------- */
/* 
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input 
data is always a string, no need to verify it.
*/
function remove(string) {
  if (typeof string !== "string") return "";
  if (string[string.length - 1] === "!") {
    return string
      .split("")
      .slice(0, string.length - 1)
      .join("");
  }
  return string;
}

console.log(remove("Hi!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));

/* ---------------------------------------------------------------------------------------------- */
/*                              Question 8: Take the first n elements                             */
/* ---------------------------------------------------------------------------------------------- */
function take(arr, n) {
  if (Array.isArray(arr)) {
    return arr.slice(0, n);
  }
}

console.log(take([0, 1, 2, 3, 4], 3));

/* ---------------------------------------------------------------------------------------------- */
/*                             Question 9: Does my list include this?                             */
/* ---------------------------------------------------------------------------------------------- */
function includeThis(arr, item) {
  if (Array.isArray(arr)) {
    return arr.includes(item);
  }
  return false;
}

includeThis([1, 2, 3, 4], 3);

/* ---------------------------------------------------------------------------------------------- */
/*                            Question 10: Building strings from a hash                           */
/* ---------------------------------------------------------------------------------------------- */
/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in 
and generates a human readable string from its key/value pairs. The format should be "KEY = VALUE". 
Each key/value pair should be separated by a comma except for the last pair.

Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/
function solution(pairs) {
  let arr = [];
  for (let [key, value] of Object.entries(pairs)) {
    arr.push(key + " = " + value);
  }
  return arr.join(",");
}

solution({ a: 1, b: "2", c: 4 });
