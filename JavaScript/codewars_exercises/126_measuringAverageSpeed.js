/* ---------------------------------------------------------------------------------------------- */
/*                                     Measuring Average Speed                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Speed is a crucial measure of success for any aspiring warrior, so let's write a function to 
calculate it. 

Average Speed is calculated by dividing distance by time. Given two strings as input 
the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the 
second indicating the time it takes them to travel (in seconds or minutes), return a string 
indicating their speed in miles per hour rounded to the nearest integer.

For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

So for example given the input values of distance & time "3km" and "5min" we should return a 
speed value of "22mph".
*/

function calculateSpeed(distance, time) {
  d = parseInt(distance);
  if (distance.endsWith("km")) d *= 1000;

  t = parseInt(time);
  if (time.endsWith("min")) t *= 60;

  return ((d / t) * 2.23684).toFixed(0) + "mph";
}

console.log(calculateSpeed("100m", "10s"));
console.log(calculateSpeed("3km", "5min"));
console.log(calculateSpeed("35m", "293s"));
console.log(calculateSpeed("573km", "39min"));
console.log(calculateSpeed("573km", "39s"));
