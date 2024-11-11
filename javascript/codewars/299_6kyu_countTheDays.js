/* ---------------------------------------------------------------------------------------------- */
/*                                         Count the Days                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"

PS: This is my first kata. I hope you have fun^^
*/

function countDays(d) {
  let today = new Date();
  let dInMilliseconds = d.getTime();
  let todayInMilliseconds = today.getTime();
  let millsecondsToDay = 1000 * 60 * 60 * 24;

  if (Math.round(todayInMilliseconds / millsecondsToDay) === Math.round(dInMilliseconds / millsecondsToDay)) {
    return "Today is the day!";
  } else if (todayInMilliseconds > dInMilliseconds) {
    return "The day is in the past!";
  } else {
    const diffInTime = dInMilliseconds - todayInMilliseconds;
    const days = Math.round(diffInTime / 1000 / 60 / 60 / 24);
    return `${days} days`;
  }
}

const test1 = countDays(new Date("February 28, 2016"));
const test2 = countDays(new Date());
const test3 = countDays(new Date("February 28, 2025"));

console.log(test1, test2, test3);
