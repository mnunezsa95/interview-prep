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

/* ---------------------------------------------------------------------------------------------- */
/*                   Question 11: How many stairs will Suzuki climb in 20 years?                  */
/* ---------------------------------------------------------------------------------------------- */
/* Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he 
climbs more stairs than others depending on the number of students he must train in the morning. He 
is curious how many stairs might be climbed over the next 20 years and has spent a year marking down 
his daily progress.
The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will 
have all data for the entire year so regardless of how it is logged the problem should be simple to solve. 

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 
9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 
6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
*/

function stairsIn20(s) {
  let stairsArry = [...s].flat().reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
  console.log(stairsArry * 20);
  return stairsArry * 20;
}

let sundayQ11 = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751,
    9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825,
  ],
  mondayQ11 = [
    9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719, 6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
    5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387,
  ],
  tuesdayQ11 = [
    8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292, 7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
    7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703,
  ],
  wednesdayQ11 = [
    6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710, 5182,
    9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493,
  ],
  thursdayQ11 = [
    6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197, 9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
    9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701,
  ],
  fridayQ11 = [
    5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
    9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127,
  ],
  saturdayQ11 = [
    5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
    5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085,
  ];
let stairsQ11 = [sundayQ11, mondayQ11, tuesdayQ11, wednesdayQ11, thursdayQ11, fridayQ11, saturdayQ11];
console.log(stairsIn20(stairsQ11));

/* ---------------------------------------------------------------------------------------------- */
/*                       Question 12: Calculate mean and concatenate string                       */
/* ---------------------------------------------------------------------------------------------- */
/* 
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. 
There will always be 10 integers and 10 characters. Create a single string with the characters and return it 
as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return:
[3.6, "udiwstagwo"]
*/

// lst will be ints and chars
function mean(lst) {
  let str = "";
  let num = [];
  let numCount = 0;
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < lst.length; i++) {
    if (!numbers.includes(lst[i])) {
      str += lst[i];
    } else {
      num.push(Number(lst[i]));
      numCount++;
    }
  }
  let res = num.reduce((acc, currVal) => acc + currVal, 0) / numCount;
  console.log((lst = [res, str]));
  return (lst = [res, str]);
}

mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]);

/* ---------------------------------------------------------------------------------------------- */
/*                             Question 13: Boolean logic from scratch                            */
/* ---------------------------------------------------------------------------------------------- */
/*
You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:
xor = Takes 2 values and returns true if, and only if, one of them is truthy.
or = Takes 2 values and returns true if either one of them is truthy.

When doing so, you cannot use the or operator: ||. 

Input
- Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings 
  and empty arrays]
- There will always be 2 values provided

Examples
- xor(true, true) should return false
- xor(false, true) should return true
- or(true, false) should return true  
- or(false, false) should return false
*/

const or = (a, b) => {
  if (!a && !b) return false;
  if (!a && b) return true;
  if (a && !b) return true;
  if (a && b) return true;
};

const xor = (a, b) => {
  if (!a && !b) return false;
  if (!a && b) return true;
  if (a && !b) return true;
  if (a && b) return false;
};

console.log(xor(true, true));
console.log(xor(false, true));
console.log(xor(true, false));
console.log(xor(true, ""));
console.log(xor("", true));
console.log(or(true, false));
console.log(or(false, false));

/* ---------------------------------------------------------------------------------------------- */
/*                                 Question 14: Returning Strings                                 */
/* ---------------------------------------------------------------------------------------------- */
/* 
Make a function that will return a greeting statement that uses an input; your program should return, 
"Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly] 
*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
console.log(greet("Ryan"));

/* ---------------------------------------------------------------------------------------------- */
/*                               Question 15: The wide-mouthed frog                               */
/* ---------------------------------------------------------------------------------------------- */
/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator 
who just LOVES to eat wide-mouthed frogs! When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which 
corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small 
otherwise return wide.
*/

function mouthSize(animal) {
  if (animal.toLowerCase() === "alligator") return "small";
  return "wide";
}

console.log(mouthSize("toucan"));
console.log(mouthSize("alligator"));

/* ---------------------------------------------------------------------------------------------- */
/*                                 Question 16: Pythagorean Triple                                */
/* ---------------------------------------------------------------------------------------------- */
/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean 
Triple using those 3 integers. A Pythagorean Triple consists of arranging 3 integers, such that:
a2 + b2 = c2
*/

function isPythagoreanTriple(integers) {
  let a = integers[0] ** 2;
  let b = integers[1] ** 2;
  let c = integers[2] ** 2;
  if (Array.isArray(integers) && (a + b === c || a + c === b || b + c === a)) return true;
  return false;
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 5, 9]));

