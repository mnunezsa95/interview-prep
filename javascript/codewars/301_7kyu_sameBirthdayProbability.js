/* ---------------------------------------------------------------------------------------------- */
/*                                    Same Birthday Probability                                   */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
*/

function calculateProbability(n) {
  if (n <= 1) return "0.00";
  if (n > 365) return 1;

  let noMatchProbability = 1;
  for (let i = 0; i < n; i++) {
    noMatchProbability *= (365 - i) / 365;
  }

  let matchProbability = 1 - noMatchProbability;
  return matchProbability.toFixed(2);
}

console.log(calculateProbability(1000));
console.log(calculateProbability(5));
