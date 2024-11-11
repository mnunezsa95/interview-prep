/* ---------------------------------------------------------------------------------------------- */
/*            Create 10x10 array and randomly fill each cell with "A", "B", "C", or "D"           */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu 

Create 10x10 array and randomly fill each cell with 'A', 'B', 'C' or 'D' and ensure that each row contain at least one occurance of each letter. 

Example: [ ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'B', 'B', 'C', 'B', 'D', 'A', 'A', 'C', 'D'], ['A', 'A', 'A', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['C', 'A', 'B', 'C', 'B', 'C', 'D', 'B', 'C', 'A'], ['A', 'A', 'B', 'D', 'B', 'B', 'A', 'C', 'B', 'A'], ['B', 'A', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'B'], ['A', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'C', 'C'], ['B', 'A', 'B', 'C', 'B', 'D', 'B', 'C', 'C', 'D'], ['D', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ]
*/

function array10() {
  let n = 10;
  let res = [];
  const options = ["A", "B", "C", "D"];

  const getRandomLetter = () => {
    let random = Math.floor(Math.random() * 4);
    return options[random];
  };

  while (n > 0) {
    let current = [...options]; // Create an array with one of each letter
    while (current.length < 10) {
      current.push(getRandomLetter()); // Fill the rest of the array with random letters
    }
    res.push(current);
    n--;
  }
  return res;
}

console.log(array10());
