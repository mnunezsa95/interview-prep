/* ---------------------------------------------------------------------------------------------- */
/*                                         O(n) Operation                                         */
/* ---------------------------------------------------------------------------------------------- */

// O(n): Linear Time
// - Directly proportional to the data set size

// This operation will run n times (in this case 10)
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10);

/* ---------------------------------------------------------------------------------------------- */
/*                                         O(2n) Operation                                        */
/* ---------------------------------------------------------------------------------------------- */

// O(2n): Linear Time

// This operation has two loops both running n times (2n)
// - Even though it is 2n, the constants should be dropped! This is an O(n) operation
function logItems2(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems2(3);
