# Big O Notes

## Resources

https://www.bigocheatsheet.com/

---

## What is Big O?

- Big O Notation is a metric for determining an algorithm's efficiency.
- Measures how effectively your code scales as your input size increases
- In simple terms: It gives an estimate of how long it takes your code to run on different sets of inputs.

## What is Time Complexity?

- Time complexity is a measure of time a code runs
- Time complexity is measured in the number of operations
  - If it were measured in seconds then other factors (like computer speed, internet speed, etc) would be a factor

## What is Space Complexity?

- Space complexity is the amount of memory used in code

## Symbols used in Big O

1.  Omega (Ω) - Lower Bound
    - What it means: Omega (Ω) describes the best-case scenario for an algorithm.
    - In simple terms: It tells you the fastest an algorithm can run in the best circumstances.
2.  Theta (Θ) - Tight Bound
    - In simple terms: It tells you what to generally expect in terms of time complexity.
3.  Big O (O) - Upper Bound (Worst Case)
    - What it means: Big O (O) describes the worst-case scenario for an algorithm.
    - In simple terms: It tells you the slowest an algorithm can run in the worst circumstances.

---

## Big O (Graphical View)

![Big O Complexity Chart](https://miro.medium.com/v2/resize:fit:1400/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)

## O(n) Operations (Linear Time)

- Linear Time (also called Proportional)
  - Number of operations is directly proportional to size of data set (n)
  - These operations will run 'n' times
- Examples:
  - Looping through an array.

Example: The number of operations is proportional to n (in this case 10)

O(n)

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10);
```

---

## O(n^2) Operations (Polynomial Time)

- Polynomial Time (also called 'loop within a loop')
  - Number of operations is proportional to n \* n
- Examples:
  - Nested loops for each power of n

Example: This operation has a loop running n times and a nested loop running 'n' times

O(n) \* O(n) = O(n^2)

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(logItems(10));
```

---

## O(1) Operations (Constant Time)

- Constant Time (also called 'constant')
- Does NOT depend on size of the data set
  - Number of operations does NOT change as n changes
- The MOST efficient Big O
- Examples:
  - Accessing an array element by its index.

Example 1: This is an O(1) operation

```js
function addItems(n) {
  return n + n;
}
console.log(addItems(1000));
```

Example 2: This is an O(2) operation, which is simplified to O(1)

```js
function addItems(n) {
  return n + n + n;
}

console.log(addItems(1000));
```

---

## O(log n) Operations (Logarithmic Time)

- Logarithmic Time (also called 'divide and conquer')
- Splits the data in each step (divide and conquer).
- Examples:
  - Binary search

---

## O(n log n) Operations (Logarithmic Time)

- Logarithmic Time (also called 'divide and conquer')
- Splits and sorts or searches data
- Examples:
  - Merge sort
  - Quick sort

---

## Rules of Big O

1. Drop Constants
   - When analyzing the time and space complexity of an algorithm expressions can be simplified by disregarding constant factors.

Example:

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems(3);
```

- Explanation: Dropping Constants
  - This function has two loops, which are both running n times.
  - Both operations are O(n)
    - O(n) + O(n) = O(2n) = O(n)

2. Drop Non-Dominant Terms
   - The dominant term is the one that grows the fastest as the input size increases.
   - The non-dominant term has a lesser impact on the overall complexity.
   - Dropping non-dominant terms involves focusing only on the dominant terms and disregarding the non-dominant terms.

Example:

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
  console.log(logItems(10));
}
```

- Explanation: Dropping Non-Dominant Terms
  - The first for loop & its nested loop runs O(n^2)
  - The second for loop runs O(n)
  - O(n^2 + n) -> the addition of n to O(n^2) does NOT make a big difference
    - O(n^2) is dominant
    - O(n) is non-dominant

3. Different Terms for Inputs
   - When there is more than one input, only one term can be considered 'n'

Example:

```js
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let j = 0; j < b; j++) {
    console.log(j);
  }
}
```

- Explanation: Different Terms for Inputs
  - The first operation is O(a)
  - The second operation is O(b)
  - This operation is O(a + b) --> This is not a situation where it would be O(n), because 'a' and 'b' can both NOT be equal to 'n'

---

## Understanding Big O: Arrays

- Certain array methods are O(1), while others are O(n)
  - This depends on whether or not re-indexing is required.
- O(1):
  - Adding or removing values at the end of an array (push() & pop()) are both O(1) because reindexing is not required
  - Searching by index
- O(n):
  - Adding or removing values at the beginning (shift(), unshift()) or in the middle of an array (splice()) are O(n) operations because re-indexing is required
  - Searching by value

```js
let myArray = [11, 3, 33, 7];

myArray.push(17); // O(1)
myArray.pop(); // O(1)
myArray.shift(); // O(n)
myArray.shift(11); // O(n)
myArray.splice(1, 0, "Hi"); // O(n)
```
