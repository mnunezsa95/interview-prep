/* ---------------------------------------------------------------------------------------------- */
/*                                         Acrostic Reader                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

An acrostic is a text in which the first letter of each line spells out a word. It is also a quick and 
cheap way of writing a poem for somebody, as exemplified below:

Write a program that reads an acrostic to identify the "hidden" word. Specifically, your program will 
receive a list of words (reprensenting an acrostic) and will need to return a string corresponding to 
the word that is spelled out by taking the first letter of each word in the acrostic.
*/

function readOut(acrostic) {
  let res = "";
  console.log(acrostic);
  acrostic.forEach((word, i, arr) => {
    return (res += word[0]);
  });
  return res;
}

console.log(readOut(["Jolly", "Amazing", "Courteous", "Keen"])); // Jack
