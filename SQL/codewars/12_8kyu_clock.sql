/* ---------------------------------------------------------------------------------------------- */
/*                                    Beginner Series #2 Clock                                    */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
- h = 0
- m = 1
- s = 1

result = 61000
Input constraints:
- 0 <= h <= 23
- 0 <= m <= 59
- 0 <= s <= 59

*/

SELECT 
  (h * 3600 + m * 60 + s * 1) * 1000 as res 
FROM 
  past