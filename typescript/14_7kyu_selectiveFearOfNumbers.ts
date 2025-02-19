/* ---------------------------------------------------------------------------------------------- */
/*                                    Selective Fear of Numbers                                   */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12
Tuesday --> numbers greater than 95
Wednesday --> 34
Thursday --> 0
Friday --> numbers divisible by 2
Saturday --> 56
Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/

export function amIAfraid(day: string, num: number): boolean {
  let isAfraid: boolean = false;
  if (
    (day === "Monday" && num == 12) ||
    (day === "Tuesday" && num > 95) ||
    (day === "Wednesday" && num == 34) ||
    (day === "Thursday" && num == 0) ||
    (day === "Friday" && num % 2 == 0) ||
    (day === "Saturday" && num == 56) ||
    (day === "Sunday" && 666 == Math.abs(num))
  ) {
    isAfraid = true;
  } else {
    isAfraid = false;
  }
  return isAfraid;
}

console.log(amIAfraid("Tuesday", 965));
console.log(amIAfraid("Friday", 2));
