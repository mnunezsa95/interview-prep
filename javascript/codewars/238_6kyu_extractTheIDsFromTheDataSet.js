/* ---------------------------------------------------------------------------------------------- */
/*                                Extract the IDs from the data set                               */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

/* -------------------------------------------- Data -------------------------------------------- */
const data3 = {
  id: 1,
  items: [
    {
      id: 2,
      items: [
        {
          id: 3,
          items: [{ id: 4 }, { id: 5 }],
        },
        {
          id: 6,
          items: [{ id: 7 }],
        },
      ],
    },
  ],
};

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function extractIds(data) {
  let ids = [];
  function traverse(obj) {
    if (Number.isFinite(obj.id)) ids.push(obj.id);
    // Check if the object has an 'items' property and it is an array
    if (Array.isArray(obj.items)) obj.items.forEach(traverse); // Recursively traverse each item
  }

  traverse(data); // Start traversal with the initial data object

  return ids;
}

console.log(extractIds(data3));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */

function extractIds2(data) {
  const str = JSON.stringify(data).match(/(\d+)/g);
  return str;
}

console.log(extractIds2(data3));
