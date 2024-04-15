/* ---------------------------------------------------------------------------------------------- */
/*                                          Dinner Plans                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

Compare the proposals with the following function:
function commonGround(s1, s2)

The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")
*/

/* ----------------------------------------- SOLUITON 1 ----------------------------------------- */
function commonGround(s1, s2) {
  let res = [];
  let s1Split = s1.split(" ");
  let s2Split = s2.split(" ");
  if (s1Split.length >= s2Split.length) {
    s2Split.forEach((word) => {
      if (s1Split.includes(word)) res.push(word);
    });
  } else if (s1Split.length < s2Split.length) {
    s1Split.forEach((word) => {
      if (s2Split.includes(word)) res.push(word);
    });
  }
  return res.join(" ") || "death";
}

console.log(commonGround("eat chicken", "eat chicken and rice"));
console.log(commonGround("eat a burger and drink a coke", "drink a coke"));
console.log(commonGround("i like turtles", "what are you talking about"));
console.log(commonGround("tGuv KH3t JvwMFv5", "tGuv roro ouJq"));

/* ----------------------------------------- SOLUITON 2 ----------------------------------------- */
function commonGround2(s1, s2) {
  return (
    s2
      .split(" ")
      .filter((val) => s1.includes(val))
      .join(" ") || "death"
  );
}

console.log(commonGround2("eat chicken", "eat chicken and rice"));
console.log(commonGround2("eat a burger and drink a coke", "drink a coke"));
console.log(commonGround2("i like turtles", "what are you talking about"));
console.log(commonGround2("tGuv KH3t JvwMFv5", "tGuv roro ouJq"));
