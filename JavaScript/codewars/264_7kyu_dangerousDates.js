/* ---------------------------------------------------------------------------------------------- */
/*                                         Dangerous Dates                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Fix this function so that it correctly outputs a list of the next five days (starting after the input date). Each date should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way.
*/

var nextFiveDays = function (date) {
  let nextDay = new Date(date);
  dates = [];

  for (var i = 1; i <= 5; i++) {
    let newDay = nextDay.getDate() + 1;
    nextDay.setDate(newDay);
    let day = nextDay.getDate(),
      month = nextDay.getMonth() + 1,
      year = nextDay.getFullYear();
    let dateStr = month + "/" + day + "/" + year;
    dates.push(dateStr);
  }

  return dates.join(", ");
};

console.log(nextFiveDays("December 17, 1995 03:24:00"));
