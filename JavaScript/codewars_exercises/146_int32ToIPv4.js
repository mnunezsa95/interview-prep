/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function int32ToIp(int32) {
  if (int32 != 0) {
    let binary = int32.toString(2),
      binaryArray = [],
      result = [],
      i = 8;
    while (i < 40) {
      let current = binary.slice(i - 8, i); //1: 0-8, 2: 8-16
      binaryArray.push(current);
      i += 8;
    }
    for (i = 0; i < binaryArray.length; i++) {
      let int = parseInt(binaryArray[i], 2);
      result.push(int.toString());
    }
    return result.toString().replaceAll(",", ".");
  }
  return "0.0.0.0";
}

console.log(int32ToIp(2154959208));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function int32ToIp2(int32) {
  // The >> returns a 32-bit integer
  // & will zeroes out all bits in the integer except the last 8 bits (the first octet)
  return ((int32 >> 24) & 0xff) + "." + ((int32 >> 16) & 0xff) + "." + ((int32 >> 8) & 0xff) + "." + (int32 & 0xff);
}

console.log(int32ToIp2(2154959208));

/* ----------------------------------------- SOLUTION 3 ----------------------------------------- */

function int32ToIp3(int32) {
  // The >> returns a 32-bit integer
  // & will zeroes out all bits in the integer except the last 8 bits (the first octet)
  return [24, 16, 8, 0].map((e) => (int32 >> e) & 0xff).join(".");
}

console.log(int32ToIp3(2154959208));
