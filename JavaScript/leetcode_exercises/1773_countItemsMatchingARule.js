/* ---------------------------------------------------------------------------------------------- */
/*                                1773. Count Items Matching a Rule                               */
/* ---------------------------------------------------------------------------------------------- */

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  items.map((item) => {
    if (ruleKey === "type" && ruleValue == item[0]) {
      ++count;
    } else if (ruleKey === "color" && ruleValue == item[1]) {
      ++count;
    } else if (ruleKey === "name" && ruleValue == item[2]) {
      ++count;
    }
  });
  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
