/* ---------------------------------------------------------------------------------------------- */
/*                                      Caesar Cipher Helper                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

class CaesarCipher {
  constructor(shift) {
    if (shift < 1 || shift > 26) {
      throw new Error("Shift must be in the range [1, 26]");
    }
    this.shift = shift;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encode(message) {
    let encodedStr = "";
    message
      .toUpperCase()
      .split("")
      .forEach((letter) => {
        if (this.alphabet.includes(letter)) {
          const index = this.alphabet.indexOf(letter);
          const newIndex = (index + this.shift) % 26;
          encodedStr += this.alphabet[newIndex];
        } else {
          encodedStr += letter; // leave non-alphabetic characters unchanged
        }
      });
    return encodedStr;
  }

  decode(message) {
    let decodedStr = "";
    message
      .toUpperCase()
      .split("")
      .forEach((letter) => {
        if (this.alphabet.includes(letter)) {
          const index = this.alphabet.indexOf(letter);
          const newIndex = (index - this.shift + 26) % 26;
          decodedStr += this.alphabet[newIndex];
        } else {
          decodedStr += letter;
        }
      });
    return decodedStr;
  }
}

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode("Codewars"); // returns 'HTIJBFWX'
c.decode("BFKKQJX"); // returns 'WAFFLES'
