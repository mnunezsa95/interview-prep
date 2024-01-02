/* ---------------------------------------------------------------------------------------------- */
/*   Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right   */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 Kyu

Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

// s is string; n is integer
function remove(s, n) {
  let splitStr = s.split("");
  let count = 0; // Variable to track the number of removed exclamation marks

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "!") {
      splitStr.splice(i, 1);
      count++;
      // Check if the desired count is reached
      if (count === n) {
        break;
      }
      // Adjust the loop counter after removing an element
      i--;
    }
  }

  return splitStr.join("");
}

console.log(remove("Hi!", 1)); // "Hi"
console.log(remove("Hi!", 100)); // "Hi"
console.log(remove("Hi!!!", 1)); // "Hi!!";
console.log(remove("Hi!!!", 100)); // "Hi"
console.log(remove("!Hi", 1)); // "Hi"
console.log(remove("!Hi!", 1)); // "Hi!"
console.log(remove("!Hi!", 100)); // "Hi"
console.log(remove("!!!Hi !!hi!!! !hi", 1)); // "!!Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 3)); // "Hi !!hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 5)); // "Hi hi!!! !hi"
console.log(remove("!!!Hi !!hi!!! !hi", 100)); // "Hi hi hi"
