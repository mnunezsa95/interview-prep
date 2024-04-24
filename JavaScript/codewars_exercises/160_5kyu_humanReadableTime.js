/* ---------------------------------------------------------------------------------------------- */
/*                                       Human Readable Time                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(time) {
  let hours = String(Math.floor(time / 3600)).padStart(2, 0);
  let minutes = String(Math.floor((time % 3600) / 60)).padStart(2, 0);
  let seconds = String(Math.floor(time % 60)).padStart(2, 0);
  return `${hours}:${minutes}:${seconds}`;
}

console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(86399)); // '23:59:59'
