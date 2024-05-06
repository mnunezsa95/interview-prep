/* ---------------------------------------------------------------------------------------------- */
/*                                    Basic data types--object                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or 
var obj={}

Give you a function animal, accept 1 parameter:obj like this: {name:"dog",legs:4,color:"white"}
and return a string like this: "This white dog has 4 legs."
*/

function animal(obj) {
  let object = new Object(obj);
  return `This ${object.color} ${object.name} has ${object.legs} legs.`;
}

animal({ name: "dog", legs: 4, color: "white" });
