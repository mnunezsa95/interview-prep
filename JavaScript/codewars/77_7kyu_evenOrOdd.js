/* ---------------------------------------------------------------------------------------------- */
/*                                 Even or Odd - Which is Greater?                                */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficultly: 7 kyu 

Given a string of digits confirm whether the sum of all the individual even digits are greater than the 
sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let odd = str
    .split("")
    .filter((o) => o % 2 != 0)
    .reduce((a, b) => +a + +b);
  let even = str
    .split("")
    .filter((e) => e % 2 == 0)
    .reduce((a, b) => +a + +b);
  if (odd > even) return "Odd is greater than Even";
  else if (even > odd) return "Even is greater than Odd";
  else return "Even and Odd are the same";
}

console.log(evenOrOdd("12"));
console.log(evenOrOdd("123"));
