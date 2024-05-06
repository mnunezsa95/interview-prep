/* ---------------------------------------------------------------------------------------------- */
/*                               Generate an Array of Unique Strings                              */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Generate an array of unique strings.

There are three conditions:

1- The array must contain size unique strings.

Minimum possible array length is 4
Maximum possible array length is 500
2- valid_pct is a number from 0.0 to 1.0(0.25 = 25%, 0.4 = 40%). The number of valid strings must 
be size * valid_pct floored.

A valid string is alphanumerical(case insensitive) with underscores allowed.
An invalid string contains any other character(Ex: \`'"~!@#$%^&*()[]{}:;<>?|\/)
3- str_size = [str_min_length, str_max_length]. Each string's length must be inside this range(inclusive).

Minimum possible str_length is 2
Maximum possible str_length is 32
*/

function uniqStrings(size, validPct, strSize) {
  const invalidChars = "`'\"~!@#$%^&*()[]{}:;<>?|\\/";
  let validChars = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map((letter) => letter.toLowerCase()));
  })();

  validChars = validChars.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

  const [strMinLength, strMaxLength] = strSize;
  const validCount = Math.floor(size * validPct);
  const invalidCount = size - validCount;

  const validStrings = new Set();
  const invalidStrings = new Set();

  function generateRandomString(length, valid) {
    let characters = valid ? validChars : invalidChars;
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
  }

  while (validStrings.size < validCount) {
    const length = Math.floor(Math.random() * (strMaxLength - strMinLength + 1)) + strMinLength;
    const newString = generateRandomString(length, true).toLowerCase();
    validStrings.add(newString);
  }

  while (invalidStrings.size < invalidCount) {
    const length = Math.floor(Math.random() * (strMaxLength - strMinLength + 1)) + strMinLength;
    const newString = generateRandomString(length, false);
    invalidStrings.add(newString);
  }

  const result = [...validStrings, ...invalidStrings];
  return result.slice(0, size);
}

console.log(uniqStrings(4, 0.25, [3, 5]));
