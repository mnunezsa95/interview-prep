/* ---------------------------------------------------------------------------------------------- */
/*                                         Time Conversion                                        */
/* ---------------------------------------------------------------------------------------------- */

/* Given a time in -hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on a 
12-hour clock is 00:00:00 on a 24-hour clock. - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
*/

function timeConversion(s) {
  // get unaffected part of str
  let restOfStr = s.slice(2, -2);
  // split the string
  let splitStr = s.split(":");

  if (s.includes("AM")) {
    return splitStr[0] === "12" ? "00" + restOfStr : splitStr[0] + restOfStr;
  } else if (s.includes("PM")) {
    return splitStr[0] === "12" ? "12" + restOfStr : Number(splitStr[0]) + 12 + restOfStr;
  }
}

const value3 = timeConversion("12:05:45AM");
console.log(value3);
