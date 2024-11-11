/* ---------------------------------------------------------------------------------------------- */
/*                                  Write Number in Expanded Form                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

You will be given a number and you will need to return it as a string in Expanded Form. For example:

- expandedForm(12); // Should return '10 + 2'
- expandedForm(42); // Should return '40 + 2'
- expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let numOfZeros = num.toString().length - 1;
  let startingNumber = Math.pow(10, numOfZeros);
  let index = 0;
  let res = [];
  while (startingNumber >= 1) {
    let char = num.toString()[index];
    res.push(char * startingNumber);
    startingNumber /= 10;
    index++;
  }
  return res.filter((num) => num !== 0).join(" + ");
}

console.log(expandedForm(4265));
console.log(expandedForm(70304));
