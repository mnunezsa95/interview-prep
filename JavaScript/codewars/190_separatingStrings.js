/* ---------------------------------------------------------------------------------------------- */
/*                                       Separating Strings                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Create a function that takes a string and separates it into a sequence of letters.

The array will be formatted as so:
[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]

The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

Examples:

sepStr("Just Live Life Man")
=> [['J','L','L','M'],
=> ['u','i','i','a'],
=> ['s','v','f','n'],
=> ['t','e','e','']]);

sepStr("The Mitochondria is the powerhouse of the cell")
=> [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
=> [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
=> [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
=> [ '', 'o', '', '', 'e', '', '', 'l' ],
=> [ '', 'c', '', '', 'r', '', '', '' ],
=> [ '', 'h', '', '', 'h', '', '', '' ],
=> [ '', 'o', '', '', 'o', '', '', '' ],
=> [ '', 'n', '', '', 'u', '', '', '' ],
=> [ '', 'd', '', '', 's', '', '', '' ],
=> [ '', 'r', '', '', 'e', '', '', '' ],
=> [ '', 'i', '', '', '', '', '', '' ],
=> [ '', 'a', '', '', '', '', '', '' ]]

*/

function sepStr(str) {
  let strArry = str.split(" ");
  let maxLength = Math.max(...strArry.map((word) => word.length));

  let res = Array.from({ length: maxLength }, () => []);

  for (let word of strArry) {
    for (let i = 0; i < maxLength; i++) {
      let char = word[i] !== undefined ? word[i] : "";
      res[i].push(char);
    }
  }

  return res;
}

// console.log(sepStr("Just Live Life Man"));
console.log(sepStr("The Mitochondria is the powerhouse of the cell"));
