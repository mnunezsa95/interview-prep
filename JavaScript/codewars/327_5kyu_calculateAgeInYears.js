/* ---------------------------------------------------------------------------------------------- */
/*                                     Calculate Age in Years                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5kyu

Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.

- getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
- getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
- getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
- getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8
*/

function getAge(birthDate, nowDate) {
  nowDate = nowDate || new Date();

  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthYear = birthDate.getFullYear();
  const currentDay = nowDate.getDate();
  const currentMonth = nowDate.getMonth();
  const currentYear = nowDate.getFullYear();

  let age = currentYear - birthYear;

  // If current month is before birth month OR months are the same and birth day is before current day subtract one from age
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}

console.log(getAge(new Date("1913/01/01"), new Date("2013/01/01")));
console.log(getAge(new Date("1980/01/01")));
console.log(getAge(new Date("2008/01/01"), new Date("2000/01/01")));
