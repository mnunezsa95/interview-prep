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
