/* ---------------------------------------------------------------------------------------------- */
/*                                         Lottery Ticket                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function bingo(ticket, win) {
  // Variable to hold result
  let count = 0;

  // Iterate through each sub-array in ticket array
  ticket.forEach(([str, num]) => {
    // Split the string in each sub-array, and determine if atleast some of the strings' ASCII matche the number
    let = isMatch = str.split("").some((char) => char.charCodeAt() === num);

    // If yes, increment count
    if (isMatch) {
      count++;
    }
  });

  return count >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
);

console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
);

console.log(
  bingo(
    [
      ["MJR", 77],
      ["REKZ", 83],
      ["VLKA", 79],
      ["UGUD", 85],
      ["ATXMGD", 66],
      ["TMCOKA", 76],
      ["LU", 84],
      ["LHMCXTY", 68],
      ["RF", 90],
    ],
    3
  )
);

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function bingo2(ticket, win) {
  const mainArray = ticket.flat();
  let count = 0;

  let startValue = 0;
  for (let i = 2; i <= mainArray.length; i += 2) {
    let currentSet = mainArray.slice(startValue, i);

    [...new Set(currentSet[0].split(""))].some((char) => {
      char.charCodeAt() === currentSet[1] ? count++ : (count += 0);
    });

    startValue += 2;
  }

  return count >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo2(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
);

console.log(
  bingo2(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
);

console.log(
  bingo2(
    [
      ["MJR", 77],
      ["REKZ", 83],
      ["VLKA", 79],
      ["UGUD", 85],
      ["ATXMGD", 66],
      ["TMCOKA", 76],
      ["LU", 84],
      ["LHMCXTY", 68],
      ["RF", 90],
    ],
    3
  )
);
