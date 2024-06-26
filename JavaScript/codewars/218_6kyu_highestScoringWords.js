/* ---------------------------------------------------------------------------------------------- */
/*                                      Highest Scoring Word                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6kyu

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  let high_score = 0;
  let winner = "";

  x.split(" ").forEach((word) => {
    let curr_score = word
      .split("")
      .map((let) => alpha.indexOf(let))
      .reduce((acc, cv) => acc + cv, 0);

    if (curr_score > high_score) {
      high_score = curr_score;
      winner = word;
    }
  });

  return winner;
}

console.log(high("what time are we climbing up the volcano"));
