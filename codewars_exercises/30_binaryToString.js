/* ---------------------------------------------------------------------------------------------- */
/*                                        Binary to String                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, 
and it has something important to tell you. Write a function which will receive a long string of binary 
code and convert it to a string. Remember, in Python binary output starts with '0b'.

As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special 
symbols. The input to your function will always be one string of binary.
*/
function binaryToString(binary) {
  // split binary input (removing 0b)
  // map a string from CharCode(parseInt)
  // join the string, remove any weird symbols
  let binaryOutput = binary
    .split("0b")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("")
    .slice(1);
  console.log(binaryOutput);
  return binaryOutput;
}

console.log(binaryToString("0b10000110b11000010b1110100"));
