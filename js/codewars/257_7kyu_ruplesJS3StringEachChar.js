/* ---------------------------------------------------------------------------------------------- */
/*                                  RuplesJS #3: String EachChar                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

String.eachChar()
In ruby you can add something after each character in a string like so:

"hello".each_char {|c| print c, ' ' } -> "h e l l o " 
In the spirit of polymorphism, our eachChar method will allow one of two arguments, a callback function or a string. If a string is presented, it will be added after each character of the original string and return the new string. If a function is presented, it will perform a manipulation of each character in the string.

Example:

"hello".eachChar(" ");
-> "h e l l o "

"hello all".eachChar(function(char) {
  if (char == "l") {
    return char.toUpperCase();
  } else {
    return char;
  }
});
-> "heLLo aLL"
Please add your contribution to RuplesJS!
*/

String.prototype.eachChar = function (arg) {
  return typeof arg === "string"
    ? this.split("")
        .map((item) => (item += arg))
        .join("")
    : this.split("").map(arg).join("");
};

console.log("hello".eachChar(" "));
console.log("hello".eachChar("123"));
console.log("H e l l o ".eachChar((c) => (c == " " ? "1" : c)));
console.log("I12 0ca431n35no55t 77re3321231ad 4t4h7771i888973s.".eachChar((c) => (/[0-9]/.test(c) ? "" : c)));

/*
! SOLUTION NOTES:
- Using an arrow function in this situation will not work, because arrow functions don't bind their own scope, but inherit it from the parent scope.
*/
