/* ---------------------------------------------------------------------------------------------- */
/*                                If you can't beat 'em, join 'em!                                */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 Kyu

Description: Inside of the city there are many gangs, each with differing numbers of members wielding 
different weapons and possessing different strength levels. The gangs do not really want to fight one another, 
and so the "If you can't beat 'em, join 'em" rule applies. The gangs start combining with the most powerful 
gangs being joined by the weaker gangs until there is one gang left.

Challenge:

You are given an array of arrays. Inside of the interior arrays are numbers. Join the arrays together by 
descending total array value ending up with one final array.

Examples:
cantBeatSoJoin([[1,2], [3,4], [5,6], [7,8], [9]]) -> [7, 8, 5, 6, 9, 3, 4, 1, 2]
- In the example above, [7, 8] are the first in the array because they have the highest value
- They are followed by [5, 6]
- That is followed by [9] which comes before [3, 4] because the list of [9] is greater
- It ends with [1, 2] which has the least amount of value

More Examples:
cantBeatSoJoin([[5, 1],[9, 14],[17, 23],[4, 1],[0, 1]]) -> [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]
cantBeatSoJoin([[13, 37], [43, 17], [2,3], [45,64], [1,9]]) -> [45, 64, 43, 17, 13, 37, 1, 9, 2, 3]
cantBeatSoJoin([[], [], [], []]) -> []
cantBeatSoJoin([[], [], [0], []]) -> [0]
cantBeatSoJoin([[1,0,1,0,1,0], [0,1,0,0,1,0,0,1], [0], []]) -> [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]

In the case of more than one array sharing the same sum, place them in the same order that they were in the argument:
*/

function cantBeatSoJoin(numbers) {
  const sum = (arr) => arr.reduce((a, b) => a + b, 0); // function to find the sum of each sub-array
  return numbers
    .slice() // create a slice of each array
    .sort((a, b) => sum(b) - sum(a)) // sort array if the one after is larger than one before
    .flatMap((x) => x); // flaten the array to create a large array
}

console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));
console.log(
  cantBeatSoJoin([
    [5, 1],
    [9, 14],
    [17, 23],
    [4, 1],
    [0, 1],
  ])
);
console.log(
  cantBeatSoJoin([
    [13, 37],
    [43, 17],
    [2, 3],
    [45, 64],
    [1, 9],
  ])
);
console.log(cantBeatSoJoin([[52, 11, 33, 222], [582, 192, 442, 512, 41], [23912], [2314], [2491, 2412, 84828]]));
console.log(cantBeatSoJoin([[], [], [], []]));
console.log(cantBeatSoJoin([[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]));
