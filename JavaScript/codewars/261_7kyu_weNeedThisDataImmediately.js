/* ---------------------------------------------------------------------------------------------- */
/*                                 We need this data immediately!                                 */
/* ---------------------------------------------------------------------------------------------- */

/**

Difficulty: 7 kyu

So we've had nifty-well-working javascript function

returnSomeData()
that was returning useful data, but recently it stopped work.

There is some strange error. Can you find it out, what has changed?
*/

var time = Date.now();
var data = (function returnSomeData(time) {
  return {
    name: "__B00013",
    timeStamp: time || "unknown",
    type: "raw",
    var1: 0x041451,
    var2: 0x00,
    var3: 0x00040,
  };
})();

data;
