/* ---------------------------------------------------------------------------------------------- */
/*                                       Count IP Addresses                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5 kyu

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
- With input "10.0.0.0", "10.0.0.50"  => return   50 
- With input "10.0.0.0", "10.0.1.0"   => return  256 
- With input "20.0.0.10", "20.0.1.0"  => return  246
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function ipsBetween(start, end) {
  let IP1 = start.split(".");
  let IP2 = end.split(".");

  let firstPart = IP2[3] - IP1[3];
  let secondPart = (IP2[2] - IP1[2]) * 256;
  let thirdPart = (IP2[1] - IP1[1]) * Math.pow(256, 2);
  let fourthPart = (IP2[0] - IP1[0]) * Math.pow(256, 3);

  return [].concat(firstPart, secondPart, thirdPart, fourthPart).reduce((cv, acc) => cv + acc, 0);
}

console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function ipsBetween2(start, end) {
  const num = (ip) => {
    return ip
      .split(".")
      .map((val) => parseInt(val))
      .reduce((acc, cv) => acc * 256 + cv);
  };

  return num(end) - num(start);
}

console.log(ipsBetween2("20.0.0.10", "20.0.1.0"));
