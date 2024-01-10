/* ---------------------------------------------------------------------------------------------- */
/*                                           Plus Minus                                           */
/* ---------------------------------------------------------------------------------------------- */

/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with places after the decimal. 
*/

function plusMinus(arr) {
  let len = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;
  // loop through array, determine if number is pos, neg, or 0
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else if (arr[i] === 0) {
      zero++;
    }
  }
  console.log(`${(pos / len).toFixed(6)} \n ${(neg / len).toFixed(6)} \n ${(zero / len).toFixed(6)}`);
}

const value1 = plusMinus([1, 1, 0, -1, -1]);
console.log(value1);
