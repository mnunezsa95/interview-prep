/* ---------------------------------------------------------------------------------------------- */
/*                                      Address Book by State                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Given a string with friends to visit in different states:

ad3="John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA"

we want to produce a result that sorts the names by state and lists the name of the state followed by the name of each person residing in that state (people's names sorted). When the result is printed we get:

Massachusetts
.....^John Daggett 341 King Road Plymouth Massachusetts
.....^Sal Carpenter 73 6th Street Boston Massachusetts
^Virginia
.....^Alice Ford 22 East Broadway Richmond Virginia
Spaces not being always well seen, in the above result ^ means a white space.

The resulting string (when not printed) will be:

"Massachusetts\n..... John Daggett 341 King Road Plymouth Massachusetts\n..... Sal Carpenter 73 6th Street Boston Massachusetts\n Virginia\n..... Alice Ford 22 East Broadway Richmond Virginia"
or (the separator is \n or \r\n depending on the language)

"Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"

Notes
- There can be a blank last line in the given string of addresses.
- The tests only contains CA, MA, OK, PA, VA, AZ, ID, IN for states.
- You can see another example in the "Sample tests".

States
'AZ': 'Arizona',
'CA': 'California',
'ID': 'Idaho',
'IN': 'Indiana',
'MA': 'Massachusetts',
'OK': 'Oklahoma',
'PA': 'Pennsylvania',
'VA': 'Virginia'
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function byState(str) {
  const cityStateDict = {
    AZ: "Arizona",
    CA: "California",
    ID: "Idaho",
    IN: "Indiana",
    MA: "Massachusetts",
    OK: "Oklahoma",
    PA: "Pennsylvania",
    VA: "Virginia",
  };

  const res = {};

  const person = str.split("\n");
  const cityState = person.map((p) => p.split(",")[2].trim());
  const state = cityState.map((c) => c.split(" ")[1]);

  const personFormatted = person.map((p) => {
    const stateAbbr = p.split(" ")[6];
    return p.replaceAll(",", "").replaceAll(stateAbbr, cityStateDict[stateAbbr]);
  });

  state.forEach((stateAbbreviation, index) => {
    const fullStateName = cityStateDict[stateAbbreviation];
    if (!res[fullStateName]) {
      res[fullStateName] = [];
    }

    res[fullStateName].push(personFormatted[index]);
  });

  let resultString = "";
  for (const [key, value] of Object.entries(res)) {
    resultString += "\r\n " + key + "\r\n";
    resultString += `..... ${value.sort().join("\r\n..... ")}\r\n`;
  }
  return resultString.trimEnd();
}

console.log(
  byState(`John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`)
);
