/* ---------------------------------------------------------------------------------------------- */
/*                                    Cat Years, Dog Years (2)                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

I have a cat and a dog which I got as kitten / puppy.
I forget when that was, but I do know their current ages as catYears and dogYears.
Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:
- Results are truncated whole numbers of "human" years

Cat Years
- 15 cat years for first year
- +9 cat years for second year
- +4 cat years for each year after that

Dog Years
- 15 dog years for first year
- +9 dog years for second year
- +5 dog years for each year after that
*/

var ownedCatAndDog = function (cy, dy) {
  let cat = cy < 15 ? 0 : cy < 24 ? 1 : 2 + Math.trunc((cy - 24) / 4);
  let dog = dy < 15 ? 0 : dy < 24 ? 1 : 2 + Math.trunc((dy - 24) / 5);
  return [cat, dog];
};

console.log(ownedCatAndDog(15, 15));
console.log(ownedCatAndDog(56, 64));
console.log(ownedCatAndDog(24, 24));
console.log(ownedCatAndDog(0, 7));
