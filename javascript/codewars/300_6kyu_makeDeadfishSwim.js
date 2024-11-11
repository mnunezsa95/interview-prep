/* ---------------------------------------------------------------------------------------------- */
/*                                       Make Deadfish Swim                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficutly: 6 kyu 

Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
- Program "iiisdoso" should return numbers [8, 64].
- Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

function parse(data) {
  let result = [];
  let value = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      value++;
    } else if (data[i] === "d") {
      value--;
    } else if (data[i] === "o") {
      result.push(value);
    } else if (data[i] === "s") {
      value = value ** 2;
    } else {
      value += 0;
      continue;
    }
  }
  return result;
}

console.log(parse("iiisxxxdoso"));
console.log(parse("iiisdosodddddiso"));
