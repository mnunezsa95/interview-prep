/* ---------------------------------------------------------------------------------------------- */
/*                                        What's A Name In?                                       */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

Examples
    "Across the rivers", "chris" --> true
      ^      ^  ^^   ^
      c      h  ri   s
                
    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    "Next to a lake", "chris" --> false

    Contains none of the letters in "chris".
--------------------------------------------------------------------
    "Under a sea", "chris" --> false
         ^   ^
         r   s

    Contains only some of the letters in "chris".
--------------------------------------------------------------------
    "A crew that boards the ship", "chris" --> false
       cr    h              s i
       cr                h  s i  
       c     h      r       s i
                 ...
          
    Contains all of the letters in "chris", but not in order.
--------------------------------------------------------------------
    "A live son", "Allison" --> false
     ^ ^^   ^^^
     A li   son
            
    Contains all of the correct letters in "Allison", in order, but not enough of all of them (missing an 'l').

*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */

function nameInStr(str, name) {
  str = str.toLowerCase();
  name = name.toLowerCase();
  let nameIndex = 0;
  let strIndex = 0;
  while (nameIndex < str.length && strIndex < name.length) {
    if (str[nameIndex] === name[strIndex]) strIndex++;
    nameIndex++;
  }
  return strIndex === name.length;
}

console.log(nameInStr("Across the rivers", "chris"));
console.log(nameInStr("A live son", "Allison"));
console.log(nameInStr("Next to a lake", "chris"));
console.log(nameInStr("A crew that boards the ship", "chris"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function nameInStr2(str, name) {
  str = str.toLowerCase();
  name = name.toLowerCase();
  let index = 0;
  for (let char of str) {
    if (char === name[index]) index++;
  }
  return index === name.length;
}

console.log(nameInStr2("Across the rivers", "chris"));
// console.log(nameInStr2("A live son", "Allison"));
// console.log(nameInStr2("Next to a lake", "chris"));
// console.log(nameInStr2("A crew that boards the ship", "chris"));
