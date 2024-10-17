/* ---------------------------------------------------------------------------------------------- */
/*                                          Crack the Pin                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Given is a md5 hash of a five digits long PIN. It is given as string. Md5 is a function to hash your password: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38"

Why is this useful? Hash functions like md5 can create a hash from string in a short time and it is impossible to find out the password, if you only got the hash. The only way is cracking it, means try every combination, hash it and compare it with the hash you want to crack. (There are also other ways of attacking md5 but that's another story) Every Website and OS is storing their passwords as hashes, so if a hacker gets access to the database, he can do nothing, as long the password is safe enough.

Note: Many languages have build in tools to hash md5. If not, you can write your own md5 function or google for an example.

The task is to return the cracked PIN as string. Shows how weak PINs are and how important a bruteforce protection is, if you create your own login.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
const crypto = require("crypto");

function crack(hash) {
  let shouldContinue = true;
  let currentPin = "00000";
  let password;

  // Function to encrypt the password
  const passHash = (pin) => {
    return crypto.createHash("md5").update(pin).digest("hex");
  };

  // Function to increment pin
  const incrementPin = (pin) => {
    let num = parseInt(pin, 10) + 1;
    return num.toString().padStart(pin.length, "0");
  };

  // Loop through pins until one matches the hash
  while (shouldContinue) {
    let currentHash = passHash(currentPin);
    if (currentHash === hash) {
      shouldContinue = false;
      password = currentPin;
    } else currentPin = incrementPin(currentPin);
  }

  // Return password
  return password;
}

console.log(crack("827ccb0eea8a706c4c34a16891f84e7b"));
