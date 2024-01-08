/* ---------------------------------------------------------------------------------------------- */
/*                                      Question 29: Multiply                                     */
/* ---------------------------------------------------------------------------------------------- */
/* 
This code does not execute properly. Try to figure out why:
function multiply(a, b){
  a * b
}
*/

// missing a return statement
function multiplyDebug(a, b) {
  return a * b;
}

console.log(multiplyDebug(3, 3));

/* ---------------------------------------------------------------------------------------------- */
/*                              Question 30: Basic data types--object                             */
/* ---------------------------------------------------------------------------------------------- */

/*
In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or 
var obj={}

Give you a function animal, accept 1 parameter:obj like this: {name:"dog",legs:4,color:"white"}
and return a string like this: "This white dog has 4 legs."
*/

function animal(obj) {
  let object = new Object(obj);
  return `This ${object.color} ${object.name} has ${object.legs} legs.`;
}

animal({ name: "dog", legs: 4, color: "white" });

/* ---------------------------------------------------------------------------------------------- */
/*                                  Question 31: Ensure Question                                  */
/* ---------------------------------------------------------------------------------------------- */
/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, 
unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)
"Yes" --> "Yes?" 
"No?" --> "No?"
*/

function ensureQuestion(s) {
  console.log(s.includes("?"));
  if (!s.includes("?")) {
    return `${s}?`;
  }
  return s;
}

console.log(ensureQuestion(""));
console.log(ensureQuestion("No"));
console.log(ensureQuestion("No?"));

/* ---------------------------------------------------------------------------------------------- */
/*                                Question 32: Freudian translator                                */
/* ---------------------------------------------------------------------------------------------- */
/*
You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas 
Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

In the society he lived in, people - women in particular - had to repress their sexual needs and desires. 
This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, 
and so he digged to the root of their desires. This led to some of the most important psychoanalytic 
theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related 
to, and explained by sex.

In this kata, the function will take a string as its argument, and return a string with every word replaced 
by the explanation to everything, according to Freud. Note that an empty string, or no arguments, 
should return an empty string.
*/

function toFreud(string) {
  if (!string) return "";
  return string
    .split(" ")
    .map((word) => "sex")
    .join(" ");
}

console.log(toFreud("This is a test"));

/* ---------------------------------------------------------------------------------------------- */
/*                                    Question 33: Age in days                                    */
/* ---------------------------------------------------------------------------------------------- */
/*
Did you ever want to know how many days old are you? Complete the function which returns your age in days. 
The birthday is given in the following order: year, month, day.For example if today is 30 November 2015 
then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!
*/
function ageInDays(name, year, month, day) {
  let todaysDate = new Date();
  let birthDate = new Date(year, month - 1, day);
  let millisecondsPerDay = 1000 * 60 * 60 * 24;
  return `${name} is ${Math.floor((todaysDate - birthDate) / millisecondsPerDay)} days old`;
}

console.log(ageInDays("Marlon", 1995, 10, 31));
console.log(ageInDays("Mauro", 2006, 12, 21));
console.log(ageInDays("Marvin", 2001, 1, 28));

/* ---------------------------------------------------------------------------------------------- */
/*                                Question 34: Generate user links                                */
/* ---------------------------------------------------------------------------------------------- */
/* 
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/

function generateLink(user) {
  let baseURL = "http://www.codewars.com/users/";
  return `${baseURL}${encodeURIComponent(user)}`;
}

console.log(generateLink("matt c"));

/* ---------------------------------------------------------------------------------------------- */
/*                                 Question 35: Dollars and Cents                                 */
/* ---------------------------------------------------------------------------------------------- */
/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help 
move things along, you have volunteered to create a function that will take a float and return the amount 
formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function 
although you will need to account for adding trailing zeros if they are missing (though you won't have to
worry about a dangling period).

3 needs to become $3.00
3.1 needs to become $3.10
*/

