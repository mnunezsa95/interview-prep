/* ---------------------------------------------------------------------------------------------- */
/*                                             SHA-256                                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Create a function that converts a given ASCII string to its hexadecimal SHA-256 hash.

sha256("Hello World!") => "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
*/

const crypto = require("crypto");

function sha256(string) {
  const hash = crypto.createHash("sha256");
  const hashData = hash.update(string);
  return hashData.digest("hex");
}

console.log(sha256("Hello World!"));
