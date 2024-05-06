/* ---------------------------------------------------------------------------------------------- */
/*                                           Age in days                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

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
