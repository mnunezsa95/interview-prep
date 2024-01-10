/* ---------------------------------------------------------------------------------------------- */
/*                                           FindMedian                                           */
/* ---------------------------------------------------------------------------------------------- */

function findMedian(arr) {
  arr.sort();
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  } else {
    return arr[middleIndex];
  }
}

const value4 = findMedian([0, 1, 2, 4, 5, 6, 3]);
console.log(value4);
