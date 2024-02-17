/* ---------------------------------------------------------------------------------------------- */
/*                                      Char Code Calculation                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given a string, turn each character into its ASCII character code and join them together to create a number 
- let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x) {
  let charArr = x.split("");
  let charString = charArr.map((val) => {
    return val.charCodeAt(0);
  });

  //   console.log(charString.split(""));
  let value1 = charString.join("");
  let value2 = charString.join("").replaceAll("7", "1");

  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < value1.length; i++) {
    arr1.push(Number(value1[i]));
  }
  for (let i = 0; i < value2.length; i++) {
    arr2.push(Number(value2[i]));
  }

  return arr1.reduce((acc, cv) => acc + cv, 0) - arr2.reduce((acc, cv) => acc + cv, 0);
}

console.log(calc("ABC"));
console.log(calc("abcdef"));
console.log(calc("aaaaaddddr"));
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
