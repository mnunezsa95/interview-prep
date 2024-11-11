/* ---------------------------------------------------------------------------------------------- */
/*                                            Kebabize                                            */
/* ---------------------------------------------------------------------------------------------- */

/**
Difficulty: 6 kyu

Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters 
*/

function kebabize(str) {
  const capitals = /(?=[A-Z])/;
  const numbers = /[0-9]/g;
  return str.replaceAll(numbers, "").split(capitals).join("-").toLowerCase();
}

console.log(kebabize("MyCamelHas3Humps"));
console.log(kebabize("myCamelHas3Humps"));
console.log(kebabize("CAMEL"));
