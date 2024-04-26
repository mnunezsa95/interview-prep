/* ---------------------------------------------------------------------------------------------- */
/*                                  Formatting a Number as Price                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
var numberToPrice = function (number) {
  if (typeof number !== "number") return "NaN";
  let splitNum = String(Math.abs(number)).split(".");
  let decimalFormatted,
    formattedInteger = "";
  splitNum.length > 1 ? (decimalFormatted = splitNum[1].slice(0, 2).padEnd(2, "0")) : (decimalFormatted = "00");

  for (let i = 0; i < splitNum[0].length; i++) {
    if (i > 0 && i % 3 === splitNum[0].length % 3) {
      formattedInteger += ",";
    }
    formattedInteger += splitNum[0][i];
  }

  let res = formattedInteger + "." + decimalFormatted;

  return number > 0 ? res : "-" + res;
};

console.log(numberToPrice(13253.5123));
console.log(numberToPrice(-5));
console.log(numberToPrice("@"));
console.log(numberToPrice(-200000));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
var numberToPrice2 = function (number) {
  if (typeof number !== "number") return "NaN";
  [intNum, decNum] = String(number).split(".");
  number = Number(intNum + "." + decNum.slice(0, 2));
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(number).replaceAll("$", "");
};

console.log(numberToPrice2(1500.129));
console.log(numberToPrice2(-13253.5123));
console.log(numberToPrice2("@"));
console.log(numberToPrice(-5));
console.log(numberToPrice());
