/* ---------------------------------------------------------------------------------------------- */
/*                                    This is An Other Problem                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

The problem:
- Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :
-- var namedOne = new NamedOne("Naomi","Wang")
-- namedOne.firstName // -> "Naomi"
-- namedOne.lastName  // -> "Wang"
-- namedOne.fullName  // -> "Naomi Wang"

...properties may be changed :
-- namedOne.firstName = "John"
-- namedOne.firstName // -> "John"
-- namedOne.lastName = "Doe"
-- namedOne.lastName  // -> "Doe"

...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang" 
-- Oh no ! we want fullName == "John Doe" now !

Your mission:
- So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

-- If .firstName or .lastName are changed, then .fullName should also be changed
-- If .fullName is changed, then .firstName and .lastName should also be changed.
-- Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

Examples:
var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName = "John"
namedOne.lastName = "Doe"
namedOne.fullName // -> "John Doe"

namedOne.fullName = "Bill Smith"
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)

*/

function NamedOne(first, last) {
  // Set initial values for first and last
  this.firstName = first;
  this.lastName = last;

  // Getter function to get the fullName
  function getFullName() {
    return this.firstName + " " + this.lastName;
  }

  // Setter function to set the first and last name
  function setFirstAndLastName(fullName) {
    const nameParts = fullName.split(" ");
    if (nameParts.length === 2) {
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }

  // Define a property along with getter and setter functions
  Object.defineProperty(this, "fullName", {
    get: getFullName,
    set: setFirstAndLastName,
  });
}

// Declare object with one name
let namedOne = new NamedOne("John", "Doe");
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);

// Change values for first and last --> changes full name
namedOne.firstName = "Harper";
namedOne.lastName = "Nolan";
console.log(namedOne.fullName);

// Change full name --> changes the first and last name
namedOne.fullName = "Penny Nolan";
console.log(namedOne.firstName);
console.log(namedOne.lastName);