/* ---------------------------------------------------------------------------------------------- */
/*                                      Question 17: Quicksum                                     */
/* ---------------------------------------------------------------------------------------------- */
/*
A checksum is an algorithm that scans a packet of data and returns a single number. The idea is that 
if the packet is changed, the checksum will also change, so checksums are often used for detecting 
transmission errors, validating document contents, and in many other situations where it is necessary
to detect undesirable changes in data.

For this problem, you will implement a checksum algorithm called Quicksum. A Quicksum packet allows only
uppercase letters and spaces. It always begins and ends with an uppercase letter.

Otherwise, spaces and uppercase letters can occur in any combination, including consecutive spaces. A 
Quicksum is the sum of the products of each character’s position in the packet times the character’s value. 
A space has a value of zero, while letters have a value equal to their position in the alphabet.

So, A = 1, B = 2, etc., through Z = 26. Here are example Quicksum calculations for the packets "ACM" and "A C M":

ACM
1 × 1 + 2 × 3 + 3 × 13 = 46 

A C M
1 x 1 + 3 x 3 + 5 * 13 = 75
*/

function quicksum(packet) {
  letters = " abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let res = [];

  // pull letters from input str & match to position in letters
  for (let i = 0; i < packet.length; i++) {
    if (letters.includes(packet[i])) {
      res.push((i + 1) * letters.indexOf(packet[i]));
    } else {
      // if NOT ONLY spaces & uppercase, return 0
      return 0;
    }
  }
  return res.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
}

console.log(quicksum("ACM"));
console.log(quicksum("MID CENTRAL"));
console.log(quicksum("BBC"));
console.log(quicksum("AAB"));
console.log(quicksum("234 234 WEF ASDF AAA 554211 ???? "));
console.log(quicksum(" "));

/* ---------------------------------------------------------------------------------------------- */
/*                                   Question 18: Well of Ideas                                   */
/* ---------------------------------------------------------------------------------------------- */
/* 
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there 
are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there 
are no good ideas, as is often the case, return 'Fail!'.
*/
function well(x) {
  let publishOrSeries = 0;
  let fail = 0;
  x.forEach((val, i, arr) => {
    if (val === "good") {
      publishOrSeries++;
    } else {
      fail++;
    }
  });
  if (publishOrSeries > 2) return "I smell a series!";
  if (publishOrSeries > 0 && publishOrSeries <= 2) return `Publish!`;
  else return "Fail!";
}

console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]));
console.log(well(["bad", "bad", "bad"]));

/* ---------------------------------------------------------------------------------------------- */
/*                                  Question 19: Binary to String                                 */
/* ---------------------------------------------------------------------------------------------- */
/*
Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, 
and it has something important to tell you. Write a function which will receive a long string of binary 
code and convert it to a string. Remember, in Python binary output starts with '0b'.

As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special 
symbols. The input to your function will always be one string of binary.
*/
function binaryToString(binary) {
  // split binary input (removing 0b)
  // map a string from CharCode(parseInt)
  // join the string, remove any weird symbols
  let binaryOutput = binary
    .split("0b")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("")
    .slice(1);
  console.log(binaryOutput);
  return binaryOutput;
}

console.log(binaryToString("0b10000110b11000010b1110100"));

/* ---------------------------------------------------------------------------------------------- */
/*                           Question 20: Sum of differences in an array                          */
/* ---------------------------------------------------------------------------------------------- */
/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
  let res = [];
  if (arr.length === 0 || arr.length === 1) return 0;
  let a = arr.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    res.push(a[i] - a[i + 1]);
  }
  res.pop();
  return res.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0);
}

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2

/* ---------------------------------------------------------------------------------------------- */
/*                                      Question 21: Welcome!                                     */
/* ---------------------------------------------------------------------------------------------- */
/* 
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API
that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. Write a 'welcome' function that takes a parameter 'language', with 
a type String, and returns a greeting - if you have it in your database. It should default to English if the language 
is not in the database, or in the event of an invalid input.
*/

function greetQ21(language) {
  const languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  if (languages[language.toLowerCase()]) {
    return languages[language.toLowerCase()];
  } else {
    return "Welcome";
  }
}

console.log(greetQ21("lithuanian"));
console.log(greetQ21("czech"));
console.log(greetQ21("polish"));

/* ---------------------------------------------------------------------------------------------- */
/*                            Question 22: Sort array by string length                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing 
the same strings, ordered from shortest to longest. For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to 
decide how to order multiple strings of the same length.
*/

function sortByLength(array) {
  if (array) {
    let sortedArray = array.sort((a, b) => {
      return a.length - b.length;
    });
    console.log(sortedArray);
    return sortedArray;
  } else {
    return `The input is not an array`;
  }
}

sortByLength(["", "Moderately", "Brains", "Pizza"]);

/* ---------------------------------------------------------------------------------------------- */
/*                                     Question 23: Power of 4                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is 
not an Integer (eg String, Array) method should return false as well.

powerOf4(1024) // returns true 4^4^4
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false
*/
function powerOf4(n) {
  return n === 1 || (n > 0 && Math.pow(4, Math.round(Math.log(n) / Math.log(4))) === n);
}

console.log(powerOf4(8));
console.log(powerOf4(16));
console.log(powerOf4(1));
console.log(powerOf4(4));
