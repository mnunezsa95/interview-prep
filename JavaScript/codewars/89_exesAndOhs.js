/* ---------------------------------------------------------------------------------------------- */
/*                                          Exes and Ohs                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:
- XO("ooxx") => true
- XO("xooxx") => false
- XO("ooxXm") => true
- XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
- XO("zzoo") => false
*/

// SOLUTION 1
function XO(str) {
  let res = [0, 0];
  str = str.toLowerCase();
  if (!str.includes("x") && !str.includes("o")) return true;
  str
    .split("")
    .filter((item) => item === "x" || item === "o")
    .map((item2) => (item2 === "x" ? (res[0] += 1) : (res[1] += 1)));
  if (res[0] === res[1]) return true;
  else return false;
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("OO"));
console.log(XO("Oo"));
console.log(XO("OoXXX"));
console.log(XO(""));

// SOLUTION 2
const XO2 = (str) => {
  str = str.toLowerCase().split("");
  return str.filter((x) => x === "x").length === str.filter((x) => x === "o").length;
};

console.log(XO2("xo"));
console.log(XO2("xxOo"));
console.log(XO2("xxxm"));
console.log(XO2("OO"));
console.log(XO2("Oo"));
console.log(XO2("OoXXX"));
console.log(XO2(""));
