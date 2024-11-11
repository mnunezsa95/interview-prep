/* ---------------------------------------------------------------------------------------------- */
/*                                       Initialize My Name                                       */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 7 kyu

Some people just have a first name; some people have first and last names and some people have 
first, middle and last names. You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
  let splitName = name.split(" ");
  if (splitName.length > 2) {
    for (let i = 1; i < splitName.length - 1; i++) {
      splitName[i] = splitName[i][0] + ".";
    }
  } else {
    return name;
  }
  return splitName.join(" ");
}

console.log(initializeNames("Lois Mary Lane"));
console.log(initializeNames("Alice Betty Catherine Davis"));
console.log(initializeNames("Jack Ryan"));
console.log(initializeNames("Dimitri"));
