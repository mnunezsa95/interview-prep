/* ---------------------------------------------------------------------------------------------- */
/*                                          Count Objects                                         */
/* ---------------------------------------------------------------------------------------------- */

/*
Task
• Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects o in array a that satisfy o.x == o.y.

Input Format
• The first line contains an integer denoting .
• Each of the  subsequent lines contains two space-separated integers describing the values of x and y.

Output Format
• Return a count of the total number of objects o such that o.x == o.y. Locked stub code in the editor prints the returned value to STDOUT.

Sample Input
5
1 1
2 3
3 3
3 4
4 5

Sample Output 
2

Explanation
• Because we have two objects o that satisfy o.x == o.y (i.e., objects 0 and objects 2), we return 2 as our answer.
*/

function getCount(objects) {
  let count = 0;
  objects.forEach((obj) => {
    if (obj.x == obj.y) count++;
  });

  return count;
}

console.log(getCount([{ 1: 1 }, { 2: 3 }, { 3: 3 }, { 3: 4 }, { 4: 5 }]));
