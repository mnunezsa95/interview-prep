/* ---------------------------------------------------------------------------------------------- */
/*                    Count the number of exclamation marks and question marks                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Count the number of exclamation marks and question marks, return the product.

""          --->   0
"!"         --->   0
"!ab? ?"    --->   2
"!!"        --->   0
"!??"       --->   2
"!???"      --->   3
"!!!??"     --->   6
"!!!???"    --->   9
"!???!!"    --->   9
"!????!!!?" --->  20
*/

function product(string) {
  let questionMark = 0;
  let exclamationMark = 0;

  if (!string) return 0;
  string.split("").forEach((item) => {
    if (item === "!") {
      exclamationMark += 1;
    } else if (item === "?") {
      questionMark += 1;
    }
  });
  return questionMark * exclamationMark;
}

console.log(product("!????!!!?"));
console.log(product(""));
