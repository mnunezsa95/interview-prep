/* ---------------------------------------------------------------------------------------------- */
/*                                    Count strings in objects                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })

  - returns 3
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function strCount(obj) {
  let count = 0;
  const countString = (item) => {
    if (typeof item === "string") count++;
    else if (Array.isArray(item)) {
      item.flat(Infinity).forEach((item) => countString(item));
    } else if (!Array.isArray(item) && typeof item === "object" && item !== null) {
      Object.values(item).forEach((item) => countString(item));
    }
  };

  Object.values(obj).forEach((item) => countString(item));
  return count;
}

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: {
      1: "one",
    },
  })
);

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function strCount2(obj) {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] === "string") count++;
    else if (typeof obj[key] === "object") count += strCount2(obj[key]);
  }
  return count;
}

console.log(
  strCount2({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: {
      1: "Penny",
      2: "Harper",
    },
  })
);