function formatMoney(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

console.log(formatMoney("3.1"));

// ! ---------------------------------------------------------------------------------------------- */
// !                   Question 36: Remove all exclamation marks from end of words                  */
// ! ---------------------------------------------------------------------------------------------- */

/*
Remove all exclamation marks from the end of words. Words are separated by a single space. There are 
no exclamation marks within a word.

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

function removeQ2(string) {
  return string
    .split(" ")
    .map((v) => v.replace(/!+$/gi, ""))
    .join(" ");
}

// console.log(removeQ2("hi!"));
console.log(removeQ2("!!!Hi !!hi!!! !hi"));

/* ---------------------------------------------------------------------------------------------- */
/*                                Question 37: Duplicate sandwhich                                */
/* ---------------------------------------------------------------------------------------------- */

/*
In this kata you will be given a list consisting of unique elements except for one thing that appears 
twice.

Your task is to output a list of everything inbetween both occurrences of this element in the list.

[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"

Notes:
- All elements will be the same datatype.
- All used elements will be primitive.
*/

function duplicateSandwich(a) {
  const appeared = [];
  for (let i = 0; i < a.length; i++) {
    const item = a[i];
    if (!appeared.includes(item)) {
      appeared.push(item);
    } else {
      const startIndex = a.indexOf(item) + 1;
      const endIndex = i;
      return a.slice(startIndex, endIndex);
    }
  }
  // If no duplicate is found, return an empty array or handle it as needed
  return [];
}

console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]));
console.log(duplicateSandwich("example"));

/* ---------------------------------------------------------------------------------------------- */
/*                                   Question 38: Shortest Word                                   */
/* ---------------------------------------------------------------------------------------------- */
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const newS = s.split(" ");
  let shortest = newS[0].length;
  for (let i = 0; i < newS.length; i++) {
    if (newS[i].length < shortest) {
      shortest = newS[i].length;
    }
  }
  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

/* ---------------------------------------------------------------------------------------------- */
/*                         Question 39: Multiply all elements in an array                         */
/* ---------------------------------------------------------------------------------------------- */

/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of 
integers as an argument. This function must return another function, which takes a single integer as 
an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.
*/

// * create a function that takes arr as an arguement
function multiplyAll(arr) {
  // * declare a function that takes an arguement
  function multiply(int) {
    // * map each element in the array and multiply each element by the integer
    return arr.map((item) => {
      return item * int;
    });
  }
  return multiply;
}

console.log(multiplyAll([1, 2, 3])(2));

/* ---------------------------------------------------------------------------------------------- */
/*              Question 40: Count the number of exclamation marks and question marks             */
/* ---------------------------------------------------------------------------------------------- */

/*
Count the number of exclamation marks and question marks, return the product.

""          --->   0
"!"         --->   0
"!ab? ?"    --->   2
"!!"        --->   0
"!??"       --->   2
"!???"      --->   3
"!!!??"     --->   6
"!!!???"    --->   9
"!???!!"    --->   9
"!????!!!?" --->  20
*/

function product(string) {
  let questionMark = 0;
  let exclamationMark = 0;

  if (!string) return 0;
  string.split("").forEach((item) => {
    if (item === "!") {
      exclamationMark += 1;
    } else if (item === "?") {
      questionMark += 1;
    }
  });
  return questionMark * exclamationMark;
}

console.log(product("!????!!!?"));
console.log(product(""));

/* ---------------------------------------------------------------------------------------------- */
/*                                 Question 41: Easy Time Convert                                 */
/* ---------------------------------------------------------------------------------------------- */
/*
This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder 
after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

Example
If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.
*/

function timeConvert(num) {
  if (num === 0 || num < 0) return "00:00";
  let hours = Math.floor(num / 60);
  let mins = Math.floor(num % 60);

  if (hours < 10 && mins < 10) {
    return `0${hours}:0${mins}`;
  } else if (hours < 10) {
    return `0${hours}:${mins}`;
  } else if (mins < 10) {
    return `${hours}:0${mins}`;
  } else {
    return `${hours}:${mins}`;
  }
}

console.log(timeConvert(0));
console.log(timeConvert(-6));
console.log(timeConvert(75));
console.log(timeConvert(970));
