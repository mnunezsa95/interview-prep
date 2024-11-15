/* ---------------------------------------------------------------------------------------------- */
/*                                            Isograms                                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
• "Dermatoglyphics" --> true
• "aba" --> false
• "moOse" --> false (ignore letter case)
*/

export function isIsogram(str: string): boolean {
  let chars: { [key: string]: number } = {};

  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (!chars[str[i]]) chars[str[i]] = 1;
    else chars[str[i]] += 1;
  }

  return !Object.values(chars).some((val: number) => val > 1);
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
