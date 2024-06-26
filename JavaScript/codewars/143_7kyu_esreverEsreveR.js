/* ---------------------------------------------------------------------------------------------- */
/*                                        esrever esreveR!                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:
- esrever("hello world.") == "dlrow olleh."
- esrever("Much l33t?") == "t33l hcuM?"
- esrever("tacocat!") == "tacocat!"

Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.
*/

const esrever = (str) => {
  let lastChar = str.slice(-1);
  let newStr = str.slice(0, -1);
  return (
    newStr
      .split(" ")
      .reverse()
      .map((word) => word.split("").reverse().join(""))
      .join(" ") + lastChar
  );
};

console.log(esrever("an Easy one?"));
console.log(esrever("b3tTer p4ss thIS 0ne."));
