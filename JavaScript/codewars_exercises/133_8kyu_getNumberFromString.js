/* ---------------------------------------------------------------------------------------------- */
/*                                     Get Number From String                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Write a function which removes from string all non-digit characters and parse the remaining to 
number. E.g: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return +s
    .split("")
    .filter((str) => {
      if (str in numbers) return str;
    })
    .join("");
}

console.log(getNumberFromString("1"));
console.log(getNumberFromString("123"));
console.log(getNumberFromString("this number is: 9"));
