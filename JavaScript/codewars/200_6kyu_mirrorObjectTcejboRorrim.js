/* ---------------------------------------------------------------------------------------------- */
/*                                  Mirror object - tcejbo rorriM                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -
Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx
"You cannot change the original object, because if you did that the reflection would change."
*/

const mirror = (obj) => {
  let res = {};
  Object.entries(obj)
    .map((arr) => [arr[0], arr[0].split("").reverse().join("")])
    .forEach((pair) => (res[pair[0]] = pair[1]));
  return res;
};

console.log(
  mirror({
    abc: undefined,
    arara: undefined,
  })
);
