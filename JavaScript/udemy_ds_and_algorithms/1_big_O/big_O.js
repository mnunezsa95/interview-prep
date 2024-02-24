/* ------------------------------------------ Resources ----------------------------------------- */
// https://www.bigocheatsheet.com/

/* ---------------------------------------------------------------------------------------------- */
/*                                         O(n) Operation                                         */
/* ---------------------------------------------------------------------------------------------- */

/* O(n) = Linear Time (also called proportional)
- Number of operations is directly proportional to size of data set (n)
- Example:
-- This operation runs 'n' times (in this case 10)
*/

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10);

/* ---------------------------------------------------------------------------------------------- */
/*                                         O(2n) Operation                                        */
/* ---------------------------------------------------------------------------------------------- */

/* O(2n) = Linear Time
- Number of operations is directly proportional to size of data set (n)
- Constants are dropped! O(2n) --> O(n)

- Example:
-- This operation has two loops both running n times (n + n = 2n)
-- This is O(2n) operation, but the constant is dropped; this is an O(n) Operation!
*/

function logItems2(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems2(3);

/* ---------------------------------------------------------------------------------------------- */
/*                                        O(n^2) Operation                                        */
/* ---------------------------------------------------------------------------------------------- */

/* O(n^2) = Polynomial Time (called loop within a loop)
- Number of operations is exponentially proportional to to n * n
- Example: Nested loops for each power of n
-- This operation has a nested loop running 'n' times, meaning n * n = n^2
*/

function logItems3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(logItems3(10));

/* ------------------------------------ Dropping Non-Dominant ----------------------------------- */
// ALWAYS DROP NON-DOMINANTS

function logItems4(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}

console.log(logItems4(10));

/* ---------------------------------------------------------------------------------------------- */
/*                                         O(1) Operation                                         */
/* ---------------------------------------------------------------------------------------------- */

/* O(1): Constant Time (also called constant)
- Doesn't depend on the size of the data set. 
- Number of operations does NOT change as n changes
- The most efficient Big O
*/

function addItems(n) {
  return n + n;
}

console.log(addItems(1000));

// This is a O(2) notation but is simplified to O(1)
function addItems2(n) {
  return n + n + n;
}

console.log(addItems2(1000));

/* ---------------------------------------------------------------------------------------------- */
/*                                       O(log n) Operation                                       */
/* ---------------------------------------------------------------------------------------------- */
/* O(log n): Logarithmic Time  (also called divide and conquer)
- Splits the data in each step (divide and conquer). 
*/

/* --------------------------------- Different Terms for Inputs --------------------------------- */
function logItems5(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let j = 0; j < b; j++) {
    console.log(j);
  }
}

/*
- The first operation is O(a)
- The second operation is O(b)
- This operation is O(a + b) --> This is not a situation where it would be O(n)
*/

/* ---------------------------------------------------------------------------------------------- */
/*                                          Big O: Arrays                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
array.push(n) & array.pop() are both O(1) because reindexing does not need to happen
array.shift(i) & array.unshift(n) are both O(n) because require the array to be reindexed 
array.splice(start, end, n) is O(n) because reindexing is required

- searching by value is O(n); searching by index is O(1)
- 
*/

let myArray = [11, 3, 33, 7];
myArray.push(17);
myArray.pop();
myArray.shift();
myArray.shift(11);
myArray.splice(1, 0, "Hi");
console.log(myArray);
