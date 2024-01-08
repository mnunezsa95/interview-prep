/* ---------------------------------------------------------------------------------------------- */
/*                                       Pythagorean Triple                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean 
Triple using those 3 integers. A Pythagorean Triple consists of arranging 3 integers, such that:
a2 + b2 = c2
*/

function isPythagoreanTriple(integers) {
  let a = integers[0] ** 2;
  let b = integers[1] ** 2;
  let c = integers[2] ** 2;
  if (Array.isArray(integers) && (a + b === c || a + c === b || b + c === a)) return true;
  return false;
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 5, 9]));
