/* ---------------------------------------------------------------------------------------------- */
/*                                           Pretty Date                                          */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Write a helper function that accepts an argument (Ruby: a Time object / Others: number of seconds) 
and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

toPretty(0) => "just now"
toPretty(40000) => "11 hours ago"

Specifics
The output will be an amount of time, t, included in one of the following phrases: "just now", 
"[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".

You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of 
"a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".

The amount of time is always rounded down to the nearest integer. For example, if the amount of time 
is actually 11.73 hours ago, the return value will be "11 hours ago".

Only times in the past will be given, with the range "just now" to "52 weeks ago"
*/

function toPretty(seconds) {
  if (seconds < 1) return "just now";
  if (seconds < 60) return `${seconds > 1 ? `${seconds} seconds` : "a second"} ago`;
  if (seconds < 3600) return `${seconds > 120 ? `${Math.floor(seconds / 60)} minutes` : "a minute"} ago`;
  if (seconds < 85400) return `${seconds > 7200 ? `${Math.floor(seconds / 3600)} hours` : "an hour"} ago`;
  if (seconds < 604800) return `${seconds > 172800 ? `${Math.floor(seconds / 86400)} days` : "a day"} ago`;
  if (seconds >= 604800) return `${seconds > 1209600 ? `${Math.floor(seconds / 604800)} weeks` : "a week"} ago`;
}

console.log(toPretty(40000));
console.log(toPretty(0));
console.log(toPretty(120));
console.log(toPretty(40));
console.log(toPretty(1));
