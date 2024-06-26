/* ---------------------------------------------------------------------------------------------- */
/*                                          IPv4 to int32                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6kyu

Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

Example
"128.32.10.1" => 2149583361
*/

function ipToInt32(ip) {
  const binaryString = ip
    .split(".") // split the IP string by "."
    .map((val) => Number(val).toString(2).padStart(8, "0")) // Convert to binary, pad 0s till len=8
    .join(""); // join string again

  return parseInt(binaryString, 2); // convert the string to 32-bit
}

console.log(ipToInt32("128.32.10.1")); // 2149583361
