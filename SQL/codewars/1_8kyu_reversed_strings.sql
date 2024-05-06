/* ---------------------------------------------------------------------------------------------- */
/*                                        Reversed Strings                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Complete the solution so that it reverses the string passed into it.
- 'world'  =>  'dlrow'
- 'word'   =>  'drow'
*/

/*
You are given a table 'solution' with column 'str', return a table with column 'str' and your result 
in a column named 'res'.
*/

SELECT 
  str,
  REVERSE(str) as res
FROM solution