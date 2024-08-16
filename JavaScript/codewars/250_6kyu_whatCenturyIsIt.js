/* ---------------------------------------------------------------------------------------------- */
/*                                       What Century is it?                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year) {
  let century = Math.ceil(+year / 100);

  const lastTwoDigits = century % 100;
  const lastDigit = lastTwoDigits % 10;

  let suffix = "th";
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = "th";
  } else if (lastDigit === 1) {
    suffix = "st";
  } else if (lastDigit === 2) {
    suffix = "nd";
  } else if (lastDigit === 3) {
    suffix = "rd";
  }

  return century + suffix;
}

console.log(whatCentury("2000"));
console.log(whatCentury("2011"));
console.log(whatCentury("1995"));
console.log(whatCentury("1234"));
console.log(whatCentury("2234"));
