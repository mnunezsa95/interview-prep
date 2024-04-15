/* ---------------------------------------------------------------------------------------------- */
/*                                      RGB to Hex Conversion                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5 kyu

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

*/

function rgb(r, g, b) {
  colors = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  let hexArray = [],
    hexString = "";

  [r, g, b].map((color) => {
    if (color > 255) color = 255;
    if (color < 0) color = 0;
    let firstVal = Math.floor(color / 16);
    const secondVal = ((color % 16) / 16) * 16;
    return hexArray.push(firstVal, secondVal);
  });
  hexArray.map((val) => (val > 9 ? (hexString += colors[val]) : (hexString += String(val))));
  return hexString;
}

console.log(rgb(173, 255, 47));
console.log(rgb(0, 0, -20));
console.log(rgb(255, 255, 255));
console.log(rgb(300, 255, 255));
console.log(rgb(238, 34, 68));
