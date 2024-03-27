/* ---------------------------------------------------------------------------------------------- */
/*                                         Driving License                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

In the United Kingdom, the driving licence is the official document which authorises its holder 
to operate various types of motor vehicle on highways and some other roads to which the public have 
access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing 
Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is 
required in the UK by any person driving a vehicle on any highway or other road defined in s.192 
Road Traffic Act 1988[1] irrespective of ownership of the land over which the road passes, thus 
including many which allow the public to pass over private land; similar requirements apply in 
Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source Wikipedia)

Task
The UK driving number is made up from the personal details of the driver. The individual letters 
and digits can be code using the below information

1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters 
in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"

Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just 
    horthand ie September or Sep)
4 = M-Male or F-Female
*/

function driver(data) {
  let date = new Date(data[3]);
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  let id = "";

  if (data[2].length >= 5) id += data[2].slice(0, 5);
  else id += data[2].padEnd(5, "9");

  id += year[2];
  if (data[4] === "F") id += Number(month[0]) + 5 + month[1] + day;
  else id += month + day;
  id += year[3] + data[0][0];
  if (data[1] == "") id += 9;
  else id += data[1][0];
  id += 9 + "AA";

  return id.toUpperCase();
}

console.log(driver(["Johanna", "", "Gibbs", "13-Dec-1981", "F"])); // GIBBS-8-62-13-1-J9-9-AA
console.log(driver(["Andrew", "Robert", "Lee", "02-September-1981", "M"])); // LEE99-8-09-02-1-AR-9-AA
