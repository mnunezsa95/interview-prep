/* ---------------------------------------------------------------------------------------------- */
/*                                          Fruit Machine                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
- You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

Rules
1. There are always exactly three reels
2. Each reel has 10 different items.
3. The three reel inputs may be different.
4. The spin array represents the index of where the reels finish.
5. The three spin inputs may be different
6. Three of the same is worth more than two of the same
7. Two of the same plus one "Wild" is double the score.
8. No matching items returns 0.


Returns
- Return an integer of the score.

- Example
-- Initialise
--- reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
--- reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
--- reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
--- spin = [5,5,5];
--- result = fruit([reel1,reel2,reel3],spin);

-- Scoring
--- reel1[5] == "Cherry"
--- reel2[5] == "Cherry"
--- reel3[5] == "Cherry"
--- Cherry + Cherry + Cherry == 50

-- Return
--- result == 50
*/

function fruit(reels, spins) {
  let score = {
    Wild: 1,
    Star: 0.9,
    Bell: 0.8,
    Shell: 0.7,
    Seven: 0.6,
    Cherry: 0.5,
    Bar: 0.4,
    King: 0.3,
    Queen: 0.2,
    Jack: 0.1,
  };

  let slotResult = [];
  for (let i = 0; i < reels.length; i++) {
    const spin = spins[i];
    const card = reels[i][spin];
    slotResult.push(card);
  }

  let result;
  let resultScores = [];
  slotResult.forEach((card) => {
    resultScores.push(score[card]);
  });

  if (resultScores[0] === resultScores[1] && resultScores[0] === resultScores[2]) {
    result = resultScores[0] * 100;
  } else if (resultScores[0] === resultScores[1] || resultScores[0] === resultScores[2]) {
    result = resultScores[0] * 10;
  } else if (resultScores[1] === resultScores[2]) {
    result = resultScores[1] * 10;
  }

  return result === 100 || result === 10 ? result : result === undefined ? 0 : slotResult.includes("Wild") ? result * 2 : result;
}

let reel1 = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"];
let reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
let reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
let spin = [5, 4, 3];
console.log(fruit([reel1, reel2, reel3], spin));
