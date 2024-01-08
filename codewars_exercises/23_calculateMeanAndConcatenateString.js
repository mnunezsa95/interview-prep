/* ---------------------------------------------------------------------------------------------- */
/*                              Calculate mean and concatenate string                             */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 7 kyu

You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. 
There will always be 10 integers and 10 characters. Create a single string with the characters and return it 
as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return:
[3.6, "udiwstagwo"]
*/

// lst will be ints and chars
function mean(lst) {
  let str = "";
  let num = [];
  let numCount = 0;
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < lst.length; i++) {
    if (!numbers.includes(lst[i])) {
      str += lst[i];
    } else {
      num.push(Number(lst[i]));
      numCount++;
    }
  }
  let res = num.reduce((acc, currVal) => acc + currVal, 0) / numCount;
  console.log((lst = [res, str]));
  return (lst = [res, str]);
}

mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]);
