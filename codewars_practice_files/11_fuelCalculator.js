/* ---------------------------------------------------------------------------------------------- */
/*                                   Fuel Calculator: Total Cost                                  */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 8 Kyu

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount 
of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total 
discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. 
Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents
*/

/* ---------------------------------------------------------------------------------------------- */
/*                                           Solution 1                                           */
/* ---------------------------------------------------------------------------------------------- */
function fuelPrice(litres, pricePerLitre) {
  let discount = 0;
  if (litres >= 2) discount = 0.05;
  if (litres >= 4) discount = 0.1;
  if (litres >= 6) discount = 0.15;
  if (litres >= 8) discount = 0.2;
  if (litres >= 10) discount = 0.25;
  return +(litres * pricePerLitre - discount * litres).toFixed(2);
}

console.log(fuelPrice(5, 1.23));
console.log(fuelPrice(8, 2.5));
console.log(fuelPrice(5, 1.231));
console.log(fuelPrice(5, 5.6));

/* ---------------------------------------------------------------------------------------------- */
/*                                           Solution 2                                           */
/* ---------------------------------------------------------------------------------------------- */
function fuelPrice2(litres, pricePerLitre) {
  for (let i = 2; i <= 10; i += 2) {
    if (litres >= i) {
      pricePerLitre -= 0.05;
    }
  }
  let total = (pricePerLitre * litres * 100) / 100;
  return +total.toFixed(2);
}

console.log(fuelPrice2(5, 1.23));
console.log(fuelPrice2(8, 2.5));
console.log(fuelPrice2(5, 1.231));
console.log(fuelPrice2(5, 5.6));
