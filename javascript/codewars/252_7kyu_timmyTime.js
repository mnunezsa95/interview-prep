/* ---------------------------------------------------------------------------------------------- */
/*                                           Timmy Time                                           */
/* ---------------------------------------------------------------------------------------------- */

/*
Write a function changeTime which increases or decreases given time. Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'

*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function changeTime(input, delta) {
  let [hr, min] = input.split(":").map((x) => +x);
  min = min + delta;

  if (min === 60) {
    hr++;
    min = 0;
  } else if (min === -1) {
    hr--;
  }

  if (hr === 24) hr = 0;
  else if (hr === -1) hr = 23;
  if (min === -1) min = 59;

  return String(hr).padStart(2, "0") + ":" + String(min).padStart(2, "0");
}

console.log(changeTime("23:59", 1));
console.log(changeTime("00:00", -1));
console.log(changeTime("10:00", 1));
console.log(changeTime("10:00", -1));
