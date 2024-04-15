/* ---------------------------------------------------------------------------------------------- */
/*                                          Int32 to IPv4                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

- 1st octet 128 has the binary representation: 10000000
- 2nd octet 32 has the binary representation: 00100000
- 3rd octet 10 has the binary representation: 00001010
- 4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
- 2149583361 ==> "128.32.10.1"
- 32         ==> "0.0.0.32"
- 0          ==> "0.0.0.0"

*/

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
